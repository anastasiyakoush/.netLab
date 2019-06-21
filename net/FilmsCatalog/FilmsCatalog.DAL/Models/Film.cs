using System;
using System.Collections.Generic;
using System.Text;

namespace FilmsCatalog.DAL.Models
{
    public class Film
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Year { get; set; }
        public string Country { get; set; }
        public Director DirectorId { get; set; }
        public Director Director { get; set; }
    }
}
