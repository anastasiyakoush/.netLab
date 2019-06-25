using AutoMapper;
using FilmsCatalog.API.Models;
using FilmsCatalog.BLL.Core.DTO;

namespace FilmsCatalog.API.Configuration.Profiles
{
    public class FilmProfile : Profile
    {
        public FilmProfile()
        {
            CreateMap<FilmDTO, FilmModel>().ReverseMap();
        }
    }
}
