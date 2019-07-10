using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using FilmsCatalog.BLL.Core.Interfaces;
using AutoMapper;
using FilmsCatalog.API.Models;
using FilmsCatalog.BLL.Core.DTO;
using FilmsCatalog.API.Configuration.Filters;
using Microsoft.AspNetCore.Authorization;
using System;
using System.Linq;
using System.Collections.Generic;

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
            try
            {
                var commentDTO = _mapper.Map<CommentModel, CommentDTO>(comment);
                await _commentService.AddCommentAsync(commentDTO);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("comment/{filmId}")]
        public async Task<IActionResult> GetFilmCommentsAsync(int filmId)
        {
            try
            {
                var commentDTOs = await _commentService.GetFilmCommentsAsync(filmId);
                var comments = _mapper.Map<IEnumerable<CommentDTO>, IEnumerable<CommentModel>>(commentDTOs);
                return Ok(comments);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("user/{userId}")]
        public async Task<IActionResult> GetUserCommentsAsync(string userId)
        {
            try
            {
                var comments = await _commentService.GetUserCommentsAsync(userId);
                return Ok(comments);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("rate")]
        public async Task<IActionResult> RateFilmAsync(PostRatingModel model)
        {
            try
            {
                var ratingDTO = _mapper.Map<PostRatingModel, RatingDTO>(model);
                await _ratingService.AddFilmRatingAsync(ratingDTO);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("rate/{filmId:int}")]
        public async Task<IActionResult> GetFilmRatingAsync(int filmId)
        {
            try
            {
                var ratingDTO = await _ratingService.GetFilmRatingAsync(filmId);
                var rating = _mapper.Map<FilmRatingDTO, RatingModel>(ratingDTO);
                return Ok(rating);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("rate/all")]
        public async Task<IActionResult> GetAllFilmRatingsAsync()
        {
            try
            {
                var ratingsDTOs = await _ratingService.GetAllRatingsAsync();
                var ratings = _mapper.Map<IEnumerable<FilmRatingDTO>, IEnumerable<RatingModel>>(ratingsDTOs);
                return Ok(ratings);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("image/{filmId}")]
        public async Task<IActionResult> GetImagesUrls(int filmId)
        {
            try
            {
                var urls = await _imageService.GetUrlsAsync(filmId);
                return Ok(urls);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}

