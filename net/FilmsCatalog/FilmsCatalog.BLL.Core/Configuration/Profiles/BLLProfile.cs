using AutoMapper;
using FilmsCatalog.BLL.Core.DTO;
using FilmsCatalog.DAL.Core.Entities;
using System.Linq;

namespace FilmsCatalog.BLL.Core.Configuration.Profiles
{
    public class BLLProfile : Profile
    {
        public BLLProfile()
        {
            CreateMap<Film, FilmDTO>()
                    .ForMember(dest=>dest.Images,
                    opt=>opt.MapFrom(src=>src.Images.Select(x=>x.Url)))
                    .ForMember(dest => dest.Poster,
                    opt => opt.MapFrom(src => src.Images.Where(z => z.Url.Contains("p.jp"))
                                                        .Select(w => w.Url)
                                                        .FirstOrDefault()))
                    .ForMember(dest => dest.Ratings,
                    opt => opt.MapFrom(src => src.Ratings.Select(x => x.Rate)));

            CreateMap<UserDTO, User>()
                    .ForMember(user => user.Id,
                    opt => opt.MapFrom(dto => dto.UserId))
                    .ReverseMap();

            CreateMap<User, AuthenticatedUserDTO>();
            CreateMap<Comment, CommentDTO>().ReverseMap();
            CreateMap<RatingDTO, Rating>().ReverseMap();
        }
    }
}
