using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using FilmsCatalog.DAL.Core.Entities;
using FilmsCatalog.BLL.Core.DTO;

namespace FilmsCatalog.BLL.Core.Configuration.Profiles
{
    class FilmProfile : Profile
    {
        public FilmProfile()
        {
            CreateMap<Film, FilmDTO>().ReverseMap();
        }
    }
}
