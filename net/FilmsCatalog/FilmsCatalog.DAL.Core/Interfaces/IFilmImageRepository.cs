using FilmsCatalog.DAL.Core.Entities;
using System.Linq;
using System.Threading.Tasks;

namespace FilmsCatalog.DAL.Core.Interfaces
{
    public interface IFilmImageRepository : IGenericRepository<FilmImage>
    {
        Task<IQueryable<string>> GetUrlsAsync(int filmId);
    }
}
