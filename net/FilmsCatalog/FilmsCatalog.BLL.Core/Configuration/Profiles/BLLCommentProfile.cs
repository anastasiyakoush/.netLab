using AutoMapper;
using FilmsCatalog.BLL.Core.DTO;
using FilmsCatalog.DAL.Core.Entities;

namespace FilmsCatalog.BLL.Core.Configuration.Profiles
{
    public class BLLCommentProfile : Profile
    {
        public BLLCommentProfile()
        {
            CreateMap<Comment, CommentDTO>()
                .IncludeMembers(s => s.User)
                .ReverseMap();
            CreateMap<User, CommentDTO>(MemberList.None)
                .ForMember(dest => dest.UserName, src => src.MapFrom(x => x.UserName));
        }
    }
}
