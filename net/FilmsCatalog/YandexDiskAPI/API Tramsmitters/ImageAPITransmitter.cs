using Newtonsoft.Json;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using YandexDiskAPI.Models;
using YandexDiskAPITransmitter.Interfaces;

namespace YandexDiskAPI.Services
{
    public class ImageAPITransmitter : IDiskAPI
    {
        public async Task<IEnumerable<string>> GetDownloaderUrlsAsync(IEnumerable<string> publicUrls)
        {
            List<string> urls = new List<string>();

            using (var client = new HttpClient())
            {
                foreach (var url in publicUrls)
                {
                    var yandexDiskApiUrl = Consts.BaseUrl + url;
                    var response = await client.GetAsync(yandexDiskApiUrl);
                    var content = await response.Content.ReadAsStringAsync();
                    var dowloaderUrl = JsonConvert.DeserializeObject<HrefResponseModel>(content).Href;
                    urls.Add(dowloaderUrl);
                }
            }

            return urls;
        }
    }
}
