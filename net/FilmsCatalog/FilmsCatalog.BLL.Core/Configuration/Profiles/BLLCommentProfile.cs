using AutoMapper;
using FilmsCatalog.BLL.Core.DTO;
using FilmsCatalog.DAL.Core.Entities;

namespace FilmsCatalog.BLL.Core.Configuration.Profiles
{
    public class BLLCommentProfile : Profile
    {
        public BLLCommentProfile()
        {
            CreateMap<CommentDTO, Comment>().ReverseMap();
        }
    }
}
