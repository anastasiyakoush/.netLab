using AutoMapper;
using FilmsCatalog.BLL.Core.DTO;
using FilmsCatalog.BLL.Core.Interfaces;
using FilmsCatalog.DAL.Core.Entities;
using FilmsCatalog.DAL.Core.Interfaces;
using System.Linq;
using System.Threading.Tasks;

namespace FilmsCatalog.BLL.Services
{
    public class RatingService : IRatingService
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;
        private readonly IAccountService _accountService;

        public RatingService(IUnitOfWork uow, IMapper mapper, IAccountService accountService)
        {
            _uow = uow;
            _mapper = mapper;
            _accountService = accountService;
        }

        public async Task AddFilmRatingAsync(RatingDTO ratingDTO)
        {
            var film = await _uow.Films.GetAsync(ratingDTO.FilmId);
            var userDTO = await _accountService.GetUserByIdAsync(ratingDTO.UserId);
            var user = _mapper.Map<UserDTO, User>(userDTO);
            if (user != null && film != null)
            {
                var existedRating = await _uow.Ratings.GetFilmAndUserAsync(film.Id, user.Id);
                if (existedRating != null)
                {
                    existedRating.Rate = ratingDTO.Rate;
                    _uow.Ratings.Update(existedRating);
                    await _uow.SaveAsync();
                    return;
                }
                var rating = _mapper.Map<RatingDTO, Rating>(ratingDTO);
                rating.User = user;
                rating.Film = film;
                await _uow.Ratings.CreateAsync(rating);
                await _uow.SaveAsync();
            }            
        }

        public async Task<IQueryable> GetAllRatingsAsync()
        {
            var ratings = await _uow.Ratings.GetAllRatingsAsync();
            return ratings;
        }

        public async Task<double> GetFilmRatingAsync(int filmId)
        {
            var rating = await _uow.Ratings.GetRatingAsync(filmId);
            return rating;
        }
    }
}
