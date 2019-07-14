using System.Linq;
using System.Threading.Tasks;
using FilmsCatalog.BLL.Core.DTO;

namespace FilmsCatalog.BLL.Interfaces
{
    public interface IFilmService
    {
        Task AddFilmAsync(FilmDTO filmDTO);
        IQueryable<FilmDTO> GetFilmAsync(int id);
        IQueryable<FilmDTO> GetAllFilmsAsync();
        Task RemoveFilmAsync(int id);
        Task UpdateFilmAsync(FilmDTO filmDTO);
    }
}
