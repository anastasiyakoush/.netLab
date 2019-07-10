using AutoMapper;
using FilmsCatalog.API.Models;
using FilmsCatalog.BLL.Core.DTO;

namespace FilmsCatalog.API.Configuration.Profiles
{
    public class APIProfile : Profile
    {
        public APIProfile()
        {
            CreateMap<CommentModel, CommentDTO>().ReverseMap();
            CreateMap<RatingModel, FilmRatingDTO>().ReverseMap();
            CreateMap<PostRatingModel, RatingDTO>().ReverseMap();
            CreateMap<FilmDTO, FilmModel>().ReverseMap();
            CreateMap<FilmInfoDTO, FilmInfoModel>().ReverseMap();
            CreateMap<AuthenticatedUserDTO, UserModel>();
            CreateMap<LoginModel, UserDTO>();
            CreateMap<RegisterUserModel, UserDTO>();
        }
    }
}
