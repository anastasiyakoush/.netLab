using FilmsCatalog.BLL.Core.DTO;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FilmsCatalog.BLL.Core.Interfaces
{
    public interface IRatingService
    {
        Task<FilmRatingDTO> GetFilmRatingAsync(int filmId);
        Task AddFilmRatingAsync(RatingDTO ratingDTO);
        Task<IEnumerable<FilmRatingDTO>> GetAllRatingsAsync();
    }
}
