using FilmsCatalog.Core.Interfaces;
using FluentValidation.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace FilmsCatalog.BLL.Core.DTO
{
    [Validator(typeof(IFilmInfo))]
    public class FilmDTO : IFilmInfo
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Year { get; set; }
        public string Director { get; set; }
    }
}
