using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using FilmsCatalog.BLL.Core.Interfaces;
using AutoMapper;
using FilmsCatalog.API.Models;
using FilmsCatalog.BLL.Core.DTO;
using FilmsCatalog.API.Configuration.Filters;
using Microsoft.AspNetCore.Authorization;
using System.Collections;
using Microsoft.AspNetCore.Http;
using System.Net.Http;
using System.Net;
using System.Net.Http.Headers;
using Newtonsoft.Json;

namespace FilmsCatalog.API.Controllers
{
    [Authorize(AuthenticationSchemes = "Bearer")]
    [ServiceFilter(typeof(LoggingFilter))]
    [Route("api/[controller]")]
    [ApiController]
    public class FilmDetailsController : ControllerBase
    {
        private readonly ICommentService _commentService;
        private readonly IRatingService _ratingService;
        private readonly IImageService _imageService;
        private readonly IMapper _mapper;

        public FilmDetailsController(ICommentService commentService, IRatingService ratingService, IImageService imageService, IMapper mapper)
        {
            _commentService = commentService;
            _ratingService = ratingService;
            _imageService = imageService;
            _mapper = mapper;
        }

        [HttpPost("comment")]
        public async Task<IActionResult> AddCommentAsync(CommentModel comment)
        {
            var commentDTO = _mapper.Map<CommentModel, CommentDTO>(comment);
            await _commentService.AddCommentAsync(commentDTO);
            return Ok();
        }

        [HttpGet("comment/{filmId}")]
        public async Task<IActionResult> GetFilmCommentsAsync(int filmId)
        {
            var comments = await _commentService.GetFilmCommentsAsync(filmId);
            return Ok(comments);
        }

        [HttpGet("user/{userId}")]
        public async Task<IActionResult> GetUserCommentsAsync(string userId)
        {
            var comments = await _commentService.GetUserCommentsAsync(userId);
            return Ok(comments);
        }

        [HttpPost("rate")]
        public async Task<IActionResult> RateFilmAsync(RatingModel model)
        {
            var ratingDTO = _mapper.Map<RatingModel, RatingDTO>(model);
            await _ratingService.AddFilmRatingAsync(ratingDTO);
            return Ok();
        }

        [HttpGet("rate/{filmId:int}")]
        public async Task<IActionResult> GetFilmRatingAsync(int filmId)
        {
            var rating = await _ratingService.GetFilmRatingAsync(filmId);
            return Ok(rating);
        }

        [HttpGet("rate/all")]
        public async Task<IActionResult> GetAllFilmRatingsAsync()
        {
            var ratings = await _ratingService.GetAllRatingsAsync();
            return Ok(ratings);
        }
        [AllowAnonymous]
        [HttpGet("image/{filmId}")]
        public async Task<IActionResult> GetImage(int filmId)
        {
            // var images = await _imageService.GetAllImages(filmId);
            //// images.Headers.ContentType = new MediaTypeHeaderValue( "image/jpeg");
            // return images;
            using (var httpClient = new HttpClient())
            {
                var requestUrl = "https://cloud-api.yandex.net:443/v1/disk/public/resources/download?public_key=" + "https://yadi.sk/i/i0wsvvXH6LLESA";
                var message = await httpClient.GetAsync(requestUrl);
                var content = await message.Content.ReadAsStringAsync();
                var downloaderUrl = JsonConvert.DeserializeObject<YandexDiskResponse>(content).Href;

                message = await httpClient.GetAsync(downloaderUrl);                
                return Ok(message);
            }
        }
    }
}

