﻿using FilmsCatalog.DAL.Core.Entities;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace FilmsCatalog.DAL.EF.EF
{
    public static class DataSeeder
    {
        public static void Seed(this ModelBuilder modelBuilder)
        {
            SeedFilms(modelBuilder);
            SeedImages(modelBuilder);
        }

        private static void SeedFilms(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Film>().HasData(
                new Film { Id = 20, Name = "Toy Story 4", Year = 2019, Director = "Josh Cooley", Overview = overviews[0] },
                new Film { Id = 1, Name = "Shazam!", Year = 2019, Director = "Henry Gayden", Overview = overviews[1] },
                new Film { Id = 2, Name = "Alita: Battle Angel", Year = 2019, Director = "Robert Rodriguez", Overview = overviews[2] },
                new Film { Id = 3, Name = "Shaft", Year = 2019, Director = "Tim Story", Overview = overviews[3] },
                new Film { Id = 4, Name = "Dark Phoenix", Year = 2019, Director = "Simon Kinberg", Overview = overviews[4] },
                new Film { Id = 5, Name = "Annabelle Comes Home", Year = 2019, Director = "Gary Dauberman", Overview = overviews[5] },
                new Film { Id = 6, Name = "Pet Sematary ", Year = 2019, Director = "Dennis Widmyer", Overview = overviews[6] },
                new Film { Id = 7, Name = "Avengers: Age of Ultron", Year = 2015, Director = "Joss Whedon", Overview = overviews[7] },
                new Film { Id = 8, Name = "Catarina and the others ", Year = 2011, Director = "André Badalo", Overview = overviews[8] },
                new Film { Id = 9, Name = "Interstellar", Year = 2014, Director = "Christopher Nolan", Overview = overviews[9] },
                new Film { Id = 10, Name = "Fury", Year = 2014, Director = "David Ayer", Overview = overviews[10] },
                new Film { Id = 11, Name = "The Dark Knight", Year = 2003, Director = "Christopher Nolan", Overview = overviews[11] },
                new Film { Id = 12, Name = "Wonder Woman ", Year = 2017, Director = "Allan Heinberg", Overview = overviews[12] },
                new Film { Id = 13, Name = "Cinderella ", Year = 2015, Director = "Kenneth Branagh", Overview = overviews[13] },
                new Film { Id = 14, Name = "Star Wars ", Year = 1977, Director = "George Lucas", Overview = overviews[14] },
                new Film { Id = 15, Name = "Spider-Man: Into the Spider-Verse", Year = 2018, Director = "Rodney Rothman", Overview = overviews[15] },
                new Film { Id = 16, Name = "Deadpool 2", Year = 2018, Director = "Fabian Nicieza", Overview = overviews[16] },
                new Film { Id = 17, Name = "John Wick ", Year = 2014, Director = "George Lucas", Overview = overviews[17] },
                new Film { Id = 18, Name = "Wild and Free", Year = 2018, Director = "Connie Macatuno", Overview = overviews[18] },
                new Film { Id = 19, Name = "Robin Hood ", Year = 2018, Director = "Otto Bathurst", Overview = overviews[19] }
                );
        }

        private static void SeedImages(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<FilmImage>().HasData(
                new FilmImage { Id = 1, FilmId = 1, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Shazam!/p.jpg" },
                new FilmImage { Id = 2, FilmId = 1, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Shazam!/OIGX2lm5tmlCKvZUghtwHzoxxO.jpg" },
                new FilmImage { Id = 3, FilmId = 1, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Shazam!/nmV9MdbzST4xv8WMHwhVgxkHHjM.jpg" },
                new FilmImage { Id = 4, FilmId = 1, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Shazam!/qwgGtdlLMKYvT2tV8hLY22syRHN.jpg" },
                new FilmImage { Id = 5, FilmId = 1, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Shazam!/wNXWVhALRBs07VmzdSQv5nJCkVG.jpg" },
                new FilmImage { Id = 6, FilmId = 2, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Alita%20Battle%20Angel/5QKbqh9pHV3tCrohHXBzhCQ6ixF.jpg" },
                new FilmImage { Id = 7, FilmId = 2, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Alita%20Battle%20Angel/Ah6nNAk5Jjd5Bis1y056Z7DwzBb.jpg" },
                new FilmImage { Id = 8, FilmId = 2, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Alita%20Battle%20Angel/jXDselREPq8TOVGM4dzBBUM7xVk.jpg" },
                new FilmImage { Id = 9, FilmId = 2, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Alita%20Battle%20Angel/lcCNS7vyofFpJV7fl92ipIdNmGi.jpg" },
                new FilmImage { Id = 10, FilmId = 2, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Alita%20Battle%20Angel/p.jpg" },
                new FilmImage { Id = 11, FilmId = 3, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Shaft/2JS5guOh3hj3WgMhbMHPZDSU1HJ.jpg" },
                new FilmImage { Id = 12, FilmId = 3, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Shaft/e0J2BWY1AMjMUQGL2GEReN1oQrS.jpg" },
                new FilmImage { Id = 13, FilmId = 3, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Shaft/jhwSYGRToxBn4vsnmviFQUy2KBB.jpg" },
                new FilmImage { Id = 14, FilmId = 3, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Shaft/kBuenNbs1SidHPxJuMyMU8JMboI.jpg" },
                new FilmImage { Id = 15, FilmId = 3, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Shaft/p.jpg" },
                new FilmImage { Id = 16, FilmId = 4, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Dark%20Phoenix/3oqxZt0OMHnNKBhBfNLk8xqcH58.jpg" },
                new FilmImage { Id = 17, FilmId = 4, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Dark%20Phoenix/6E8omqYh3dWbDlmp7IJL0Le9J7o.jpg" },
                new FilmImage { Id = 18, FilmId = 4, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Dark%20Phoenix/p.jpg" },
                new FilmImage { Id = 19, FilmId = 4, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Dark%20Phoenix/phxiKFDvPeQj4AbkvJLmuZEieDU.jpg" },
                new FilmImage { Id = 20, FilmId = 5, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Annabelle%20Comes%20Home/2pa6UTWCuRoAEzC06vAAxI7bBrT.jpg" },
                new FilmImage { Id = 21, FilmId = 5, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Annabelle%20Comes%20Home/4DHHymlttV0YskaxoWtuIDNDhPl.jpg" },
                new FilmImage { Id = 22, FilmId = 5, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Annabelle%20Comes%20Home/p.jpg" },
                new FilmImage { Id = 23, FilmId = 6, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Pet%20Sematary/dpJq6trUDOutSPSLrFdROPmzaVn.jpg" },
                new FilmImage { Id = 24, FilmId = 6, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Pet%20Sematary/kcn3Ji7QtJ0euRxkw69iiYvbHkV.jpg" },
                new FilmImage { Id = 25, FilmId = 6, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Pet%20Sematary/n2aX63BmW7zIKgKJ58e6rKlSsdi.jpg" },
                new FilmImage { Id = 26, FilmId = 6, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Pet%20Sematary/p.jpg" },
                new FilmImage { Id = 27, FilmId = 7, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Avengers%20Age%20of%20Ultron/6tZ0Rc4e76VRsREpisbReD0bafh.jpg" },
                new FilmImage { Id = 28, FilmId = 7, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Avengers%20Age%20of%20Ultron/p.jpg" },
                new FilmImage { Id = 29, FilmId = 7, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Avengers%20Age%20of%20Ultron/rTA7qg5CDoHdtGxLNghLCR7gLbC.jpg" },
                new FilmImage { Id = 30, FilmId = 7, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Avengers%20Age%20of%20Ultron/vXIrvKadue7GdySiVh3huoQZiMi.jpg" },
                new FilmImage { Id = 31, FilmId = 8, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Catarina%20and%20the%20others/9nDiMhvL3FtaWMsvvvzQIuq276X.jpg" },
                new FilmImage { Id = 32, FilmId = 8, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Catarina%20and%20the%20others/g06kImGXhti64OLc8nhbosG7Y4S.jpg" },
                new FilmImage { Id = 33, FilmId = 8, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Catarina%20and%20the%20others/p.jpg" },
                new FilmImage { Id = 34, FilmId = 9, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Interstellar/6MDzVm9h6wEGAbvjihdFU83Q5Wo.jpg" },
                new FilmImage { Id = 35, FilmId = 9, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Interstellar/gq4Z1pfOWHn3FKFNutlDCySps9C.jpg" },
                new FilmImage { Id = 36, FilmId = 9, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Interstellar/p.jpg" },
                new FilmImage { Id = 37, FilmId = 9, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Interstellar/walWq52PP2IGRc98VkPG7Wp77lK.jpg" },
                new FilmImage { Id = 38, FilmId = 10, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Fury/7eYzAatvUzF1E2DFInJBJjtZu2A.jpg" },
                new FilmImage { Id = 39, FilmId = 10, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Fury/p.jpg" },
                new FilmImage { Id = 40, FilmId = 10, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Fury/xWeOQXvdv272N0doVcsNDuryiCy.jpg" },
                new FilmImage { Id = 41, FilmId = 10, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Fury/y6UlVGLarDFLZLqhWSagQYOVRaI.jpg" },
                new FilmImage { Id = 42, FilmId = 11, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/The%20Dark%20Knight/jfYVWfCsQ2wkif7KXD1Qsqxte2A.jpg" },
                new FilmImage { Id = 43, FilmId = 11, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/The%20Dark%20Knight/nnMC0BM6XbjIIrT4miYmMtPGcQV.jpg" },
                new FilmImage { Id = 44, FilmId = 11, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/The%20Dark%20Knight/p.jpg" },
                new FilmImage { Id = 45, FilmId = 11, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/The%20Dark%20Knight/vSupzIcJCa64lCGYmw5flIOeiEH.jpg" },
                new FilmImage { Id = 46, FilmId = 12, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Wonder%20Woman/AaABt75ZzfMGrscUR2seabz4PEX.jpg" },
                new FilmImage { Id = 47, FilmId = 12, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Wonder%20Woman/aPEhtVLrZRnJufKHwbHgqwirv7J.jpg" },
                new FilmImage { Id = 48, FilmId = 12, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Wonder%20Woman/p.jpg" },
                new FilmImage { Id = 49, FilmId = 13, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Cinderella/943FR0MnOi70lBB2dK89yTlRtEl.jpg" },
                new FilmImage { Id = 50, FilmId = 13, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Cinderella/f6jSPjlPD5HJ92VVxIBNfIxL6Ie.jpg" },
                new FilmImage { Id = 51, FilmId = 13, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Cinderella/p.jpg" },
                new FilmImage { Id = 52, FilmId = 13, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Cinderella/syhULVJLKugutEfqvz45xL1oQyB.jpg" },
                new FilmImage { Id = 53, FilmId = 14, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Star%20Wars/c4zJK1mowcps3wvdrm31knxhur2.jpg" },
                new FilmImage { Id = 54, FilmId = 14, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Star%20Wars/faCi4hzG4r9RJSFwzgedZoN10I3.jpg" },
                new FilmImage { Id = 55, FilmId = 14, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Star%20Wars/p.jpg" },
                new FilmImage { Id = 56, FilmId = 14, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Star%20Wars/scPHd4THvJRrHx45sjMGmzeKc5H.jpg" },
                new FilmImage { Id = 57, FilmId = 15, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Spider-Man%20Into%20the%20Spider-Verse/6qVF0gnLnbKCgcMfCpCB8GH7B5I.jpg" },
                new FilmImage { Id = 58, FilmId = 15, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Spider-Man%20Into%20the%20Spider-Verse/b9YkKJcW3pPaXgMZu9uoT7v9yRB.jpg" },
                new FilmImage { Id = 59, FilmId = 15, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Spider-Man%20Into%20the%20Spider-Verse/p.jpg" },
                new FilmImage { Id = 60, FilmId = 15, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Spider-Man%20Into%20the%20Spider-Verse/uUiId6cG32JSRI6RyBQSvQtLjz2.jpg" },
                new FilmImage { Id = 61, FilmId = 16, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Deadpool%202/1CzUuIdalmARzfYyEX3vGmBy6dn.jpg" },
                new FilmImage { Id = 62, FilmId = 16, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Deadpool%202/l6jEz6DvnjaPnuWnVseSFJlxDoZ.jpg" },
                new FilmImage { Id = 63, FilmId = 16, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Deadpool%202/p.jpg" },
                new FilmImage { Id = 64, FilmId = 16, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Deadpool%202/phLs80ENvyzxi2PuhidSeHfZQgJ.jpg" },
                new FilmImage { Id = 65, FilmId = 17, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/John%20Wick/djzpcrrvL6sME5J2lGG4pWDChIZ.jpg" },
                new FilmImage { Id = 66, FilmId = 17, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/John%20Wick/fINt8y7nDRUkxqAHZaO3GaTTkax.jpg" },
                new FilmImage { Id = 67, FilmId = 17, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/John%20Wick/iJlGxN0p1suzloBGvvBu3QSSlhT.jpg" },
                new FilmImage { Id = 68, FilmId = 17, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/John%20Wick/p.jpg" },
                new FilmImage { Id = 69, FilmId = 18, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Wild%20and%20Free/9v4nPAyVvtGONV5NtPkDHA9bczS.jpg" },
                new FilmImage { Id = 70, FilmId = 18, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Wild%20and%20Free/p.jpg" },
                new FilmImage { Id = 71, FilmId = 19, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Robin%20Hood/6ev6s0p9SW1R81Uybp5fL2KGtqN.jpg" },
                new FilmImage { Id = 72, FilmId = 19, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Robin%20Hood/8UF30h6EhLuJ4Cah3NEYuTy2RKK.jpg" },
                new FilmImage { Id = 73, FilmId = 19, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Robin%20Hood/axjFiijtxdfK3CD9dMwrdgLwblD.jpg" },
                new FilmImage { Id = 74, FilmId = 19, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Robin%20Hood/p.jpg" },
                new FilmImage { Id = 75, FilmId = 19, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Robin%20Hood/zSJT1sKGRKcmP4I9b8dIOuepw6I.jpg" },
                new FilmImage { Id = 76, FilmId = 20, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Toy%20Story%204/2zBx4enj1SWDEwTmsbOeEzGf5E0.jpg" },
                new FilmImage { Id = 77, FilmId = 20, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Toy%20Story%204/3FXLxOnd5LnvK8F5jUbIXOF9p9Y.jpg" },
                new FilmImage { Id = 78, FilmId = 20, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Toy%20Story%204/p.jpg" },
                new FilmImage { Id = 79, FilmId = 20, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Toy%20Story%204/p3lkc1fDBeX9ZiIQVwRtOnXYENL.jpg" },
                new FilmImage { Id = 80, FilmId = 20, Url = "https://filmimages.blob.core.windows.net/images/Fim%20Images/Toy%20Story%204/uV7NuTpZvGaWWJNdVRSlbmIP5Vo.jpg" }
                );
        }
        private static List<string> overviews = new List<string>()
        {
            "Woody has always been confident about his place in the world and that his priority is taking care of his kid, whether that's Andy or Bonnie. But when Bonnie adds a reluctant new toy called \"Forky\" to her room, a road trip adventure alongside old and new friends will show Woody how big the world can be for a toy.",
            "A boy is given the ability to become an adult superhero in times of need with a single magic word.",
            "When Alita awakens with no memory of who she is in a future world she does not recognize, she is taken in by Ido, a compassionate doctor who realizes that somewhere in this abandoned cyborg shell is the heart and soul of a young woman with an extraordinary past.",
            "JJ, aka John Shaft Jr., may be a cyber security expert with a degree from MIT, but to uncover the truth behind his best friend’s untimely death, he needs an education only his dad can provide. Absent throughout JJ’s youth, the legendary locked-and-loaded John Shaft agrees to help his progeny navigate Harlem’s heroin-infested underbelly.",
            "The X-Men face their most formidable and powerful foe when one of their own, Jean Grey, starts to spiral out of control. During a rescue mission in outer space, Jean is nearly killed when she's hit by a mysterious cosmic force. Once she returns home, this force not only makes her infinitely more powerful, but far more unstable. The X-Men must now band together to save her soul and battle aliens that want to use Grey's new abilities to rule the galaxy.",
            "Determined to keep Annabelle from wreaking more havoc, demonologists Ed and Lorraine Warren bring the possessed doll to the locked artifacts room in their home, placing her “safely” behind sacred glass and enlisting a priest’s holy blessing. But an unholy night of horror awaits as Annabelle awakens the evil spirits in the room, who all set their sights on a new target—the Warrens' ten-year-old daughter, Judy, and her friends.",
            "Dr. Louis Creed and his wife, Rachel, relocate from Boston to rural Maine with their two young children. The couple soon discover a mysterious burial ground hidden deep in the woods near their new home. When tragedy strikes, Louis turns to his neighbour Jud Crandall, setting off a perilous chain reaction that unleashes an unspeakable evil with horrific consequences.",
            "When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.",
            "Outside, the first sun rays break the dawn. Sixteen years old Catarina can't fall asleep. Inconsequently, in the big city adults are moved by desire... Catarina found she is HIV positive. She wants to drag everyone else along.",
            "Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
            "In the last months of World War II, as the Allies make their final push in the European theatre, a battle-hardened U.S. Army sergeant named 'Wardaddy' commands a Sherman tank called 'Fury' and its five-man crew on a deadly mission behind enemy lines. Outnumbered and outgunned, Wardaddy and his men face overwhelming odds in their heroic attempts to strike at the heart of Nazi Germany.",
            "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
            "An Amazon princess comes to the world of Man in the grips of the First World War to confront the forces of evil and bring an end to human conflict.",
            "When her father unexpectedly passes away, young Ella finds herself at the mercy of her cruel stepmother and her daughters. Never one to give up hope, Ella's fortunes begin to change after meeting a dashing stranger in the woods.",
            "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
            "Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson \"Kingpin\" Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.",
            "Wisecracking mercenary Deadpool battles the evil and powerful Cable and other bad guys to save a boy's life.",
            "Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.",
            "Ellie and Jake fall in love, but struggle with their relationship when they discover an unexpected connection between their pasts.",
            "A war-hardened Crusader and his Moorish commander mount an audacious revolt against the corrupt English crown."
        };
    }
}
