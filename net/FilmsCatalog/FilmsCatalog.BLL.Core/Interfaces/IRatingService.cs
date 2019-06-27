using FilmsCatalog.BLL.Core.DTO;
using System.Linq;
using System.Threading.Tasks;

namespace FilmsCatalog.BLL.Core.Interfaces
{
    public interface IRatingService
    {
        Task<double> GetFilmRatingAsync(int filmId);
        Task AddFilmRatingAsync(RatingDTO ratingDTO);
        Task<IQueryable> GetAllRatingsAsync();
    }
}
