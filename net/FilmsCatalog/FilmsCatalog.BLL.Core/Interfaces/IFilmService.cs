using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FilmsCatalog.BLL.Core.DTO;

namespace FilmsCatalog.BLL.Interfaces
{
    public interface IFilmService
    {
        Task AddFilmAsync(FilmDTO filmDTO);       
        Task<FilmDTO> GetFilmAsync(int id);
        Task<IEnumerable<FilmDTO>> GetAllFilmsAsync();
        Task<bool> RemoveFilmAsync(int id);
        Task<FilmDTO> UpdateFilmAsync(FilmDTO filmDTO);
    }
}
