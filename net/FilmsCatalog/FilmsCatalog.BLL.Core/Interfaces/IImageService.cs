using System.Collections.Generic;
using System.Threading.Tasks;

namespace FilmsCatalog.BLL.Core.Interfaces
{
    public interface IImageService
    {
        Task<IEnumerable<string>> GetUrlsAsync(int filmId);
        Task<IEnumerable<string>> GetPostersAsync();
    }
}
