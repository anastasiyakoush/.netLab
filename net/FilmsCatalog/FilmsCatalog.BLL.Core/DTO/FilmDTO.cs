using System;
using System.Collections.Generic;
using System.Text;

namespace FilmsCatalog.BLL.DTO
{
    public class FilmDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Year { get; set; }
        public string Director { get; set; }
    }
}
