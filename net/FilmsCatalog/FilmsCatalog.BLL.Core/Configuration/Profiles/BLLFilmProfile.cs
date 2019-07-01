using AutoMapper;
using FilmsCatalog.DAL.Core.Entities;
using FilmsCatalog.BLL.Core.DTO;

namespace FilmsCatalog.BLL.Core.Configuration.Profiles
{
    public class BLLFilmProfile : Profile
    {
        public BLLFilmProfile()
        {
            CreateMap<Film, FilmDTO>().ReverseMap();
        }
    }
}
