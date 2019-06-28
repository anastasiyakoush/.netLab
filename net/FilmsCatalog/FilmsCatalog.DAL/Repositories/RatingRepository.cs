using FilmsCatalog.DAL.Core.Entities;
using FilmsCatalog.DAL.Core.Interfaces;
using FilmsCatalog.DAL.EF.EF;
using System.Linq;
using System.Threading.Tasks;

namespace FilmsCatalog.DAL.EF.Repositories
{
    public class RatingRepository : GenericRepository<Rating>, IRatingRepository
    {
        private readonly FilmsCatalogContext _context;

        public RatingRepository(FilmsCatalogContext context) : base(context)
        {
            _context = context;
        }

        public async Task<double> GetRatingAsync(int filmId)
        {
            var rating = await Task.Run(() =>
            _context.Ratings
            .Where(x => x.FilmId == filmId)
            .Select(x => x.Rate)
            .Average());

            return rating;
        }

        public async Task<IQueryable> GetAllRatingsAsync()
        {
            var ratings = await Task.Run(() => _context.Ratings
                .GroupBy(x => x.FilmId)
                .Select(x => new { FilmId = x.Key, Rate = x.Select(r => r.Rate).Average() }));

            return ratings;
        }

        public async Task<Rating> GetFilmAndUserAsync(int filmId, string userId)
        {
            var result = await Task.Run(() => _context.Ratings.SingleOrDefault(x => x.FilmId == filmId && x.UserId == userId));
            return result;
        }
    }
}