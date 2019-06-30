using System.Net.Http;
using System.Threading.Tasks;

namespace FilmsCatalog.BLL.Core.Interfaces
{
    public interface IImageService
    {
        Task<MultipartContent> GetAllImages(int filmId);
    }
}
