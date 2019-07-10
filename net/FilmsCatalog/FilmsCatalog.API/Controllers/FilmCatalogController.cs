using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using FilmsCatalog.API.Models;
using FilmsCatalog.BLL.Core.DTO;
using FilmsCatalog.BLL.Interfaces;
using FilmsCatalog.API.Configuration.Filters;
using FilmsCatalog.API.Logging.Filters;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using System;
using FilmsCatalog.BLL.Core.Interfaces;

namespace FilmsCatalog.API.Controllers
{
    [ServiceFilter(typeof(ExceptionFilter))]
    [ServiceFilter(typeof(LoggingFilter))]
    [Authorize(AuthenticationSchemes = "Bearer")]
    [Route("api/[controller]")]
    [ApiController]
    public class FilmCatalogController : ControllerBase
    {
        private readonly IFilmService _filmService;
        private readonly IImageService _imageService;
        private readonly IMapper _mapper;

        public FilmCatalogController(IFilmService filmService, IImageService imageService, IMapper mapper)
        {
            _filmService = filmService;
            _imageService = imageService;
            _mapper = mapper;
        }

        [HttpGet("[action]/{id:int}")]
        public async Task<IActionResult> GetFilm(int id)
        {
            try
            {
                var film = await _filmService.GetFilmAsync(id);
                var filmModel = _mapper.Map<FilmInfoDTO, FilmInfoModel>(film);

                return Ok(filmModel);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("all")]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var films = await _filmService.GetAllFilmsAsync();
                var filmModels = _mapper.Map<IEnumerable<FilmDTO>, IEnumerable<FilmModel>>(films);

                return Ok(filmModels);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Create(FilmModel model)
        {
            try
            {
                var film = _mapper.Map<FilmModel, FilmDTO>(model);
                await _filmService.AddFilmAsync(film);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("[action]")]
        public async Task<IActionResult> Update(FilmModel model)
        {
            try
            {
                var film = _mapper.Map<FilmModel, FilmDTO>(model);
                await _filmService.UpdateFilmAsync(film);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("[action]/{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var filmInDb = await _filmService.GetFilmAsync(id);
                await _filmService.RemoveFilmAsync(id);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("posters")]
        public async Task<IActionResult> GetPostersAsync()
        {
            try
            {
                var posters = await _imageService.GetPostersAsync();
                return Ok(posters);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("search/{name}")]
        public async Task<IActionResult> Search(string name)
     {
            try
            {
                var resultsDTOs = await _filmService.FilterByName(name);
                var results = _mapper.Map<IEnumerable<FilmDTO>, IEnumerable<FilmModel>>(resultsDTOs);


                return Ok(results);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}