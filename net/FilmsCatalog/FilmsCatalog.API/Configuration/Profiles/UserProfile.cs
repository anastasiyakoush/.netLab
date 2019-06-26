using AutoMapper;
using FilmsCatalog.API.Models;
using FilmsCatalog.BLL.Core.DTO;

namespace FilmsCatalog.API.Configuration.Profiles
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<RegisterUserModel, UserDTO>();
            CreateMap<LoginModel, UserDTO>();
            CreateMap<UserDTO, UserModel>();
        }
    }
}
