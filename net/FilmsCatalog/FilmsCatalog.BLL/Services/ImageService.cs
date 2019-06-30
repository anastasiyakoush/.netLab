using AutoMapper;
using FilmsCatalog.BLL.Core.DTO;
using FilmsCatalog.BLL.Core.Interfaces;
using FilmsCatalog.DAL.Core.Entities;
using FilmsCatalog.DAL.Core.Interfaces;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace FilmsCatalog.BLL.Services
{
    public class ImageService : IImageService
    {
        private IUnitOfWork _uow;
        private IMapper _mapper;

        public ImageService(IUnitOfWork uow, IMapper mapper)
        {
            _uow = uow;
            _mapper = mapper;
        }

        public async Task<MultipartContent> GetAllImages(int filmId)
        {
            var urlsQuery = await _uow.Images.GetUrlsAsync(filmId);
            var urls = urlsQuery.ToList();
           MultipartContent images = new MultipartContent("image");

            using (var httpClient = new HttpClient())
            {
                foreach (var url in urls)
                {
                    //use concat better
                    var requestUrl = "https://cloud-api.yandex.net:443/v1/disk/public/resources/download?public_key=" + url;
                    var message = await httpClient.GetAsync(requestUrl);
                    var content = await message.Content.ReadAsStringAsync();
                    var downloaderUrl = JsonConvert.DeserializeObject<YandexDiskResponse>(content).Href;

                    message = await httpClient.GetAsync(downloaderUrl);
                    var image = message.Content;
                    images.Add(image);
                }
            }
            return images;
        }
    }
}
