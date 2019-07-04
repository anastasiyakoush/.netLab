using AutoMapper;
using FilmsCatalog.BLL.Core.DTO;
using FilmsCatalog.DAL.Core.Entities;

namespace FilmsCatalog.BLL.Core.Configuration.Profiles
{
    public class BLLProfile : Profile
    {
        public BLLProfile()
        {
            CreateMap<Film, FilmDTO>().ReverseMap();
            CreateMap<RatingDTO, Rating>().ReverseMap();
            CreateMap<UserDTO, User>().ForMember(user => user.Id, opt => opt.MapFrom(dto => dto.UserId)).ReverseMap();
            CreateMap<User, AuthenticatedUserDTO>();
            CreateMap<Comment, CommentDTO>().ReverseMap();
        }
    }
}
