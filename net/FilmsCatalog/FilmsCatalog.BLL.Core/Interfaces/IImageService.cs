using FilmsCatalog.BLL.Core.DTO;
using System.Linq;

namespace FilmsCatalog.BLL.Core.Interfaces
{
    public interface IImageService
    {
        IQueryable<string> GetUrlsAsync(int filmId);
        IQueryable<PosterDTO> GetPostersAsync();
    }
}
