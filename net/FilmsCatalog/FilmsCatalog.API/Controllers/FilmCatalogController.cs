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
        private readonly IMapper _mapper;

        public FilmCatalogController(IFilmService filmService, IMapper mapper)
        {
            _filmService = filmService;
            _mapper = mapper;
        }

        [HttpGet("[action]/{id:int}")]
        public async Task<IActionResult> GetFilm(int id)
        {
            var film = await _filmService.GetFilmAsync(id);

            if (film == null)
            {
                return BadRequest();
            }

            var filmModel = _mapper.Map<FilmDTO, FilmModel>(film);

            return Ok(filmModel);
        }

        [HttpGet("all")]
        public async Task<IActionResult> GetAll()
        {
            var films = await _filmService.GetAllFilmsAsync();
            var filmModels = _mapper.Map<IEnumerable<FilmDTO>, IEnumerable<FilmModel>>(films);

            return Ok(filmModels);
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
                return BadRequest(ex);
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
                return BadRequest(ex);
            }
        }

        [HttpDelete("[action]/{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            var filmInDb = await _filmService.GetFilmAsync(id);
            try
            {
                await _filmService.RemoveFilmAsync(id);
                return Ok();

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}