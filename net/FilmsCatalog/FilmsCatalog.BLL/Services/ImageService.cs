using FilmsCatalog.BLL.Core.DTO;
using FilmsCatalog.BLL.Core.Interfaces;
using FilmsCatalog.DAL.Core.Interfaces;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
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
            //move to consts 
            //var yandexDiskApiUrl = "https://cloud-api.yandex.net:443/v1/disk/public/resources/download?public_key=";
            var urlsQuery = await _uow.Images.GetUrlsAsync(filmId);
            var publicUrls = urlsQuery.ToList();
            List<string> urls = new List<string>();
            using (var client = new HttpClient())
            {
                foreach (var url in publicUrls)
                {
                    var yandexDiskApiUrl = "https://cloud-api.yandex.net:443/v1/disk/public/resources/download?public_key=" + url;
                    var response = await client.GetAsync(yandexDiskApiUrl);
                    var content = await response.Content.ReadAsStringAsync();
                    var dowloaderUrl = JsonConvert.DeserializeObject<YandexDiskResponse>(content).Href;
                    urls.Add(dowloaderUrl);
                }
            }
            return urls;
        }
    }
}
