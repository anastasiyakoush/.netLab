using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using FilmsCatalog.BLL.Interfaces;
using FilmsCatalog.BLL.Core.DTO;
using FilmsCatalog.DAL.Core.Interfaces;
using FilmsCatalog.DAL.Core.Entities;
using System.Linq;

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

        public async Task<IEnumerable<FilmDTO>> GetAllFilmsAsync()
        {
            var films = await _uow.Films.GetAllAsync();
            return _mapper.Map<IEnumerable<Film>, IEnumerable<FilmDTO>>(films);
        }

        public async Task<FilmDTO> GetFilmAsync(int id)
        {
            var film = await _uow.Films.GetAsync(id);
            return _mapper.Map<Film, FilmDTO>(film);
        }

        public async Task<bool> RemoveFilmAsync(int id)
        {
            var film = await _uow.Films.GetAsync(id);
            _uow.Films.Delete(film);
            await _uow.SaveAsync();
            var isDeleted = await _uow.Films.GetAsync(id) == null;
            return isDeleted;
        }

        public async Task<FilmDTO> UpdateFilmAsync(FilmDTO filmDTO)
        {
            if (filmDTO != null)
            {
                var film = _mapper.Map<FilmDTO, Film>(filmDTO);
                _uow.Films.Update(film);
                await _uow.SaveAsync();
            }
            var updatedFilm = await _uow.Films.GetAsync(filmDTO.Id);
            var updatedFilmDTO = _mapper.Map<Film, FilmDTO>(updatedFilm);
            return updatedFilmDTO;
        }                
    }
}
