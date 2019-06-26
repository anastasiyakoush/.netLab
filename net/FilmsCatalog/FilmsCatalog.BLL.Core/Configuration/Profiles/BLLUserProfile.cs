using AutoMapper;
using FilmsCatalog.BLL.Core.DTO;
using FilmsCatalog.DAL.Core.Entities;

namespace FilmsCatalog.BLL.Core.Configuration.Profiles
{
    public class BLLUserProfile : Profile
    {
        public BLLUserProfile()
        {
            CreateMap<User, UserDTO>().ReverseMap();
        }
    }
}
