using Microsoft.EntityFrameworkCore.Migrations;

namespace FilmsCatalog.DAL.EF.Migrations
{
    public partial class AddSeedImageurls : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "FilmImages",
                columns: new[] { "Id", "FilmId", "Url" },
                values: new object[,]
                {
                    { 1, 1, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Shazam!/p.jpg" },
                    { 58, 15, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Spider-Man%20Into%20the%20Spider-Verse/b9YkKJcW3pPaXgMZu9uoT7v9yRB.jpg" },
                    { 57, 15, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Spider-Man%20Into%20the%20Spider-Verse/6qVF0gnLnbKCgcMfCpCB8GH7B5I.jpg" },
                    { 56, 14, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Star%20Wars/scPHd4THvJRrHx45sjMGmzeKc5H.jpg" },
                    { 55, 14, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Star%20Wars/p.jpg" },
                    { 54, 14, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Star%20Wars/faCi4hzG4r9RJSFwzgedZoN10I3.jpg" },
                    { 53, 14, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Star%20Wars/c4zJK1mowcps3wvdrm31knxhur2.jpg" },
                    { 52, 13, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Cinderella/syhULVJLKugutEfqvz45xL1oQyB.jpg" },
                    { 59, 15, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Spider-Man%20Into%20the%20Spider-Verse/p.jpg" },
                    { 51, 13, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Cinderella/p.jpg" },
                    { 49, 13, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Cinderella/943FR0MnOi70lBB2dK89yTlRtEl.jpg" },
                    { 48, 12, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Wonder%20Woman/p.jpg" },
                    { 47, 12, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Wonder%20Woman/aPEhtVLrZRnJufKHwbHgqwirv7J.jpg" },
                    { 46, 12, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Wonder%20Woman/AaABt75ZzfMGrscUR2seabz4PEX.jpg" },
                    { 45, 11, "https://filmimages.blob.core.windows.net/images/Fim%20Images/The%20Dark%20Knight/vSupzIcJCa64lCGYmw5flIOeiEH.jpg" },
                    { 44, 11, "https://filmimages.blob.core.windows.net/images/Fim%20Images/The%20Dark%20Knight/p.jpg" },
                    { 43, 11, "https://filmimages.blob.core.windows.net/images/Fim%20Images/The%20Dark%20Knight/nnMC0BM6XbjIIrT4miYmMtPGcQV.jpg" },
                    { 50, 13, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Cinderella/f6jSPjlPD5HJ92VVxIBNfIxL6IP.jpg" },
                    { 42, 11, "https://filmimages.blob.core.windows.net/images/Fim%20Images/The%20Dark%20Knight/jfYVWfCsQ2wkif7KXD1Qsqxte2A.jpg" },
                    { 60, 15, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Spider-Man%20Into%20the%20Spider-Verse/uUiId6cG32JSRI6RyBQSvQtLjz2.jpg" },
                    { 62, 16, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Deadpool%202/l6jEz6DvnjaPnuWnVseSFJlxDoZ.jpg" },
                    { 78, 20, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Toy%20Story%204/p.jpg" },
                    { 77, 20, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Toy%20Story%204/3FXLxOnd5LnvK8F5jUbIXOF9p9Y.jpg" },
                    { 76, 20, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Toy%20Story%204/2zBx4enj1SWDEwTmsbOeEzGf5E0.jpg" },
                    { 75, 19, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Robin%20Hood/zSJT1sKGRKcmP4I9b8dIOuepw6I.jpg" },
                    { 74, 19, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Robin%20Hood/p.jpg" },
                    { 73, 19, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Robin%20Hood/axjFiijtxdfK3CD9dMwrdgLwblD.jpg" },
                    { 72, 19, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Robin%20Hood/8UF30h6EhLuJ4Cah3NEYuTy2RKK.jpg" },
                    { 61, 16, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Deadpool%202/1CzUuIdalmARzfYyEX3vGmBy6dn.jpg" },
                    { 71, 19, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Robin%20Hood/6ev6s0p9SW1R81Uybp5fL2KGtqN.jpg" },
                    { 69, 18, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Wild%20and%20Free/9v4nPAyVvtGONV5NtPkDHA9bczS.jpg" },
                    { 68, 17, "https://filmimages.blob.core.windows.net/images/Fim%20Images/John%20Wick/p.jpg" },
                    { 67, 17, "https://filmimages.blob.core.windows.net/images/Fim%20Images/John%20Wick/iJlGxN0p1suzloBGvvBu3QSSlhT.jpg" },
                    { 66, 17, "https://filmimages.blob.core.windows.net/images/Fim%20Images/John%20Wick/fINt8y7nDRUkxqAHZaO3GaTTkax.jpg" },
                    { 65, 17, "https://filmimages.blob.core.windows.net/images/Fim%20Images/John%20Wick/djzpcrrvL6sME5J2lGG4pWDChIZ.jpg" },
                    { 64, 16, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Deadpool%202/phLs80ENvyzxi2PuhidSeHfZQgJ.jpg" },
                    { 63, 16, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Deadpool%202/p.jpg" },
                    { 70, 18, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Wild%20and%20Free/p.jpg" },
                    { 41, 10, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Fury/y6UlVGLarDFLZLqhWSagQYOVRaI.jpg" },
                    { 40, 10, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Fury/xWeOQXvdv272N0doVcsNDuryiCy.jpg" },
                    { 39, 10, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Fury/p.jpg" },
                    { 17, 4, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Dark%20Phoenix/6E8omqYh3dWbDlmp7IJL0Le9J7o.jpg" },
                    { 16, 4, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Dark%20Phoenix/3oqxZt0OMHnNKBhBfNLk8xqcH58.jpg" },
                    { 15, 3, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Shaft/p.jpg" },
                    { 14, 3, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Shaft/kBuenNbs1SidHPxJuMyMU8JMboI.jpg" },
                    { 13, 3, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Shaft/jhwSYGRToxBn4vsnmviFQUy2KBB.jpg" },
                    { 12, 3, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Shaft/e0J2BWY1AMjMUQGL2GEReN1oQrS.jpg" },
                    { 11, 3, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Shaft/2JS5guOh3hj3WgMhbMHPZDSU1HJ.jpg" },
                    { 18, 4, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Dark%20Phoenix/p.jpg" },
                    { 10, 2, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Alita%20Battle%20Angel/p.jpg" },
                    { 8, 2, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Alita%20Battle%20Angel/jXDselREPq8TOVGM4dzBBUM7xVk.jpg" },
                    { 7, 2, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Alita%20Battle%20Angel/Ah6nNAk5Jjd5Bis1y056Z7DwzBb.jpg" },
                    { 6, 2, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Alita%20Battle%20Angel/5QKbqh9pHV3tCrohHXBzhCQ6ixF.jpg" },
                    { 5, 1, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Shazam!/wNXWVhALRBs07VmzdSQv5nJCkVG.jpg" },
                    { 4, 1, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Shazam!/qwgGtdlLMKYvT2tV8hLY22syRHN.jpg" },
                    { 3, 1, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Shazam!/nmV9MdbzST4xv8WMHwhVgxkHHjM.jpg" },
                    { 2, 1, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Shazam!/OIGX2lm5tmlCKvZUghtwHzoxxO.jpg" },
                    { 9, 2, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Alita%20Battle%20Angel/lcCNS7vyofFpJV7fl92ipIdNmGi.jpg" },
                    { 19, 4, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Dark%20Phoenix/phxiKFDvPeQj4AbkvJLmuZEieDU.jpg" },
                    { 20, 5, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Annabelle%20Comes%20Home/2pa6UTWCuRoAEzC06vAAxI7bBrT.jpg" },
                    { 21, 5, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Annabelle%20Comes%20Home/4DHHymlttV0YskaxoWtuIDNDhPl.jpg" },
                    { 38, 10, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Fury/7eYzAatvUzF1E2DFInJBJjtZu2A.jpg" },
                    { 37, 9, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Interstellar/walWq52PP2IGRc98VkPG7Wp77lK.jpg" },
                    { 36, 9, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Interstellar/p.jpg" },
                    { 35, 9, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Interstellar/gq4Z1pfOWHn3FKFNutlDCySps9C.jpg" },
                    { 34, 9, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Interstellar/6MDzVm9h6wEGAbvjihdFU83Q5Wo.jpg" },
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
                    { 79, 20, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Toy%20Story%204/p3lkc1fDBeX9ZiIQVwRtOnXYENL.jpg" },
                    { 80, 20, "https://filmimages.blob.core.windows.net/images/Fim%20Images/Toy%20Story%204/uV7NuTpZvGaWWJNdVRSlbmIP5Vo.jpg" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 17);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 18);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 19);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 20);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 21);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 22);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 23);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 24);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 25);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 26);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 27);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 28);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 29);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 30);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 31);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 32);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 33);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 34);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 35);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 36);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 37);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 38);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 39);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 40);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 41);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 42);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 43);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 44);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 45);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 46);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 47);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 48);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 49);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 50);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 51);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 52);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 53);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 54);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 55);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 56);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 57);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 58);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 59);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 60);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 61);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 62);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 63);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 64);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 65);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 66);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 67);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 68);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 69);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 70);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 71);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 72);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 73);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 74);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 75);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 76);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 77);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 78);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 79);

            migrationBuilder.DeleteData(
                table: "FilmImages",
                keyColumn: "Id",
                keyValue: 80);
        }
    }
}
