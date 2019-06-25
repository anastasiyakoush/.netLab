using System;

namespace FilmsCatalog.Core
{
    public static class Consts
    {
        public const int FirstFilmYear = 1910;
        public static readonly int CurrentYear = DateTime.Now.Year;
        public static readonly string ConnectionString = @"Server=(localdb)\\MSSQLLocalDB;Database=filmsCatalog;TrustedConnection=True;";
    }
}
