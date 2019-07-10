namespace FilmsCatalog.BLL.Core.DTO
{
    public class FilmRatingDTO
    {
        public int FilmId { get; set; }
        public  double Rate { get; set; }
        public int VotedPeopleCount { get; set; }
    }
}