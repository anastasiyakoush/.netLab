using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

using AutoMapper;

using FilmsCatalog.API.Models;
using FilmsCatalog.BLL.Core.DTO;
using FilmsCatalog.BLL.Interfaces;
using FilmsCatalog.BLL.Services;
using FilmsCatalog.API.Configuration.Filters;
using FilmsCatalog.API.Logging.Filters;

namespace FilmsCatalog.API.Controllers
{
    [ServiceFilter(typeof(ExceptionFilter))]
    [ServiceFilter(typeof(LoggingFilter))]
    [Route("api/[controller]")]
    [ApiController]
    public class FilmCatalogController : ControllerBase
    {
        private IFilmService service;
        private IMapper mapper;

        public FilmCatalogController(IMapper mapper/*DbContextOptions<FilmsCatalogContext> options*/)
        {
            service = new FilmService(mapper);
            this.mapper = mapper;
        }
        
        [HttpGet("[action]/{id:int}")]
        public FilmModel GetFilm(int id)
        {
            return mapper.Map<FilmDTO, FilmModel>(service.GetFilmAsync(id).Result);
        }

        [HttpGet("all")]
        public IEnumerable<FilmModel> GetAll()
        {
            return mapper.Map<IEnumerable<FilmDTO>, IEnumerable<FilmModel>>(service.GetAllFilms());
        }

        [HttpPost("[action]")]
        public ActionResult Create([FromBody] FilmModel model)
        {
            var toCreate = mapper.Map<FilmModel, FilmDTO>(model);
            service.AddFilm(toCreate);
            return Ok();
        }

        [HttpPut("[action]")]
        public ActionResult Update([FromBody] FilmModel model)
        {
            var toUpdate = mapper.Map<FilmModel, FilmDTO>(model);
            service.UpdateFilmInfo(toUpdate);
            return Ok();
        }

        [HttpDelete("[action]/{id:int}")]
        public ActionResult Delete(int id)
        {
            service.RemoveFilm(id);
            return Ok();
        }
    }
}