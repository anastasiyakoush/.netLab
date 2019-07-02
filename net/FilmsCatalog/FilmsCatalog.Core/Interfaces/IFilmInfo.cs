using System;
using System.Collections.Generic;
using System.Text;

namespace FilmsCatalog.Core.Interfaces
{
    public interface IFilmInfo
    {
        string Name { get; set; }
        int Year { get; set; }
        string Director { get; set; }
    }
}
