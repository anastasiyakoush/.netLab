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

        public async Task<IEnumerable<FilmDTO>> GetAllFilmsAsync()
        {
            var films = await _uow.Films.GetAll().ToListAsync();
            return _mapper.Map<IEnumerable<Film>, IEnumerable<FilmDTO>>(films);
        }

        public async Task<FilmInfoDTO> GetFilmAsync(int id)
        {
            var film = await _uow.Films.GetAsync(id);
            var filmDTO = _mapper.Map<Film, FilmDTO>(film);

            var filmImages = await _imageService.GetUrlsAsync(id);
            var filmComments = await _commentService.GetFilmCommentsAsync(id);
            var rating = await _ratingService.GetFilmRatingAsync(id);

            FilmInfoDTO filmInfo = new FilmInfoDTO()
            {
                Id = filmDTO.Id,
                Name = filmDTO.Name,
                Year = filmDTO.Year,
                Overview = filmDTO.Overview,
                Director = filmDTO.Director,
                Rating = rating,
                Images = filmImages,
                Comments = filmComments
            };

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

        public async Task<IEnumerable<FilmDTO>> Search(string query)
        {
            var results = await _uow.Films.GetAll().Where(x => x.Name.Contains(query)).Take(5).ToListAsync();

            return _mapper.Map<IEnumerable<Film>, IEnumerable<FilmDTO>>(results);
        }
    }
}
