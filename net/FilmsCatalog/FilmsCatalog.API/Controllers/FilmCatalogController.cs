using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using FilmsCatalog.API.Configuration.Filters;
using FilmsCatalog.API.Models;
using FilmsCatalog.BLL.Core.DTO;
using FilmsCatalog.BLL.Interfaces;
using FilmsCatalog.BLL.Services;
using FilmsCatalog.DAL.EF.EF;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FilmsCatalog.API.Controllers
{
    [ServiceFilter(typeof(LoggingFilter))]
    [Route("api/[controller]")]
    [ApiController]
    public class FilmCatalogController : ControllerBase
    {
        private IFilmService service;
        public FilmCatalogController(DbContextOptions<FilmsCatalogContext> options)
        {
            service = new FilmService(options);
        }

        [HttpGet("[action]/{id:int}")]
        public FilmModel GetFilm(int id)
        {
            return Mapper.Map<FilmDTO, FilmModel>(service.GetFilmAsync(id).Result);
        }

     
        [HttpGet("[action]/all")]
        public ActionResult/*IEnumerable<FilmModel>*/ GetAll()
        {
            return Content("content");
            //return Mapper.Map<IEnumerable<FilmDTO>, IEnumerable<FilmModel>>(service.GetAllFilms());
        }

        [HttpPost("[action]")]
        public void Create([FromBody] FilmModel model)
        {
            var toCreate = Mapper.Map<FilmModel, FilmDTO>(model);
            service.AddFilm(toCreate);
        }

        [HttpPut("[action]")]
        public void Update([FromBody] FilmModel model)
        {
            var toUpdate = Mapper.Map<FilmModel, FilmDTO>(model);
            service.UpdateFilmInfo(toUpdate);
        }

        [HttpDelete("[action]/{id:int}")]
        public void Delete(int id)
        {
            service.RemoveFilm(id);
        }
    }
}