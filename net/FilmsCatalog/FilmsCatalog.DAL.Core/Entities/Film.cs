using System;
using System.Collections.Generic;
using System.Text;
using FilmsCatalog.DAL.Core.Interfaces;

namespace FilmsCatalog.DAL.Models
{
    public class Film : IModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Year { get; set; }
        public string Country { get; set; }
        public string Director { get; set; }
    }
}
