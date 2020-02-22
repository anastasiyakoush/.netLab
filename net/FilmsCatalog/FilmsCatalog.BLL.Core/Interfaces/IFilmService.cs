using System.Linq;
using System.Threading.Tasks;
using FilmsCatalog.BLL.Core.DTO;

namespace FilmsCatalog.BLL.Interfaces
{
    public interface IFilmService
    {
        Task AddFilmAsync(FilmDTO filmDTO);
        IQueryable<FilmDTO> GetFilm(int id);
        IQueryable<FilmDTO> GetAllFilms();
        Task RemoveFilmAsync(int id);
        Task UpdateFilmAsync(FilmDTO filmDTO);
    }
}
