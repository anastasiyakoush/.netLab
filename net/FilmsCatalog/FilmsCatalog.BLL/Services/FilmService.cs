using System.Collections.Generic;
using System.Threading.Tasks;
using FilmsCatalog.BLL.Interfaces;
using FilmsCatalog.BLL.Core.DTO;
using FilmsCatalog.DAL.Core.Interfaces;
using FilmsCatalog.DAL.Core.Entities;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using FilmsCatalog.DAL.EF.EF;

namespace FilmsCatalog.BLL.Services
{
    public class FilmService : IFilmService
    {
        private static IUnitOfWork db;

        public FilmService(DbContextOptions<FilmsCatalogContext> options)
        {
            db = new EFUnitOfWork(options);
        }

        public void AddFilm(FilmDTO filmDTO)
        {
            var film = Mapper.Map<FilmDTO, Film>(filmDTO);
            db.Films.CreateAsync(film);
            db.SaveAsync();
        }

        public IEnumerable<FilmDTO> GetAllFilms()
        {
            return Mapper.Map<IEnumerable<Film>, IEnumerable<FilmDTO>>(db.Films.GetAll());
        }

        public async Task<FilmDTO> GetFilmAsync(int id)
        {
            var film = await db.Films.GetAsync(id);
            return Mapper.Map<Film, FilmDTO>(film);
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
            var film = Mapper.Map<FilmDTO, Film>(filmDTO);
            db.Films.Update(film);
            db.SaveAsync();
        }
    }
}
