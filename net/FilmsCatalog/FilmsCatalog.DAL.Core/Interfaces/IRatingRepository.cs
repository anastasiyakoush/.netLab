using FilmsCatalog.DAL.Core.Entities;
using System.Linq;
using System.Threading.Tasks;

namespace FilmsCatalog.DAL.Core.Interfaces
{
    public interface IRatingRepository : IGenericRepository<Rating>
    {
        Task<double> GetRatingAsync(int filmId);
        Task<IQueryable> GetAllRatingsAsync();
        Task<Rating> GetFilmAndUserAsync(int filmId, string userId);
    }
}
