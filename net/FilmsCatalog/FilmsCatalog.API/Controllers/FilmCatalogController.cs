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
using Microsoft.AspNet.OData;
using Microsoft.AspNet.OData.Routing;
using System.Linq;
using FilmsCatalog.DAL.Core.Entities;

namespace FilmsCatalog.API.Controllers
{
    public class FilmsController : ControllerBase
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
        [EnableQuery()]
        public ActionResult<IEnumerable<FilmModel>> Get()
        {
            try
            {
                var filmDTOs = _filmService.GetAllFilmsAsync().ToList();
                var filmModels = _mapper.Map<IEnumerable<FilmDTO>, IEnumerable<FilmModel>>(filmDTOs);

                return Ok(filmModels);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [EnableQuery()]
        public ActionResult<FilmModel> Get(int id)
        {
            try
            {
                var filmDTO = _filmService.GetFilmAsync(id).Result;
                var filmModel = _mapper.Map<FilmDTO, FilmModel>(filmDTO);

                return Ok(filmModel);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        //[AllowAnonymous]
        //[HttpPost("all")]
        //public async Task<IActionResult> GetAll(PostFilmsListModel postFilmsListModel)
        //{
        //    try
        //    {
        //        var filmListDTO = _mapper.Map<PostFilmsListModel, FilmsListDTO>(postFilmsListModel);
        //        var films = await _filmService.GetAllFilmsAsync(filmListDTO);
        //        var filmModels = _mapper.Map<IEnumerable<FilmDTO>, IEnumerable<FilmModel>>(films);

        //        return Ok(filmModels);
        //    }
        //    catch (Exception ex)
        //    {
        //        return BadRequest(ex.Message);
        //    }
        //}

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

        //[HttpDelete("[action]/{id:int}")]
        //public async Task<IActionResult> Delete(int id)
        //{
        //    try
        //    {
        //        var filmInDb = await _filmService.GetFilmAsync(id);
        //        await _filmService.RemoveFilmAsync(id);

        //        return Ok();
        //    }
        //    catch (Exception ex)
        //    {
        //        return BadRequest(ex.Message);
        //    }
        //}

        //[HttpGet("posters")]
        //public async Task<IActionResult> GetPostersAsync()
        //{
        //    try
        //    {
        //        var posters = await _imageService.GetPostersAsync();
        //        return Ok(posters);
        //    }
        //    catch (Exception ex)
        //    {
        //        return BadRequest(ex.Message);
        //    }
        //}
    }
}