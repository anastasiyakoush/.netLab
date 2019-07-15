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
using AutoMapper.QueryableExtensions;

namespace FilmsCatalog.BLL.Services
{
    public class FilmService : IFilmService
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;

        public FilmService(IMapper mapper, IUnitOfWork uow)
        {
            _uow = uow;
            _mapper = mapper;
        }

        public async Task AddFilmAsync(FilmDTO filmDTO)
        {
            var film = _mapper.Map<FilmDTO, Film>(filmDTO);
            await _uow.Films.CreateAsync(film);
            await _uow.SaveAsync();
        }

        public IQueryable<FilmDTO> GetAllFilms()
        {
            var filmsList = CreateFilmsQueryable().ProjectTo<FilmDTO>(_mapper.ConfigurationProvider);

            return filmsList;
        }

        public IQueryable<FilmDTO> GetFilm(int id)
        {
            var filmDTO = CreateFilmsQueryable().Where(x => x.Id == id)
                         .ProjectTo<FilmDTO>(_mapper.ConfigurationProvider);

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

        private IQueryable<Film> CreateFilmsQueryable()
        {
            var films = _uow.Films.GetAll()
                .Include(x => x.Comments)
                .Include(x => x.Images)
                .Include(x => x.Ratings);

            return films;
        }
    }
}
