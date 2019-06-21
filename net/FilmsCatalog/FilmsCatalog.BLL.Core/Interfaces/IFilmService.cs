using System;
using System.Collections.Generic;
using System.Text;
using FilmsCatalog.BLL.Core.DTO;

namespace FilmsCatalog.BLL.Interfaces
{
    public interface IFilmService
    {
        void AddFilm(FilmDTO film);
        FilmDTO GetFilm(int id);
        IEnumerable<FilmDTO> GetAllFilms();
        void RemoveFilm(int id);
        void UpdateFilmInfo(int id);
    }
}
