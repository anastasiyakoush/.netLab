using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace FilmsCatalog.DAL.EF.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    UserName = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(maxLength: 256, nullable: true),
                    Email = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(maxLength: 256, nullable: true),
                    PasswordHash = table.Column<string>(nullable: true),
                    SecurityStamp = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    LockoutEnd = table.Column<DateTimeOffset>(nullable: true),
                    LockoutEnabled = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Films",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    Year = table.Column<int>(nullable: false),
                    Director = table.Column<string>(nullable: true),
                    Overview = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Films", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    RoleId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    UserId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(nullable: false),
                    ProviderKey = table.Column<string>(nullable: false),
                    ProviderDisplayName = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    RoleId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    LoginProvider = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    Value = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Comment",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    FilmId = table.Column<int>(nullable: false),
                    UserId = table.Column<string>(nullable: true),
                    Content = table.Column<string>(nullable: true),
                    Time = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Comment", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Comment_Films_FilmId",
                        column: x => x.FilmId,
                        principalTable: "Films",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Comment_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "FilmImages",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    FilmId = table.Column<int>(nullable: false),
                    Url = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FilmImages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FilmImages_Films_FilmId",
                        column: x => x.FilmId,
                        principalTable: "Films",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Ratings",
                columns: table => new
                {
                    FilmId = table.Column<int>(nullable: false),
                    UserId = table.Column<string>(nullable: false),
                    Rate = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ratings", x => new { x.FilmId, x.UserId });
                    table.ForeignKey(
                        name: "FK_Ratings_Films_FilmId",
                        column: x => x.FilmId,
                        principalTable: "Films",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Ratings_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Films",
                columns: new[] { "Id", "Director", "Name", "Overview", "Year" },
                values: new object[,]
                {
                    { 20, "Josh Cooley", "Toy Story 4", "Woody has always been confident about his place in the world and that his priority is taking care of his kid, whether that's Andy or Bonnie. But when Bonnie adds a reluctant new toy called \"Forky\" to her room, a road trip adventure alongside old and new friends will show Woody how big the world can be for a toy.", 2019 },
                    { 17, "George Lucas", "John Wick ", "Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.", 2014 },
                    { 16, "Fabian Nicieza", "Deadpool 2", "Wisecracking mercenary Deadpool battles the evil and powerful Cable and other bad guys to save a boy's life.", 2018 },
                    { 15, "Rodney Rothman", "Spider-Man: Into the Spider-Verse", "Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson \"Kingpin\" Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.", 2018 },
                    { 14, "George Lucas", "Star Wars ", "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.", 1977 },
                    { 13, "Kenneth Branagh", "Cinderella ", "When her father unexpectedly passes away, young Ella finds herself at the mercy of her cruel stepmother and her daughters. Never one to give up hope, Ella's fortunes begin to change after meeting a dashing stranger in the woods.", 2015 },
                    { 12, "Allan Heinberg", "Wonder Woman ", "An Amazon princess comes to the world of Man in the grips of the First World War to confront the forces of evil and bring an end to human conflict.", 2017 },
                    { 11, "Christopher Nolan", "The Dark Knight", "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.", 2003 },
                    { 10, "David Ayer", "Fury", "In the last months of World War II, as the Allies make their final push in the European theatre, a battle-hardened U.S. Army sergeant named 'Wardaddy' commands a Sherman tank called 'Fury' and its five-man crew on a deadly mission behind enemy lines. Outnumbered and outgunned, Wardaddy and his men face overwhelming odds in their heroic attempts to strike at the heart of Nazi Germany.", 2014 },
                    { 9, "Christopher Nolan", "Interstellar", "Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.", 2014 },
                    { 8, "André Badalo", "Catarina and the others ", "Outside, the first sun rays break the dawn. Sixteen years old Catarina can't fall asleep. Inconsequently, in the big city adults are moved by desire... Catarina found she is HIV positive. She wants to drag everyone else along.", 2011 },
                    { 7, "Joss Whedon", "Avengers: Age of Ultron", "When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.", 2015 },
                    { 6, "Dennis Widmyer", "Pet Sematary ", "Dr. Louis Creed and his wife, Rachel, relocate from Boston to rural Maine with their two young children. The couple soon discover a mysterious burial ground hidden deep in the woods near their new home. When tragedy strikes, Louis turns to his neighbour Jud Crandall, setting off a perilous chain reaction that unleashes an unspeakable evil with horrific consequences.", 2019 },
                    { 5, "Gary Dauberman", "Annabelle Comes Home", "Determined to keep Annabelle from wreaking more havoc, demonologists Ed and Lorraine Warren bring the possessed doll to the locked artifacts room in their home, placing her “safely” behind sacred glass and enlisting a priest’s holy blessing. But an unholy night of horror awaits as Annabelle awakens the evil spirits in the room, who all set their sights on a new target—the Warrens' ten-year-old daughter, Judy, and her friends.", 2019 },
                    { 4, "Simon Kinberg", "Dark Phoenix", "The X-Men face their most formidable and powerful foe when one of their own, Jean Grey, starts to spiral out of control. During a rescue mission in outer space, Jean is nearly killed when she's hit by a mysterious cosmic force. Once she returns home, this force not only makes her infinitely more powerful, but far more unstable. The X-Men must now band together to save her soul and battle aliens that want to use Grey's new abilities to rule the galaxy.", 2019 },
                    { 3, "Tim Story", "Shaft", "JJ, aka John Shaft Jr., may be a cyber security expert with a degree from MIT, but to uncover the truth behind his best friend’s untimely death, he needs an education only his dad can provide. Absent throughout JJ’s youth, the legendary locked-and-loaded John Shaft agrees to help his progeny navigate Harlem’s heroin-infested underbelly.", 2019 },
                    { 2, "Robert Rodriguez", "Alita: Battle Angel", "When Alita awakens with no memory of who she is in a future world she does not recognize, she is taken in by Ido, a compassionate doctor who realizes that somewhere in this abandoned cyborg shell is the heart and soul of a young woman with an extraordinary past.", 2019 },
                    { 1, "Henry Gayden", "Shazam!", "A boy is given the ability to become an adult superhero in times of need with a single magic word.", 2019 },
                    { 18, "Connie Macatuno", "Wild and Free", "Ellie and Jake fall in love, but struggle with their relationship when they discover an unexpected connection between their pasts.", 2018 },
                    { 19, "Otto Bathurst", "Robin Hood ", "A war-hardened Crusader and his Moorish commander mount an audacious revolt against the corrupt English crown.", 2018 }
                });

            migrationBuilder.InsertData(
                table: "FilmImages",
                columns: new[] { "Id", "FilmId", "Url" },
                values: new object[,]
                {
                    { 76, 20, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Toy%20Story%204/2zBx4enj1SWDEwTmsbOeEzGf5E0.jpg" },
                    { 53, 14, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Star%20Wars/c4zJK1mowcps3wvdrm31knxhur2.jpg" },
                    { 52, 13, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Cinderella/syhULVJLKugutEfqvz45xL1oQyB.jpg" },
                    { 51, 13, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Cinderella/p.jpg" },
                    { 50, 13, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Cinderella/f6jSPjlPD5HJ92VVxIBNfIxL6Ie.jpg" },
                    { 49, 13, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Cinderella/943FR0MnOi70lBB2dK89yTlRtEl.jpg" },
                    { 48, 12, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Wonder%20Woman/p.jpg" },
                    { 47, 12, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Wonder%20Woman/aPEhtVLrZRnJufKHwbHgqwirv7J.jpg" },
                    { 54, 14, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Star%20Wars/faCi4hzG4r9RJSFwzgedZoN10I3.jpg" },
                    { 46, 12, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Wonder%20Woman/AaABt75ZzfMGrscUR2seabz4PEX.jpg" },
                    { 44, 11, "https://filmimages.blob.core.windows.net/images/Fim%20Images/The%20Dark%20Knight/p.jpg" },
                    { 43, 11, "https://filmimages.blob.core.windows.net/images/Fim%20Images/The%20Dark%20Knight/nnMC0BM6XbjIIrT4miYmMtPGcQV.jpg" },
                    { 42, 11, "https://filmimages.blob.core.windows.net/images/Fim%20Images/The%20Dark%20Knight/jfYVWfCsQ2wkif7KXD1Qsqxte2A.jpg" },
                    { 41, 10, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Fury/y6UlVGLarDFLZLqhWSagQYOVRaI.jpg" },
                    { 40, 10, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Fury/xWeOQXvdv272N0doVcsNDuryiCy.jpg" },
                    { 39, 10, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Fury/p.jpg" },
                    { 38, 10, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Fury/7eYzAatvUzF1E2DFInJBJjtZu2A.jpg" },
                    { 45, 11, "https://filmimages.blob.core.windows.net/images/Fim%20Images/The%20Dark%20Knight/vSupzIcJCa64lCGYmw5flIOeiEH.jpg" },
                    { 37, 9, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Interstellar/walWq52PP2IGRc98VkPG7Wp77lK.jpg" },
                    { 55, 14, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Star%20Wars/p.jpg" },
                    { 57, 15, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Spider-Man%20Into%20the%20Spider-Verse/6qVF0gnLnbKCgcMfCpCB8GH7B5I.jpg" },
                    { 73, 19, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Robin%20Hood/axjFiijtxdfK3CD9dMwrdgLwblD.jpg" },
                    { 72, 19, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Robin%20Hood/8UF30h6EhLuJ4Cah3NEYuTy2RKK.jpg" },
                    { 71, 19, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Robin%20Hood/6ev6s0p9SW1R81Uybp5fL2KGtqN.jpg" },
                    { 70, 18, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Wild%20and%20Free/p.jpg" },
                    { 69, 18, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Wild%20and%20Free/9v4nPAyVvtGONV5NtPkDHA9bczS.jpg" },
                    { 68, 17, "https://filmimages.blob.core.windows.net/images/Fim%20Images/John%20Wick/p.jpg" },
                    { 67, 17, "https://filmimages.blob.core.windows.net/images/Fim%20Images/John%20Wick/iJlGxN0p1suzloBGvvBu3QSSlhT.jpg" },
                    { 56, 14, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Star%20Wars/scPHd4THvJRrHx45sjMGmzeKc5H.jpg" },
                    { 66, 17, "https://filmimages.blob.core.windows.net/images/Fim%20Images/John%20Wick/fINt8y7nDRUkxqAHZaO3GaTTkax.jpg" },
                    { 64, 16, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Deadpool%202/phLs80ENvyzxi2PuhidSeHfZQgJ.jpg" },
                    { 63, 16, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Deadpool%202/p.jpg" },
                    { 62, 16, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Deadpool%202/l6jEz6DvnjaPnuWnVseSFJlxDoZ.jpg" },
                    { 61, 16, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Deadpool%202/1CzUuIdalmARzfYyEX3vGmBy6dn.jpg" },
                    { 60, 15, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Spider-Man%20Into%20the%20Spider-Verse/uUiId6cG32JSRI6RyBQSvQtLjz2.jpg" },
                    { 59, 15, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Spider-Man%20Into%20the%20Spider-Verse/p.jpg" },
                    { 58, 15, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Spider-Man%20Into%20the%20Spider-Verse/b9YkKJcW3pPaXgMZu9uoT7v9yRB.jpg" },
                    { 65, 17, "https://filmimages.blob.core.windows.net/images/Fim%20Images/John%20Wick/djzpcrrvL6sME5J2lGG4pWDChIZ.jpg" },
                    { 36, 9, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Interstellar/p.jpg" },
                    { 35, 9, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Interstellar/gq4Z1pfOWHn3FKFNutlDCySps9C.jpg" },
                    { 34, 9, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Interstellar/6MDzVm9h6wEGAbvjihdFU83Q5Wo.jpg" },
                    { 12, 3, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Shaft/e0J2BWY1AMjMUQGL2GEReN1oQrS.jpg" },
                    { 11, 3, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Shaft/2JS5guOh3hj3WgMhbMHPZDSU1HJ.jpg" },
                    { 10, 2, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Alita%20Battle%20Angel/p.jpg" },
                    { 9, 2, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Alita%20Battle%20Angel/lcCNS7vyofFpJV7fl92ipIdNmGi.jpg" },
                    { 8, 2, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Alita%20Battle%20Angel/jXDselREPq8TOVGM4dzBBUM7xVk.jpg" },
                    { 7, 2, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Alita%20Battle%20Angel/Ah6nNAk5Jjd5Bis1y056Z7DwzBb.jpg" },
                    { 6, 2, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Alita%20Battle%20Angel/5QKbqh9pHV3tCrohHXBzhCQ6ixF.jpg" },
                    { 13, 3, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Shaft/jhwSYGRToxBn4vsnmviFQUy2KBB.jpg" },
                    { 5, 1, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Shazam!/wNXWVhALRBs07VmzdSQv5nJCkVG.jpg" },
                    { 3, 1, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Shazam!/nmV9MdbzST4xv8WMHwhVgxkHHjM.jpg" },
                    { 2, 1, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Shazam!/OIGX2lm5tmlCKvZUghtwHzoxxO.jpg" },
                    { 1, 1, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Shazam!/p.jpg" },
                    { 80, 20, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Toy%20Story%204/uV7NuTpZvGaWWJNdVRSlbmIP5Vo.jpg" },
                    { 79, 20, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Toy%20Story%204/p3lkc1fDBeX9ZiIQVwRtOnXYENL.jpg" },
                    { 78, 20, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Toy%20Story%204/p.jpg" },
                    { 77, 20, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Toy%20Story%204/3FXLxOnd5LnvK8F5jUbIXOF9p9Y.jpg" },
                    { 4, 1, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Shazam!/qwgGtdlLMKYvT2tV8hLY22syRHN.jpg" },
                    { 14, 3, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Shaft/kBuenNbs1SidHPxJuMyMU8JMboI.jpg" },
                    { 15, 3, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Shaft/p.jpg" },
                    { 16, 4, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Dark%20Phoenix/3oqxZt0OMHnNKBhBfNLk8xqcH58.jpg" },
                    { 33, 8, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Catarina%20and%20the%20others/p.jpg" },
                    { 32, 8, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Catarina%20and%20the%20others/g06kImGXhti64OLc8nhbosG7Y4S.jpg" },
                    { 31, 8, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Catarina%20and%20the%20others/9nDiMhvL3FtaWMsvvvzQIuq276X.jpg" },
                    { 30, 7, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Avengers%20Age%20of%20Ultron/vXIrvKadue7GdySiVh3huoQZiMi.jpg" },
                    { 29, 7, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Avengers%20Age%20of%20Ultron/rTA7qg5CDoHdtGxLNghLCR7gLbC.jpg" },
                    { 28, 7, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Avengers%20Age%20of%20Ultron/p.jpg" },
                    { 27, 7, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Avengers%20Age%20of%20Ultron/6tZ0Rc4e76VRsREpisbReD0bafh.jpg" },
                    { 26, 6, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Pet%20Sematary/p.jpg" },
                    { 25, 6, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Pet%20Sematary/n2aX63BmW7zIKgKJ58e6rKlSsdi.jpg" },
                    { 24, 6, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Pet%20Sematary/kcn3Ji7QtJ0euRxkw69iiYvbHkV.jpg" },
                    { 23, 6, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Pet%20Sematary/dpJq6trUDOutSPSLrFdROPmzaVn.jpg" },
                    { 22, 5, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Annabelle%20Comes%20Home/p.jpg" },
                    { 21, 5, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Annabelle%20Comes%20Home/4DHHymlttV0YskaxoWtuIDNDhPl.jpg" },
                    { 20, 5, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Annabelle%20Comes%20Home/2pa6UTWCuRoAEzC06vAAxI7bBrT.jpg" },
                    { 19, 4, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Dark%20Phoenix/phxiKFDvPeQj4AbkvJLmuZEieDU.jpg" },
                    { 18, 4, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Dark%20Phoenix/p.jpg" },
                    { 17, 4, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Dark%20Phoenix/6E8omqYh3dWbDlmp7IJL0Le9J7o.jpg" },
                    { 74, 19, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Robin%20Hood/p.jpg" },
                    { 75, 19, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Robin%20Hood/zSJT1sKGRKcmP4I9b8dIOuepw6I.jpg" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Comment_FilmId",
                table: "Comment",
                column: "FilmId");

            migrationBuilder.CreateIndex(
                name: "IX_Comment_UserId",
                table: "Comment",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_FilmImages_FilmId",
                table: "FilmImages",
                column: "FilmId");

            migrationBuilder.CreateIndex(
                name: "IX_Ratings_UserId",
                table: "Ratings",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "Comment");

            migrationBuilder.DropTable(
                name: "FilmImages");

            migrationBuilder.DropTable(
                name: "Ratings");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "Films");

            migrationBuilder.DropTable(
                name: "AspNetUsers");
        }
    }
}
