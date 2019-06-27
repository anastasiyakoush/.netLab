using AutoMapper;
using FilmsCatalog.BLL.Core.DTO;
using FilmsCatalog.DAL.Core.Entities;

namespace FilmsCatalog.BLL.Core.Configuration.Profiles
{
    public class BLLRatingProfile : Profile
    {
        public BLLRatingProfile()
        {
            CreateMap<RatingDTO, Rating>().ReverseMap();
        }
    }
}
