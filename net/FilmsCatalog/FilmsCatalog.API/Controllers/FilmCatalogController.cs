using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using FilmsCatalog.API.Models;
using FilmsCatalog.BLL.Core.DTO;
using FilmsCatalog.BLL.Interfaces;
using FilmsCatalog.API.Configuration.Filters;
using System.Threading.Tasks;
using System;
using FilmsCatalog.BLL.Core.Interfaces;
using Microsoft.AspNet.OData;
using Microsoft.AspNet.OData.Routing;
using System.Linq;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Authorization;

namespace FilmsCatalog.API.Controllers
{
    [ServiceFilter(typeof(LoggingFilter))]
    [Authorize]
    public class FilmsController : ODataController
    {
        private readonly IFilmService _filmService;
        private readonly IImageService _imageService;
        private readonly IMapper _mapper;

        public FilmsController(IFilmService filmService, IImageService imageService, IMapper mapper)
        {
            _filmService = filmService;
            _imageService = imageService;
            _mapper = mapper;
        }

        [HttpGet]
        [EnableQuery(PageSize = 8)]
        public async Task<IActionResult> Get()
        {
            try
            {
                var films = _filmService.GetAllFilmsAsync()
                               .ProjectTo<FilmModel>(_mapper.ConfigurationProvider);

                return Ok(films);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [EnableQuery]
        public async Task<IActionResult> Get([FromODataUri] int key)
        {
            try
            {
                var filmModel = _filmService.GetAllFilmsAsync().Where(x => x.Id == key)
                                .ProjectTo<FilmDetailsModel>(_mapper.ConfigurationProvider);

                return Ok(filmModel);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [EnableQuery]
        public async Task<IActionResult> Post([FromBody]FilmModel model)
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

        [HttpPut]
        [EnableQuery]
        public async Task<IActionResult> Update([FromBody]FilmModel model)
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

        [HttpDelete]
        [EnableQuery]
        public async Task<IActionResult> Delete([FromODataUri]int key)
        {
            try
            {
                var filmInDb = _filmService.GetFilmAsync(key);
                await _filmService.RemoveFilmAsync(key);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}