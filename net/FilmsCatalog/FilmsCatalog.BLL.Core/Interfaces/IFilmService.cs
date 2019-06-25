using System.Collections.Generic;
using System.Threading.Tasks;

using FilmsCatalog.BLL.Core.DTO;

namespace FilmsCatalog.BLL.Interfaces
{
    public interface IFilmService
    {
        void AddFilm(FilmDTO filmDTO);
        Task<FilmDTO> GetFilmAsync(int id);
        IEnumerable<FilmDTO> GetAllFilms();
        void RemoveFilm(int id);
        void UpdateFilmInfo(FilmDTO filmDTO);
    }
}
