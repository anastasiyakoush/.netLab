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
                    .ForMember(dest => dest.Images,
                    opt => opt.MapFrom(src => src.Images.Select(z => z.Url)))
                    //.ForMember(dest => dest.Rating,
                    //opt => opt.MapFrom(src => new FilmRatingDTO
                    //{
                    //    VotedPeopleCount = src.Ratings.Count(),
                    //    Rate = src.Ratings.Select(x => x.Rate).Average()
                    //})
                    //)
                    .ReverseMap();


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
