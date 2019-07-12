using FilmsCatalog.BLL.Core.DTO;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FilmsCatalog.BLL.Core.Interfaces
{
    public interface IImageService
    {
        IQueryable<string> GetUrlsAsync(int filmId);
        IQueryable<PosterDTO> GetPostersAsync();
    }
}
