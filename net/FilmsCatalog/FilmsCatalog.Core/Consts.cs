using System;

namespace FilmsCatalog.Core
{
    public static class Consts
    {
        public const int FirstFilmYear = 1910;
        public static readonly int CurrentYear = DateTime.Now.Year;
        public const int PasswordMinLength = 5;
        public const string UserNotExistedMessage = "User is not existed";
        public const string FilmNotExistedMessage = "Film is not existed";
        public const int StartFilmIndexToReturn = 0;
        public const int FilmsReturnPerRequest = 8;
    }
}
