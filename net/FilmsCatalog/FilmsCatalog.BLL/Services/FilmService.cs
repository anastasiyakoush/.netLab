using System;
using System.Collections.Generic;
using System.Text;
using FilmsCatalog.DAL.EF.EF;
using FilmsCatalog.BLL.Interfaces;
using FilmsCatalog.BLL.DTO;

namespace FilmsCatalog.BLL.Services
{
    public class FilmService:IFilmService
    {
        public FilmService()
        {
        }

        public void AddFilm(FilmDTO film)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<FilmDTO> GetAllFilms()
        {
            throw new NotImplementedException();
        }

        public FilmDTO GetFilm(int id)
        {
            throw new NotImplementedException();
        }

        public void RemoveFilm(int id)
        {
            throw new NotImplementedException();
        }

        public void UpdateFilmInfo(int id)
        {
            throw new NotImplementedException();
        }
    }
}
