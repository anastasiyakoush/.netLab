using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using AutoMapper;
using FluentValidation;
using FluentValidation.AspNetCore;
using FilmsCatalog.API.Configuration.Filters;
using FilmsCatalog.API.Configuration.Profiles;
using FilmsCatalog.API.Logging.Filters;
using FilmsCatalog.API.Models;
using FilmsCatalog.BLL.Core.Configuration.Profiles;
using FilmsCatalog.DAL.EF.EF;
using Microsoft.EntityFrameworkCore;
using FilmsCatalog.DAL.Core.Interfaces;
using FilmsCatalog.API.Validators;
using FilmsCatalog.BLL.Services;
using FilmsCatalog.BLL.Interfaces;
using FilmsCatalog.DAL.Core.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using FilmsCatalog.Core.Configuration;
using FilmsCatalog.BLL.Core.Interfaces;
using Microsoft.AspNet.OData.Extensions;
using Microsoft.OData.Edm;
using Microsoft.AspNet.OData.Builder;
using FilmsCatalog.BLL.Core.DTO;

namespace FilmsCatalog.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
            AppConfiguration appConfiguration = new AppConfiguration(Configuration);
        }

        public IConfiguration Configuration { get; }
        public static object ODataConventionalModelBuilder { get; private set; }

        public void ConfigureServices(IServiceCollection services)
        {
            //for OData
                        services.AddMvcCore(action => action.EnableEndpointRouting = false);
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.AddOData();

            services.AddTransient<IValidator<FilmModel>, FilmModelValidator>();
            services.AddTransient<IValidator<RegisterUserModel>, RegisterUserModelValidator>();
            services.AddTransient<IValidator<LoginModel>, LoginModelValidator>();

            //services for context and films table
            services.AddDbContext<FilmsCatalogContext>(options => options.UseSqlServer(AppConfiguration.ConnectionString));
            services.AddTransient<IUnitOfWork, UnitOfWork>();

            //services
            services.AddTransient<IFilmService, FilmService>();
            services.AddTransient<ICommentService, CommentService>();
            services.AddTransient<IRatingService, RatingService>();
            services.AddTransient<IAccountService, AccountService>();
            services.AddTransient<IImageService, ImageService>();

            //services for identity
            services.AddIdentity<User, IdentityRole>()
                .AddEntityFrameworkStores<FilmsCatalogContext>()
                .AddDefaultTokenProviders();
            services.Configure<IdentityOptions>(options =>
            {
                options.Password.RequireDigit = true;
                options.Password.RequiredLength = 6;
                options.Password.RequireUppercase = false;
                options.Password.RequireNonAlphanumeric = false;
                options.User.RequireUniqueEmail = true;
            });

            //add authentication
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.RequireHttpsMetadata = false;
                    options.SaveToken = true;
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(AppConfiguration.Secret),
                        ValidateIssuer = false,
                        ValidateAudience = false,
                        ValidateLifetime = true
                    };
                });
            services.AddTransient<IAccountService, AccountService>();

            //mapping
            services.AddAutoMapper(cfg =>
            {
                cfg.AddProfile<APIProfile>();
                cfg.AddProfile<BLLProfile>();
            },
           typeof(BLLProfile), typeof(APIProfile)
           );

            //services for loggers
            services.AddScoped<LoggingFilter>();
            services.AddScoped<ExceptionFilter>();

            //for appConfiguration class
            services.AddSingleton<IConfiguration>(Configuration);
        }

        public void Configure(IApplicationBuilder app)
        {
            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseCors(x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
            app.UseDeveloperExceptionPage();
            app.UseAuthentication();
            app.UseHttpsRedirection();
            app.UseMvc(routeBuilder =>
            {
                routeBuilder.Select().Filter().OrderBy().Expand().Count().MaxTop(10);
                routeBuilder.MapODataServiceRoute("api", "api", GetEdmModel());
            });
        }

        private IEdmModel GetEdmModel()
        {
            var builder = new ODataConventionModelBuilder();
            builder.EntitySet<FilmModel>("Films");
            builder.EntitySet<FilmDetailsModel>("FilmDetails");
            return builder.GetEdmModel();
        }
    }
}

