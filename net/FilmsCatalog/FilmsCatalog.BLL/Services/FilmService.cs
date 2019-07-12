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
using FilmsCatalog.BLL.Extentions;

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

        public async Task<IEnumerable<FilmDTO>> GetAllFilmsAsync(FilmsListDTO parameters)
        {
            var filmsList = await createFilmsList(parameters);
            var sortedList = SortFilms(filmsList, parameters);

            return sortedList.ToList();
        }

        public async Task<FilmDTO> GetFilmAsync(int id)
        {
            var film = await _uow.Films.GetAsync(id);

            var filmImages = await _imageService.GetUrlsAsync(id);
            var filmComments = await _commentService.GetFilmCommentsAsync(id);
            var rating = await _ratingService.GetFilmRatingAsync(id);

            var filmInfo = createFilmInfoDTO(film, filmComments, filmImages, rating);

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

        public IQueryable<Film> FilterList(string name)
        {
            return string.IsNullOrEmpty(name) ? _uow.Films.GetAll() : _uow.Films.GetAll().Where(x => x.Name.Contains(name));
        }

        private FilmDTO createFilmInfoDTO(Film film, IEnumerable<CommentDTO> filmComments, IEnumerable<string> filmImages, FilmRatingDTO ratingDTO)
        {
            return new FilmDTO
            {
                Id = film.Id,
                Name = film.Name,
                Year = film.Year,
                Overview = film.Overview,
                Director = film.Director,
                Rating = ratingDTO,
                Images = filmImages,
                Comments = filmComments
            };
        }

        private async Task<IQueryable<FilmDTO>> createFilmsList(FilmsListDTO parameters)
        {
            var films = FilterList(parameters.QueryString);
            films = SortBy();


            var filmImages = await _imageService.GetUrlsAsync(film.Id);
            var filmComments = await _commentService.GetFilmCommentsAsync(film.Id);


            return filmList;
        }

        private SortTypesEnum ConvertToEnum(int? type)
        {
            return type != null ? (SortTypesEnum)type : SortTypesEnum.Default;
        }

        private IQueryable<FilmDTO> SortFilms(IQueryable<FilmDTO> films, FilmsListDTO parameters)
        {
            var sortByName = ConvertToEnum(parameters.SortByName);
            var sortByYear = ConvertToEnum(parameters.SortByYear);
            var sortByRating = ConvertToEnum(parameters.SortByRating);
            var sortedList = films;

            switch (sortByName)
            {
                case SortTypesEnum.Asc:
                    {
                        sortedList = sortedList.OrderBy().ThenBy<FilmDTO, string>(x => x.Name, SortTypesEnum.Asc);
                        break;
                    }
                case SortTypesEnum.Desc:
                    {
                        sortedList = sortedList.SortBy<FilmDTO, string>(x => x.Name, SortTypesEnum.Desc);
                        break;
                    }
            }
            switch (sortByYear)
            {
                case SortTypesEnum.Asc:
                    {
                        sortedList = sortedList.SortBy<FilmDTO, int>(x => x.Year);
                        break;
                    }
                case SortTypesEnum.Desc:
                    {
                        sortedList = sortedList.SortBy<FilmDTO, int>(x => x.Year);
                        break;
                    }
            }
            switch (sortByRating)
            {
                case SortTypesEnum.Asc:
                    {
                        sortedList = sortedList.SortBy<FilmDTO, double>(x => x.Rating.Rate);
                        break;
                    }
                case SortTypesEnum.Desc:
                    {
                        sortedList = sortedList.SortBy<FilmDTO, double>(x => x.Rating.Rate);
                        break;
                    }
            }

            return sortedList.Skip(parameters.Start).Take(Consts.FilmsReturnPerRequest);
        }
    }
}
