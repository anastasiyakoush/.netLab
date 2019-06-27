using AutoMapper;
using FilmsCatalog.API.Models;
using FilmsCatalog.BLL.Core.DTO;

namespace FilmsCatalog.API.Configuration.Profiles
{
    public class RatingProfile : Profile
    {
        public RatingProfile()
        {
            CreateMap<RatingModel, RatingDTO>().ReverseMap();
        }
    }
}
