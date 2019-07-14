using AutoMapper;
using FilmsCatalog.API.Models;
using FilmsCatalog.BLL.Core.DTO;
using System.Linq;

namespace FilmsCatalog.API.Configuration.Profiles
{
    public class APIProfile : Profile
    {
        public APIProfile()
        {
            CreateMap<CommentModel, CommentDTO>().ReverseMap();
            CreateMap<RatingModel, FilmRatingDTO>().ReverseMap();
            CreateMap<PostRatingModel, RatingDTO>().ReverseMap();
            CreateMap<FilmDTO, FilmModel>()
                       .ForMember(dest => dest.Rating,
                       opt => opt.MapFrom(src => src.Ratings.Count() > 0 ? src.Ratings.Average() : 0));

            CreateMap<FilmDTO, FilmDetailsModel>()
                      .ForMember(dest => dest.VotedPeopleCount,
                      opt => opt.MapFrom(src => src.Ratings.Count()))
                      .ForMember(dest => dest.Rating,
                      opt => opt.MapFrom(src => src.Ratings.Count() > 0 ? src.Ratings.Average() : 0));

            CreateMap<AuthenticatedUserDTO, UserModel>();
            CreateMap<LoginModel, UserDTO>();
            CreateMap<RegisterUserModel, UserDTO>();
        }
    }
}
