using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using FilmsCatalog.API.Models;
using FilmsCatalog.BLL.Core.DTO;
using FilmsCatalog.BLL.Interfaces;
using FilmsCatalog.API.Configuration.Filters;
using FilmsCatalog.API.Logging.Filters;
using System.Threading.Tasks;

namespace FilmsCatalog.API.Controllers
{
    [ServiceFilter(typeof(ExceptionFilter))]
    [ServiceFilter(typeof(LoggingFilter))]
    [Route("api/[controller]")]
    [ApiController]
    public class FilmCatalogController : ControllerBase
    {
        private readonly IFilmService _service;
        private readonly IMapper _mapper;

        public FilmCatalogController(IFilmService filmService, IMapper mapper)
        {
            _service = filmService;
            _mapper = mapper;
        }

        [HttpGet("[action]/{id:int}")]
        public async Task<FilmModel> GetFilm(int id)
        {
            var film = await _service.GetFilmAsync(id);
            return _mapper.Map<FilmDTO, FilmModel>(film);
        }

        [HttpGet("all")]
        public async Task<IEnumerable<FilmModel>> GetAll()
        {
            var films = await _service.GetAllFilmsAsync();
            return _mapper.Map<IEnumerable<FilmDTO>, IEnumerable<FilmModel>>(films);
        }

        [HttpPost("[action]")]
        public async Task<ActionResult> Create([FromBody] FilmModel model)
        {
            var film = _mapper.Map<FilmModel, FilmDTO>(model);
            await _service.AddFilmAsync(film);
            return Ok();
        }

        [HttpPut("[action]")]
        public async Task<ActionResult> Update([FromBody] FilmModel model)
        {
            var film = _mapper.Map<FilmModel, FilmDTO>(model);
            await _service.UpdateFilmAsync(film);
            return Ok();
        }

        [HttpDelete("[action]/{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            await _service.RemoveFilmAsync(id);
            return Ok();
        }
    }
}