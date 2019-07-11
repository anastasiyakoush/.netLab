﻿using System.Collections.Generic;
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

        public async Task<IEnumerable<FilmInfoDTO>> GetAllFilmsAsync()
        {
            var filmDTOs = await _uow.Films.GetAll().ToListAsync();
            var films = _mapper.Map<IEnumerable<Film>, IEnumerable<FilmDTO>>(filmDTOs);
            var filmList = new List<FilmInfoDTO>(films.Count());

            foreach (var film in films)
            {
                var filmImages = await _imageService.GetUrlsAsync(film.Id);
                var filmComments = await _commentService.GetFilmCommentsAsync(film.Id);
                var rating = await _ratingService.GetFilmRatingAsync(film.Id);

                filmList.Add(createFilmInfoDTO(film, filmComments, filmImages, rating));
            }

            return filmList;
        }

        public async Task<FilmInfoDTO> GetFilmAsync(int id)
        {
            var film = await _uow.Films.GetAsync(id);
            var filmDTO = _mapper.Map<Film, FilmDTO>(film);

            var filmImages = await _imageService.GetUrlsAsync(id);
            var filmComments = await _commentService.GetFilmCommentsAsync(id);
            var rating = await _ratingService.GetFilmRatingAsync(id);

            var filmInfo = createFilmInfoDTO(filmDTO, filmComments, filmImages, rating);

            return filmInfo;
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

        public async Task<IEnumerable<FilmDTO>> FilterByName(string name)
        {
            var results = await _uow.Films.GetAll().Where(x => x.Name.Contains(name)).Take(5).ToListAsync();

            return _mapper.Map<IEnumerable<Film>, IEnumerable<FilmDTO>>(results);
        }

        private FilmInfoDTO createFilmInfoDTO(FilmDTO filmDTO, IEnumerable<CommentDTO> filmComments, IEnumerable<string> filmImages, FilmRatingDTO ratingDTO)
        {
            return new FilmInfoDTO
            {
                Id = filmDTO.Id,
                Name = filmDTO.Name,
                Year = filmDTO.Year,
                Overview = filmDTO.Overview,
                Director = filmDTO.Director,
                Rating = ratingDTO,
                Images = filmImages,
                Comments = filmComments
            };
        }
    }
}
