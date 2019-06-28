using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using FilmsCatalog.BLL.Core.Interfaces;
using AutoMapper;
using FilmsCatalog.API.Models;
using FilmsCatalog.BLL.Core.DTO;
using FilmsCatalog.API.Configuration.Filters;
using Microsoft.AspNetCore.Authorization;

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
        private readonly IMapper _mapper;

        public FilmDetailsController(ICommentService commentService, IRatingService ratingService, IMapper mapper)
        {
            _commentService = commentService;
            _ratingService = ratingService;
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
            var comments= await _commentService.GetUserCommentsAsync(userId);
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
    }
}