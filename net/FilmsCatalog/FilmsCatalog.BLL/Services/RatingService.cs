using AutoMapper;
using FilmsCatalog.BLL.Core.DTO;
using FilmsCatalog.BLL.Core.Interfaces;
using FilmsCatalog.Core;
using FilmsCatalog.DAL.Core.Entities;
using FilmsCatalog.DAL.Core.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections;
using System.Collections.Generic;
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

            if (film == null)
            {
                throw new Exception(Consts.FilmNotExistedMessage);
            }

            var userDTO = await _accountService.GetUserByNameAsync(ratingDTO.UserName);
            var user = _mapper.Map<UserDTO, User>(userDTO);

            if (user == null)
            {
                throw new Exception(Consts.UserNotExistedMessage);
            }

            var existedRating = await _uow.Ratings.GetAll().FirstOrDefaultAsync(x => x.FilmId == film.Id && x.UserId == user.Id);

            if (existedRating != null)
            {
                existedRating.Rate = ratingDTO.Rate;

                _uow.Ratings.Update(existedRating);
                await _uow.SaveAsync();
            }
            else
            {
                var rating = _mapper.Map<RatingDTO, Rating>(ratingDTO);
                FillRatingFiels(rating, user, film);

                await _uow.Ratings.CreateAsync(rating);
            }

            await _uow.SaveAsync();
        }

        public async Task<IEnumerable<FilmRatingDTO>> GetAllRatingsAsync()
        {
            var ratings = await _uow.Ratings.GetAll()
                               .GroupBy(x => x.FilmId)
                               .Select(x => createFilmRatingDTO(x.Key, x.Count(), x.Select(r => r.Rate).Average()))
                               .ToListAsync();
            return ratings;
        }

        public FilmRatingDTO GetFilmRating(int filmId)
        {
            var rating = _uow.Ratings.GetAll()
                              .GroupBy(x => x.FilmId)
                              .Where(x => x.Key == filmId)
                              .Select(x => createFilmRatingDTO(x.Key, x.Count(), x.Select(r => r.Rate).Average()));

            return rating.FirstOrDefault() ?? createFilmRatingDTO(filmId, 0, 0);
        }

        private Rating FillRatingFiels(Rating rating, User user, Film film)
        {
            rating.Film = film;
            rating.User = user;

            return rating;
        }

        private FilmRatingDTO createFilmRatingDTO(int filmId, int people, double rate)
        {
            return new FilmRatingDTO
            {
                FilmId = filmId,
                Rate = rate,
                VotedPeopleCount = people,
            };
        }
    }
}