using FilmsCatalog.BLL.Core.DTO;
using FilmsCatalog.BLL.Core.Interfaces;
using FilmsCatalog.DAL.Core.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FilmsCatalog.BLL.Services
{
    public class ImageService : IImageService
    {
        private IUnitOfWork _uow;

        public ImageService(IUnitOfWork uow)
        {
            _uow = uow;
        }

        public async Task<IEnumerable<string>> GetUrlsAsync(int filmId)
        {
            var urls = await _uow.Images.GetAll()
                                   .Where(x => x.FilmId == filmId)
                                   .Select(x => x.Url)
                                   .ToListAsync();

            return urls;
        }

        public async Task<IEnumerable<PosterDTO>> GetPostersAsync()
        {
            var urls = await _uow.Images.GetAll()
                                   .Where(x => x.Url.Contains("p.jpg"))
                                   .Select(x => createPosterDTO(x.FilmId, x.Url))
                                   .ToListAsync();

            return urls;
        }

        private PosterDTO createPosterDTO(int filmId, string url)
        {
            return new PosterDTO
            {
                FilmId = filmId,
                Url = url
            };
        }
    }
}
