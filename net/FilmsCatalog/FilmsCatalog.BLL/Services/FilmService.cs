using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using FilmsCatalog.BLL.Interfaces;
using FilmsCatalog.BLL.Core.DTO;
using FilmsCatalog.DAL.Core.Interfaces;
using FilmsCatalog.DAL.Core.Entities;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System;
using FilmsCatalog.Core;
using FilmsCatalog.BLL.Core.Interfaces;
using FilmsCatalog.Core.Enums;
using AutoMapper.QueryableExtensions;

namespace FilmsCatalog.BLL.Services
{
    public class FilmService : IFilmService
    {
        private readonly IUnitOfWork _uow;
        private readonly IImageService _imageService;
        private readonly ICommentService _commentService;
        private readonly IRatingService _ratingService;
        private readonly IMapper _mapper;

        public FilmService(IMapper mapper, IImageService imageService, ICommentService commentService, IRatingService ratingService, IUnitOfWork uow)
        {
            _uow = uow;
            _mapper = mapper;
            _imageService = imageService;
            _commentService = commentService;
            _ratingService = ratingService;
        }

        public async Task AddFilmAsync(FilmDTO filmDTO)
        {
            var film = _mapper.Map<FilmDTO, Film>(filmDTO);
            await _uow.Films.CreateAsync(film);
            await _uow.SaveAsync();
        }

        public IQueryable<FilmDTO> GetAllFilmsAsync()
        {
            var filmsList = CreateFilmsQueryable().ProjectTo<FilmDTO>(_mapper.ConfigurationProvider);

            return filmsList;
        }

        public async Task<FilmDTO> GetFilmAsync(int id)
        {
            var film = await _uow.Films.GetAsync(id);
            var filmDTO = _mapper.Map<Film, FilmDTO>(film);

            return filmDTO;
        }

        public async Task RemoveFilmAsync(int id)
        {
            var film = await _uow.Films.GetAsync(id);

            if (film == null)
            {
                throw new Exception(Consts.FilmNotExistedMessage);
            }

            _uow.Films.Delete(film);
            await _uow.SaveAsync();
        }

        public async Task UpdateFilmAsync(FilmDTO filmDTO)
        {
            if (filmDTO == null)
            {
                throw new Exception(Consts.FilmNotExistedMessage);
            }

            var film = _mapper.Map<FilmDTO, Film>(filmDTO);

            _uow.Films.Update(film);
            await _uow.SaveAsync();
        }

        public IQueryable<Film> FilterList(string name)
        {
            return string.IsNullOrEmpty(name) ? _uow.Films.GetAll() : _uow.Films.GetAll().Where(x => x.Name.Contains(name));
        }
             
        private IQueryable<Film> CreateFilmsQueryable()
        {
            var filmDTOs = _uow.Films.GetAll()
                .Include(x => x.Comments)
                .Include(x => x.Images)
                .Include(x => x.Ratings);

            return filmDTOs;
        }
    }
}
