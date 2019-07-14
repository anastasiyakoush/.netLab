using FluentValidation.Attributes;
using FilmsCatalog.Core.Interfaces;
using System.Collections.Generic;

namespace FilmsCatalog.API.Models
{
    [Validator(typeof(FilmDetailsModel))]
    public class FilmDetailsModel : FilmModel
    {
        public IEnumerable<CommentModel> Comments { get; set; }
        public IEnumerable<string> Images { get; set; }
        public int VotedPeopleCount { get; set; }
    }
}
