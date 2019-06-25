using System.Collections.Generic;
using System.Threading.Tasks;

using AutoMapper;

using FilmsCatalog.BLL.Interfaces;
using FilmsCatalog.BLL.Core.DTO;
using FilmsCatalog.DAL.Core.Interfaces;
using FilmsCatalog.DAL.EF.EF;
using FilmsCatalog.DAL.Core.Entities;

namespace FilmsCatalog.BLL.Services
{
    public class FilmService : IFilmService
    {
        private static IUnitOfWork db;
        private IMapper mapper;

        public FilmService(IMapper mapper/*DbContextOptions<FilmsCatalogContext> options*/)
        {
            db = new EFUnitOfWork();
            this.mapper = mapper;
        }

        public void AddFilm(FilmDTO filmDTO)
        {
            var film = mapper.Map<FilmDTO, Film>(filmDTO);
            db.Films.CreateAsync(film);
            db.SaveAsync();
        }

        public IEnumerable<FilmDTO> GetAllFilms()
        {
            return mapper.Map<IEnumerable<Film>, IEnumerable<FilmDTO>>(db.Films.GetAll());
        }

        public async Task<FilmDTO> GetFilmAsync(int id)
        {
            var film = await db.Films.GetAsync(id);
            return mapper.Map<Film, FilmDTO>(film);
        }

        public void RemoveFilm(int id)
        {
            var toDelete = db.Films.GetAsync(id).Result;
            if (toDelete != null)
            {
                db.Films.Delete(toDelete);
                db.SaveAsync();
            }
        }

        public void UpdateFilmInfo(FilmDTO filmDTO)
        {
            var updatedFilm = mapper.Map<FilmDTO, Film>(filmDTO);
            db.Films.Update(updatedFilm);
            db.SaveAsync();
        }
    }
}
