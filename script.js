const Authorization = {
    login: function () {
        const email = document.getElementById("email").value;
        if (email == '') {
            alert('Username must be added')
        } else {
            localStorage.setItem("username", email);
            location.replace('home.html')
        }
    },
    logout: function () {
        location.assign("index.html")
        localStorage.clear();
    }
}

const movies = {
    movies: [
        {
            "id": 1,
            "name": "The Shawshank Redemption",
            "duration": "176",
            "image": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX67_CR0,0,67,98_AL_.jpg",
            "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            "release_date": "2013-09-01",
            "is_coming_soon": 0,
            "rating": 1,
            "actors": [
              {
                "id": 22,
                "first_name": "Candice",
                "last_name": "Hettinger",
                "image": "https://randomuser.me/api/portraits/women/23.jpg"
              },
              {
                "id": 10,
                "first_name": "Ottis",
                "last_name": "Labadie",
                "image": "https://randomuser.me/api/portraits/men/78.jpg"
              },
              {
                "id": 13,
                "first_name": "Kenton",
                "last_name": "Friesen",
                "image": "https://randomuser.me/api/portraits/men/66.jpg"
              },
              {
                "id": 16,
                "first_name": "Carlee",
                "last_name": "Koelpin",
                "image": "https://randomuser.me/api/portraits/women/91.jpg"
              },
              {
                "id": 28,
                "first_name": "Celine",
                "last_name": "Becker",
                "image": "https://randomuser.me/api/portraits/women/42.jpg"
              }
            ],
            "genres": [
              {
                "id": 1,
                "name": "Drama"
              }
            ]
          },
          {
            "id": 2,
            "name": "The Godfather",
            "duration": "180",
            "image": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY98_CR1,0,67,98_AL_.jpg",
            "description": "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
            "release_date": "2023-02-04",
            "is_coming_soon": 1,
            "rating": 4,
            "actors": [
              {
                "id": 28,
                "first_name": "Celine",
                "last_name": "Becker",
                "image": "https://randomuser.me/api/portraits/women/42.jpg"
              },
              {
                "id": 14,
                "first_name": "Gerardo",
                "last_name": "Swift",
                "image": "https://randomuser.me/api/portraits/men/79.jpg"
              },
              {
                "id": 22,
                "first_name": "Candice",
                "last_name": "Hettinger",
                "image": "https://randomuser.me/api/portraits/women/23.jpg"
              },
              {
                "id": 11,
                "first_name": "Arjun",
                "last_name": "Stanton",
                "image": "https://randomuser.me/api/portraits/men/39.jpg"
              }
            ],
            "genres": [
              {
                "id": 5,
                "name": "Romance"
              }
            ]
          },
          {
            "id": 3,
            "name": "The Dark Knight",
            "duration": "157",
            "image": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX67_CR0,0,67,98_AL_.jpg",
            "description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
            "release_date": "2019-06-01",
            "is_coming_soon": 0,
            "rating": 10,
            "actors": [
              {
                "id": 27,
                "first_name": "Marc",
                "last_name": "Effertz",
                "image": "https://randomuser.me/api/portraits/women/47.jpg"
              }
            ],
            "genres": [
              {
                "id": 5,
                "name": "Romance"
              },
              {
                "id": 4,
                "name": "Action"
              }
            ]
          },
          {
            "id": 4,
            "name": "The Godfather: Part II",
            "duration": "173",
            "image": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY98_CR1,0,67,98_AL_.jpg",
            "description": "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
            "release_date": "2019-10-17",
            "is_coming_soon": 0,
            "rating": 5,
            "actors": [
              {
                "id": 25,
                "first_name": "Santina",
                "last_name": "Oberbrunner",
                "image": "https://randomuser.me/api/portraits/men/35.jpg"
              },
              {
                "id": 29,
                "first_name": "Brayan",
                "last_name": "Orn",
                "image": "https://randomuser.me/api/portraits/women/45.jpg"
              },
              {
                "id": 5,
                "first_name": "Jamison",
                "last_name": "O'Kon",
                "image": "https://randomuser.me/api/portraits/women/24.jpg"
              },
              {
                "id": 30,
                "first_name": "Lucius",
                "last_name": "Hartmann",
                "image": "https://randomuser.me/api/portraits/men/68.jpg"
              },
              {
                "id": 28,
                "first_name": "Celine",
                "last_name": "Becker",
                "image": "https://randomuser.me/api/portraits/women/42.jpg"
              }
            ],
            "genres": [
              {
                "id": 3,
                "name": "Horror"
              },
              {
                "id": 4,
                "name": "Action"
              }
            ]
          },
          {
            "id": 5,
            "name": "12 Angry Men",
            "duration": "203",
            "image": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX67_CR0,0,67,98_AL_.jpg",
            "description": "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
            "release_date": "2022-01-30",
            "is_coming_soon": 1,
            "rating": 4,
            "actors": [
              {
                "id": 23,
                "first_name": "Antonette",
                "last_name": "Will",
                "image": "https://randomuser.me/api/portraits/men/93.jpg"
              },
              {
                "id": 22,
                "first_name": "Candice",
                "last_name": "Hettinger",
                "image": "https://randomuser.me/api/portraits/women/23.jpg"
              },
              {
                "id": 26,
                "first_name": "Brandi",
                "last_name": "Barrows",
                "image": "https://randomuser.me/api/portraits/men/72.jpg"
              }
            ],
            "genres": [
              {
                "id": 4,
                "name": "Action"
              }
            ]
          },
          {
            "id": 6,
            "name": "The Lord of the Rings: The Return of the King",
            "duration": "193",
            "image": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg",
            "description": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
            "release_date": "2016-02-26",
            "is_coming_soon": 0,
            "rating": 8,
            "actors": [
              {
                "id": 10,
                "first_name": "Ottis",
                "last_name": "Labadie",
                "image": "https://randomuser.me/api/portraits/men/78.jpg"
              }
            ],
            "genres": [
              {
                "id": 5,
                "name": "Romance"
              }
            ]
          },
          {
            "id": 7,
            "name": "Pulp Fiction",
            "duration": "184",
            "image": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY98_CR0,0,67,98_AL_.jpg",
            "description": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            "release_date": "2015-01-14",
            "is_coming_soon": 0,
            "rating": 6,
            "actors": [
              {
                "id": 21,
                "first_name": "Rosanna",
                "last_name": "Gulgowski",
                "image": "https://randomuser.me/api/portraits/women/47.jpg"
              },
              {
                "id": 20,
                "first_name": "Annamae",
                "last_name": "Kovacek",
                "image": "https://randomuser.me/api/portraits/women/54.jpg"
              }
            ],
            "genres": [
              {
                "id": 4,
                "name": "Action"
              },
              {
                "id": 5,
                "name": "Romance"
              }
            ]
          },
          {
            "id": 8,
            "name": "Schindler's List",
            "duration": "183",
            "image": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX67_CR0,0,67,98_AL_.jpg",
            "description": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
            "release_date": "2022-03-10",
            "is_coming_soon": 1,
            "rating": 2,
            "actors": [
              {
                "id": 30,
                "first_name": "Lucius",
                "last_name": "Hartmann",
                "image": "https://randomuser.me/api/portraits/men/68.jpg"
              },
              {
                "id": 4,
                "first_name": "Darwin",
                "last_name": "Feest",
                "image": "https://randomuser.me/api/portraits/men/2.jpg"
              },
              {
                "id": 7,
                "first_name": "Gunner",
                "last_name": "Olson",
                "image": "https://randomuser.me/api/portraits/men/59.jpg"
              },
              {
                "id": 1,
                "first_name": "Jaylon",
                "last_name": "Bayer",
                "image": "https://randomuser.me/api/portraits/women/5.jpg"
              },
              {
                "id": 27,
                "first_name": "Marc",
                "last_name": "Effertz",
                "image": "https://randomuser.me/api/portraits/women/47.jpg"
              }
            ],
            "genres": [
              {
                "id": 3,
                "name": "Horror"
              }
            ]
          },
          {
            "id": 9,
            "name": "Inception",
            "duration": "185",
            "image": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX67_CR0,0,67,98_AL_.jpg",
            "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
            "release_date": "2019-01-13",
            "is_coming_soon": 0,
            "rating": 5,
            "actors": [
              {
                "id": 9,
                "first_name": "Otho",
                "last_name": "Pacocha",
                "image": "https://randomuser.me/api/portraits/men/57.jpg"
              },
              {
                "id": 22,
                "first_name": "Candice",
                "last_name": "Hettinger",
                "image": "https://randomuser.me/api/portraits/women/23.jpg"
              },
              {
                "id": 16,
                "first_name": "Carlee",
                "last_name": "Koelpin",
                "image": "https://randomuser.me/api/portraits/women/91.jpg"
              },
              {
                "id": 20,
                "first_name": "Annamae",
                "last_name": "Kovacek",
                "image": "https://randomuser.me/api/portraits/women/54.jpg"
              },
              {
                "id": 28,
                "first_name": "Celine",
                "last_name": "Becker",
                "image": "https://randomuser.me/api/portraits/women/42.jpg"
              }
            ],
            "genres": [
              {
                "id": 4,
                "name": "Action"
              },
              {
                "id": 2,
                "name": "Comedy"
              }
            ]
          },
          {
            "id": 10,
            "name": "Fight Club",
            "duration": "185",
            "image": "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg",
            "description": "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
            "release_date": "2016-05-21",
            "is_coming_soon": 0,
            "rating": 4,
            "actors": [
              {
                "id": 6,
                "first_name": "Stanford",
                "last_name": "Fadel",
                "image": "https://randomuser.me/api/portraits/women/22.jpg"
              },
              {
                "id": 7,
                "first_name": "Gunner",
                "last_name": "Olson",
                "image": "https://randomuser.me/api/portraits/men/59.jpg"
              },
              {
                "id": 15,
                "first_name": "Francesco",
                "last_name": "Schaden",
                "image": "https://randomuser.me/api/portraits/women/53.jpg"
              }
            ],
            "genres": [
              {
                "id": 3,
                "name": "Horror"
              },
              {
                "id": 4,
                "name": "Action"
              }
            ]
          },
          {
            "id": 11,
            "name": "The Lord of the Rings: The Fellowship of the Ring",
            "duration": "143",
            "image": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX67_CR0,0,67,98_AL_.jpg",
            "description": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
            "release_date": "2017-11-27",
            "is_coming_soon": 0,
            "rating": 2,
            "actors": [
              {
                "id": 9,
                "first_name": "Otho",
                "last_name": "Pacocha",
                "image": "https://randomuser.me/api/portraits/men/57.jpg"
              },
              {
                "id": 3,
                "first_name": "Cyrus",
                "last_name": "Grimes",
                "image": "https://randomuser.me/api/portraits/women/39.jpg"
              },
              {
                "id": 4,
                "first_name": "Darwin",
                "last_name": "Feest",
                "image": "https://randomuser.me/api/portraits/men/2.jpg"
              }
            ],
            "genres": [
              {
                "id": 5,
                "name": "Romance"
              },
              {
                "id": 4,
                "name": "Action"
              }
            ]
          },
          {
            "id": 12,
            "name": "Forrest Gump",
            "duration": "142",
            "image": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY98_CR0,0,67,98_AL_.jpg",
            "description": "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
            "release_date": "2022-11-20",
            "is_coming_soon": 1,
            "rating": 4,
            "actors": [
              {
                "id": 26,
                "first_name": "Brandi",
                "last_name": "Barrows",
                "image": "https://randomuser.me/api/portraits/men/72.jpg"
              },
              {
                "id": 19,
                "first_name": "Madyson",
                "last_name": "Hermiston",
                "image": "https://randomuser.me/api/portraits/men/76.jpg"
              },
              {
                "id": 10,
                "first_name": "Ottis",
                "last_name": "Labadie",
                "image": "https://randomuser.me/api/portraits/men/78.jpg"
              },
              {
                "id": 20,
                "first_name": "Annamae",
                "last_name": "Kovacek",
                "image": "https://randomuser.me/api/portraits/women/54.jpg"
              }
            ],
            "genres": [
              {
                "id": 4,
                "name": "Action"
              },
              {
                "id": 1,
                "name": "Drama"
              }
            ]
          },
          {
            "id": 13,
            "name": "Il buono, il brutto, il cattivo",
            "duration": "196",
            "image": "https://m.media-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_UX67_CR0,0,67,98_AL_.jpg",
            "description": "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
            "release_date": "2017-06-12",
            "is_coming_soon": 0,
            "rating": 3,
            "actors": [
              {
                "id": 25,
                "first_name": "Santina",
                "last_name": "Oberbrunner",
                "image": "https://randomuser.me/api/portraits/men/35.jpg"
              },
              {
                "id": 13,
                "first_name": "Kenton",
                "last_name": "Friesen",
                "image": "https://randomuser.me/api/portraits/men/66.jpg"
              },
              {
                "id": 18,
                "first_name": "Naomie",
                "last_name": "Hamill",
                "image": "https://randomuser.me/api/portraits/women/12.jpg"
              }
            ],
            "genres": [
              {
                "id": 4,
                "name": "Action"
              }
            ]
          },
          {
            "id": 14,
            "name": "The Lord of the Rings: The Two Towers",
            "duration": "154",
            "image": "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX67_CR0,0,67,98_AL_.jpg",
            "description": "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
            "release_date": "2013-08-19",
            "is_coming_soon": 0,
            "rating": 1,
            "actors": [
              {
                "id": 24,
                "first_name": "Mina",
                "last_name": "Nitzsche",
                "image": "https://randomuser.me/api/portraits/men/27.jpg"
              }
            ],
            "genres": [
              {
                "id": 4,
                "name": "Action"
              },
              {
                "id": 1,
                "name": "Drama"
              }
            ]
          },
          {
            "id": 15,
            "name": "The Matrix",
            "duration": "192",
            "image": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX67_CR0,0,67,98_AL_.jpg",
            "description": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
            "release_date": "2023-02-19",
            "is_coming_soon": 1,
            "rating": 8,
            "actors": [
              {
                "id": 8,
                "first_name": "Krista",
                "last_name": "Daniel",
                "image": "https://randomuser.me/api/portraits/men/72.jpg"
              },
              {
                "id": 15,
                "first_name": "Francesco",
                "last_name": "Schaden",
                "image": "https://randomuser.me/api/portraits/women/53.jpg"
              },
              {
                "id": 1,
                "first_name": "Jaylon",
                "last_name": "Bayer",
                "image": "https://randomuser.me/api/portraits/women/5.jpg"
              }
            ],
            "genres": [
              {
                "id": 2,
                "name": "Comedy"
              },
              {
                "id": 4,
                "name": "Action"
              }
            ]
          },
          {
            "id": 16,
            "name": "Goodfellas",
            "duration": "169",
            "image": "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg",
            "description": "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
            "release_date": "2016-01-11",
            "is_coming_soon": 0,
            "rating": 9,
            "actors": [
              {
                "id": 26,
                "first_name": "Brandi",
                "last_name": "Barrows",
                "image": "https://randomuser.me/api/portraits/men/72.jpg"
              },
              {
                "id": 18,
                "first_name": "Naomie",
                "last_name": "Hamill",
                "image": "https://randomuser.me/api/portraits/women/12.jpg"
              },
              {
                "id": 29,
                "first_name": "Brayan",
                "last_name": "Orn",
                "image": "https://randomuser.me/api/portraits/women/45.jpg"
              }
            ],
            "genres": [
              {
                "id": 5,
                "name": "Romance"
              },
              {
                "id": 1,
                "name": "Drama"
              }
            ]
          },
          {
            "id": 17,
            "name": "Star Wars: Episode V - The Empire Strikes Back",
            "duration": "211",
            "image": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg",
            "description": "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader and a bounty hunter named Boba Fett all over the galaxy.",
            "release_date": "2015-01-03",
            "is_coming_soon": 0,
            "rating": 3,
            "actors": [
              {
                "id": 6,
                "first_name": "Stanford",
                "last_name": "Fadel",
                "image": "https://randomuser.me/api/portraits/women/22.jpg"
              },
              {
                "id": 24,
                "first_name": "Mina",
                "last_name": "Nitzsche",
                "image": "https://randomuser.me/api/portraits/men/27.jpg"
              },
              {
                "id": 3,
                "first_name": "Cyrus",
                "last_name": "Grimes",
                "image": "https://randomuser.me/api/portraits/women/39.jpg"
              }
            ],
            "genres": [
              {
                "id": 4,
                "name": "Action"
              }
            ]
          },
          {
            "id": 18,
            "name": "One Flew Over the Cuckoo's Nest",
            "duration": "164",
            "image": "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX67_CR0,0,67,98_AL_.jpg",
            "description": "A criminal pleads insanity and is admitted to a mental institution, where he rebels against the oppressive nurse and rallies up the scared patients.",
            "release_date": "2016-03-09",
            "is_coming_soon": 0,
            "rating": 4,
            "actors": [
              {
                "id": 26,
                "first_name": "Brandi",
                "last_name": "Barrows",
                "image": "https://randomuser.me/api/portraits/men/72.jpg"
              },
              {
                "id": 14,
                "first_name": "Gerardo",
                "last_name": "Swift",
                "image": "https://randomuser.me/api/portraits/men/79.jpg"
              },
              {
                "id": 17,
                "first_name": "Quinton",
                "last_name": "Pollich",
                "image": "https://randomuser.me/api/portraits/men/39.jpg"
              },
              {
                "id": 20,
                "first_name": "Annamae",
                "last_name": "Kovacek",
                "image": "https://randomuser.me/api/portraits/women/54.jpg"
              }
            ],
            "genres": [
              {
                "id": 1,
                "name": "Drama"
              },
              {
                "id": 4,
                "name": "Action"
              }
            ]
          },
          {
            "id": 19,
            "name": "Hamilton",
            "duration": "186",
            "image": "https://m.media-amazon.com/images/M/MV5BNjViNWRjYWEtZTI0NC00N2E3LTk0NGQtMjY4NTM3OGNkZjY0XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_UX67_CR0,0,67,98_AL_.jpg",
            "description": "The real life of one of America's foremost founding fathers and first Secretary of the Treasury, Alexander Hamilton. Captured live on Broadway from the Richard Rodgers Theater with the original Broadway cast.",
            "release_date": "2022-03-27",
            "is_coming_soon": 1,
            "rating": 4,
            "actors": [
              {
                "id": 25,
                "first_name": "Santina",
                "last_name": "Oberbrunner",
                "image": "https://randomuser.me/api/portraits/men/35.jpg"
              },
              {
                "id": 21,
                "first_name": "Rosanna",
                "last_name": "Gulgowski",
                "image": "https://randomuser.me/api/portraits/women/47.jpg"
              },
              {
                "id": 1,
                "first_name": "Jaylon",
                "last_name": "Bayer",
                "image": "https://randomuser.me/api/portraits/women/5.jpg"
              }
            ],
            "genres": [
              {
                "id": 1,
                "name": "Drama"
              },
              {
                "id": 5,
                "name": "Romance"
              }
            ]
          },
          {
            "id": 20,
            "name": "Gisaengchung",
            "duration": "143",
            "image": "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX67_CR0,0,67,98_AL_.jpg",
            "description": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
            "release_date": "2023-01-04",
            "is_coming_soon": 1,
            "rating": 6,
            "actors": [
              {
                "id": 12,
                "first_name": "Jonas",
                "last_name": "Schaefer",
                "image": "https://randomuser.me/api/portraits/women/21.jpg"
              },
              {
                "id": 30,
                "first_name": "Lucius",
                "last_name": "Hartmann",
                "image": "https://randomuser.me/api/portraits/men/68.jpg"
              }
            ],
            "genres": [
              {
                "id": 2,
                "name": "Comedy"
              }
            ]
          },
    ]
}

const view = {
    loadMovies() {
        list =  document.getElementById('movies');
        movies.movies.forEach(function(movie) {
            const item = document.createElement('img');
            item.src = movie.image;
            list.appendChild(item);
        })
    }
}