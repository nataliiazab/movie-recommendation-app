//server/src/prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Rating = {
  imdb: string;
  rottenTomatoes: string;
  metacritic: string;
};

type Movie = {
  title: string;
  genre: string;
  year: number;
  rating: Rating;
  description: string;
  image: string;
};
// A list of top IMDb movies (200 entries, with year, rating, and genre)
const topImdbMovies: Movie[] = [
  {
    title: "The Shawshank Redemption",
    genre: "Drama",
    year: 1994,
    rating: {
      imdb: "9.3/10",
      rottenTomatoes: "89%",
      metacritic: "82/100",
    },
    description:
      "Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.",
    image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
  },
  {
    title: "The Godfather",
    genre: "Crime, Drama",
    year: 1972,
    rating: {
      imdb: "9.2/10",
      rottenTomatoes: "97%",
      metacritic: "100/100",
    },
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
  },
  {
    title: "The Dark Knight",
    genre: "Action, Crime, Drama",
    year: 2008,
    rating: {
      imdb: "9.0/10",
      rottenTomatoes: "94%",
      metacritic: "84/100",
    },
    description:
      "When the menace known as the Joker emerges, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    title: "The Godfather: Part II",
    genre: "Crime, Drama",
    year: 1974,
    rating: {
      imdb: "9.0/10",
      rottenTomatoes: "96%",
      metacritic: "90/100",
    },
    description:
      "The early life and career of Vito Corleone in 1920s New York is portrayed, while his son Michael expands and tightens his grip on the family crime syndicate.",
    image: "https://image.tmdb.org/t/p/w500/amvmeQWheahG3StKwIE1f7jRnkZ.jpg",
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    genre: "Action, Adventure, Drama",
    year: 2003,
    rating: {
      imdb: "8.9/10",
      rottenTomatoes: "93%",
      metacritic: "94/100",
    },
    description:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    image: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
  },
  {
    title: "Pulp Fiction",
    genre: "Crime, Drama",
    year: 1994,
    rating: {
      imdb: "8.9/10",
      rottenTomatoes: "92%",
      metacritic: "94/100",
    },
    description:
      "The lives of two mob hitmen, a boxer, a gangster, and his wife intertwine in four tales of violence and redemption.",
    image: "https://image.tmdb.org/t/p/w500/plnlrtBUULT0rh3Xsjmpubiso3L.jpg",
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    genre: "Action, Adventure, Drama",
    year: 2001,
    rating: {
      imdb: "8.8/10",
      rottenTomatoes: "91%",
      metacritic: "92/100",
    },
    description:
      "A meek Hobbit and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    image: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
  },
  {
    title: "Forrest Gump",
    genre: "Drama, Romance",
    year: 1994,
    rating: {
      imdb: "8.8/10",
      rottenTomatoes: "71%",
      metacritic: "82/100",
    },
    description:
      "The presidencies of Kennedy and Johnson, the Vietnam War, and other historical events unfold from the perspective of an Alabama man with a low IQ.",
    image: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
  },
  {
    title: "Inception",
    genre: "Action, Adventure, Sci-Fi",
    year: 2010,
    rating: {
      imdb: "8.8/10",
      rottenTomatoes: "87%",
      metacritic: "74/100",
    },
    description:
      "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea in the mind of a C.E.O.",
    image: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
  },
  {
    title: "The Empire Strikes Back",
    genre: "Action, Adventure, Fantasy",
    year: 1980,
    rating: {
      imdb: "8.7/10",
      rottenTomatoes: "94%",
      metacritic: "82/100",
    },
    description:
      "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda.",
    image: "https://image.tmdb.org/t/p/w500/7BuH8itoSrLExs2YZSsM01Qk2no.jpg",
  },
  {
    title: "The Matrix",
    genre: "Action, Sci-Fi",
    year: 1999,
    rating: {
      imdb: "8.7/10",
      rottenTomatoes: "88%",
      metacritic: "73/100",
    },
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
  },
  {
    title: "The Silence of the Lambs",
    genre: "Crime, Drama, Thriller",
    year: 1991,
    rating: {
      imdb: "8.6/10",
      rottenTomatoes: "96%",
      metacritic: "85/100",
    },
    description:
      "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to catch another serial killer.",
    image: "https://image.tmdb.org/t/p/w500/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg",
  },
  {
    title: "Schindler's List",
    genre: "Biography, Drama, History",
    year: 1993,
    rating: {
      imdb: "8.9/10",
      rottenTomatoes: "98%",
      metacritic: "94/100",
    },
    description:
      "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce.",
    image: "https://image.tmdb.org/t/p/w500/c8Ass7acuOe4za6DhSattE359gr.jpg",
  },
  {
    title: "Se7en",
    genre: "Crime, Drama, Mystery",
    year: 1995,
    rating: {
      imdb: "8.6/10",
      rottenTomatoes: "82%",
      metacritic: "65/100",
    },
    description:
      "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
    image: "https://image.tmdb.org/t/p/w500/69Sns8WoET6CfaYlIkHbla4l7nC.jpg",
  },
  {
    title: "The Usual Suspects",
    genre: "Crime, Drama, Thriller",
    year: 1995,
    rating: {
      imdb: "8.5/10",
      rottenTomatoes: "88%",
      metacritic: "77/100",
    },
    description:
      "A sole survivor tells the twisted events leading up to a horrific gun battle on a boat, which began when five criminals met at a police lineup.",
    image: "https://image.tmdb.org/t/p/w500/bUPmtQzrRhzqYySeiMpv7GurAfm.jpg",
  },
  {
    title: "The Lion King",
    genre: "Animation, Adventure, Drama",
    year: 1994,
    rating: {
      imdb: "8.5/10",
      rottenTomatoes: "93%",
      metacritic: "88/100",
    },
    description:
      "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    image: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
  },
  {
    title: "Goodfellas",
    genre: "Biography, Crime, Drama",
    year: 1990,
    rating: {
      imdb: "8.7/10",
      rottenTomatoes: "96%",
      metacritic: "90/100",
    },
    description:
      "The story of Henry Hill and his life in the mob, covering his relationship with his wife and mob partners over a period of 25 years.",
    image: "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
  },
  {
    title: "Casablanca",
    genre: "Drama, Romance, War",
    year: 1942,
    rating: {
      imdb: "8.5/10",
      rottenTomatoes: "99%",
      metacritic: "100/100",
    },
    description:
      "A cynical American expatriate struggles to decide whether or not he should help his former lover and her fugitive husband escape French Morocco.",
    image: "https://image.tmdb.org/t/p/w500/5K7cOHoay2mZusSLezBOY0Qxh8a.jpg",
  },
  {
    title: "Citizen Kane",
    genre: "Drama, Mystery",
    year: 1941,
    rating: {
      imdb: "8.3/10",
      rottenTomatoes: "99%",
      metacritic: "100/100",
    },
    description:
      "Following the death of publishing tycoon Charles Foster Kane, reporters scramble to uncover the meaning of his final utterance, 'Rosebud.'",
    image: "https://image.tmdb.org/t/p/w500/s5VzT0BU6e6uKLdTzktl6kcjGz8.jpg",
  },
  {
    title: "It's a Wonderful Life",
    genre: "Drama, Family, Fantasy",
    year: 1946,
    rating: {
      imdb: "8.6/10",
      rottenTomatoes: "94%",
      metacritic: "89/100",
    },
    description:
      "An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed.",
    image: "https://image.tmdb.org/t/p/w500/bHtWZHZ4gO8kzd8tNxkTBF83Wlo.jpg",
  },
  {
    title: "Star Wars: A New Hope",
    genre: "Action, Adventure, Fantasy",
    year: 1977,
    rating: {
      imdb: "8.6/10",
      rottenTomatoes: "93%",
      metacritic: "90/100",
    },
    description:
      "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee, and two droids to save the galaxy from the Empire's world-destroying battle station.",
    image: "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
  },
  {
    title: "The Departed",
    genre: "Crime, Drama, Thriller",
    year: 2006,
    rating: {
      imdb: "8.5/10",
      rottenTomatoes: "90%",
      metacritic: "85/100",
    },
    description:
      "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    image: "https://image.tmdb.org/t/p/w500/jyAgiqVSx5fl0NNj7WoGGKweXrL.jpg",
  },
  {
    title: "Whiplash",
    genre: "Drama, Music",
    year: 2014,
    rating: {
      imdb: "8.5/10",
      rottenTomatoes: "94%",
      metacritic: "88/100",
    },
    description:
      "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an abusive instructor.",
    image: "https://image.tmdb.org/t/p/w500/oPxnRhyAIzJKGUEdSiwTJQBa3NM.jpg",
  },
  {
    title: "Gladiator",
    genre: "Action, Adventure, Drama",
    year: 2000,
    rating: {
      imdb: "8.5/10",
      rottenTomatoes: "77%",
      metacritic: "67/100",
    },
    description:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
  },
  {
    title: "The Prestige",
    genre: "Drama, Mystery, Sci-Fi",
    year: 2006,
    rating: {
      imdb: "8.5/10",
      rottenTomatoes: "76%",
      metacritic: "66/100",
    },
    description:
      "After a tragic accident, two stage magicians engage in a bitter rivalry to create the ultimate illusion while sacrificing everything they have.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tRNlZbgNCNOpLpbPEz5L8G8A0JN.jpg",
  },
  {
    title: "The Green Mile",
    genre: "Crime, Drama, Fantasy",
    year: 1999,
    rating: {
      imdb: "8.6/10",
      rottenTomatoes: "79%",
      metacritic: "61/100",
    },
    description:
      "In a Louisiana prison, a kind death-row inmate with a mysterious gift impacts the lives of the guards overseeing him.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg",
  },
  {
    title: "The Shining",
    genre: "Drama, Horror",
    year: 1980,
    rating: {
      imdb: "8.4/10",
      rottenTomatoes: "93%",
      metacritic: "66/100",
    },
    description:
      "A family heads to an isolated hotel where an evil presence drives the father to violence while his son sees horrifying visions.",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nRj5511mZdTl4saWEPoj9QroTIu.jpg",
  },
  {
    title: "The Dark Knight Rises",
    genre: "Action, Adventure, Thriller",
    year: 2012,
    rating: {
      imdb: "8.4/10",
      rottenTomatoes: "87%",
      metacritic: "78/100",
    },
    description:
      "Eight years after Batman took the fall for Harvey Dent's crimes, a new terrorist leader overwhelms Gotham's defenses.",
    image: "https://image.tmdb.org/t/p/w500/vzvKcPQ4o7TjWeGIn0aGC9FeVNu.jpg",
  },
  {
    title: "A Clockwork Orange",
    genre: "Crime, Drama, Sci-Fi",
    year: 1971,
    rating: {
      imdb: "8.3/10",
      rottenTomatoes: "88%",
      metacritic: "77/100",
    },
    description:
      "In a dystopian future, a violent gang leader undergoes aversion therapy to reform but faces unforeseen consequences.",
    image: "https://image.tmdb.org/t/p/w500/4sHeTAp65WrSSuc05nRBKddhBxO.jpg",
  },
  {
    title: "Fight Club",
    genre: "Drama",
    year: 1999,
    rating: {
      imdb: "8.8/10",
      rottenTomatoes: "79%",
      metacritic: "66/100",
    },
    description:
      "An insomniac office worker and a devil-may-care soap maker form an underground fight club that spirals out of control.",
    image: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
  },
  {
    title: "One Flew Over the Cuckoo's Nest",
    genre: "Drama",
    year: 1975,
    rating: {
      imdb: "8.7/10",
      rottenTomatoes: "93%",
      metacritic: "84/100",
    },
    description:
      "A criminal fakes insanity to serve his sentence in a mental institution, where he rebels against a tyrannical nurse.",
    image: "https://image.tmdb.org/t/p/w500/3jcbDmRFiQ83drXNOvRDeKHxS0C.jpg",
  },
  {
    title: "The Good, the Bad and the Ugly",
    genre: "Western",
    year: 1966,
    rating: {
      imdb: "8.8/10",
      rottenTomatoes: "97%",
      metacritic: "90/100",
    },
    description:
      "In the American Civil War, three gunmen vie to find buried gold in a dangerous and treacherous journey.",
    image: "https://image.tmdb.org/t/p/w500/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
  },
  {
    title: "The Great Dictator",
    genre: "Comedy, Drama",
    year: 1940,
    rating: {
      imdb: "8.4/10",
      rottenTomatoes: "92%",
      metacritic: "90/100",
    },
    description:
      "Charlie Chaplin satirizes fascism in this tale of a Jewish barber who is mistaken for a tyrannical dictator.",
    image: "https://image.tmdb.org/t/p/w500/1QpO9wo7JWecZ4NiBuu625FiY1j.jpg",
  },
  {
    title: "Vertigo",
    genre: "Drama, Mystery, Thriller",
    year: 1958,
    rating: {
      imdb: "8.3/10",
      rottenTomatoes: "94%",
      metacritic: "100/100",
    },
    description:
      "A former police detective with a fear of heights is hired to follow a woman, who may be not who she seems.",
    image: "https://image.tmdb.org/t/p/w500/9OfnB7gTgCABdmdPohv5TWevQgS.jpg",
  },
  {
    title: "The Seventh Seal",
    genre: "Drama, Fantasy",
    year: 1957,
    rating: {
      imdb: "8.1/10",
      rottenTomatoes: "93%",
      metacritic: "88/100",
    },
    description:
      "A knight returns from the Crusades to find plague sweeping the land and plays a fateful game of chess with Death.",
    image: "https://image.tmdb.org/t/p/w500/jAqY8zjA77AmPBP5dZZCkJm7ykc.jpg",
  },
  {
    title: "The Lives of Others",
    genre: "Drama, Thriller",
    year: 2006,
    rating: {
      imdb: "8.4/10",
      rottenTomatoes: "92%",
      metacritic: "89/100",
    },
    description:
      "In 1984 East Berlin, a secret police officer becomes entangled in the lives of a playwright and his lover.",
    image: "https://image.tmdb.org/t/p/w500/c3Bu2DEUtdGA2v2ZnZ3lLuGL5n0.jpg",
  },
  {
    title: "Memento",
    genre: "Mystery, Thriller",
    year: 2000,
    rating: {
      imdb: "8.4/10",
      rottenTomatoes: "93%",
      metacritic: "80/100",
    },
    description:
      "A man with short-term memory loss uses notes and tattoos to hunt for the man he thinks killed his wife.",
    image: "https://image.tmdb.org/t/p/w500/fQMSaP88cf1nz4qwuNEEFtazuDM.jpg",
  },
  // {
  //   title: "American History X",
  //   genre: "Drama",
  //   year: 1998,
  //   rating: 8.5,
  //   description:
  //     "A reformed neo-Nazi tries to prevent his younger brother from going down the same path of hate and violence.",
  //   image: "https://image.tmdb.org/t/p/w500/2LZndb4k4S5gQMF6hwlcl8pRI7l.jpg",
  // },
  // {
  //   title: "Saving Private Ryan",
  //   genre: "Drama, War",
  //   year: 1998,
  //   rating: 8.6,
  //   description:
  //     "After D-Day, a group of soldiers search for a paratrooper whose brothers have been killed in action.",
  //   image: "https://image.tmdb.org/t/p/w500/miDoEMlYDJhOCvxlzI0wZqBs9Yt.jpg",
  // },
  // {
  //   title: "Parasite",
  //   genre: "Comedy, Drama, Thriller",
  //   year: 2019,
  //   rating: 8.6,
  //   description:
  //     "A poor family schemes to become employed by a wealthy family, only for their deception to spiral out of control.",
  //   image: "https://image.tmdb.org/t/p/w500/7IiTTtMLt6iZ3F26t2FqkU0CZ5R.jpg",
  // },
  // {
  //   title: "Léon: The Professional",
  //   genre: "Crime, Drama, Thriller",
  //   year: 1994,
  //   rating: 8.5,
  //   description:
  //     "A professional assassin reluctantly mentors a young girl seeking revenge for her family's murder.",
  //   image: "https://image.tmdb.org/t/p/w500/fi9vCCM4odtGQ9lSz9Ppqg61SFM.jpg",
  // },
  // {
  //   title: "Interstellar",
  //   genre: "Adventure, Drama, Sci-Fi",
  //   year: 2014,
  //   rating: 8.6,
  //   description:
  //     "A group of explorers travel through a wormhole in search of a new habitable planet for humanity's survival.",
  //   image: "https://image.tmdb.org/t/p/w500/riL2wFu3WqCeX0ptB0xv7v9yfpT.jpg",
  // },
  // {
  //   title: "The Pianist",
  //   genre: "Biography, Drama, Music",
  //   year: 2002,
  //   rating: 8.5,
  //   description:
  //     "A Jewish pianist struggles to survive amid the devastation of World War II and the Nazi occupation of Warsaw.",
  //   image: "https://image.tmdb.org/t/p/w500/y7qQmZ1MtcPLRJklxIuJlWb5Sev.jpg",
  // },
  // {
  //   title: "City of God",
  //   genre: "Crime, Drama",
  //   year: 2002,
  //   rating: 8.6,
  //   description:
  //     "In the slums of Rio, two boys take divergent paths amidst drug wars and gang violence in the City of God.",
  //   image: "https://image.tmdb.org/t/p/w500/d4tn4vvhhXjj9D0xUszqvsmOdht.jpg",
  // },
  // {
  //   title: "The Intouchables",
  //   genre: "Biography, Comedy, Drama",
  //   year: 2011,
  //   rating: 8.5,
  //   description:
  //     "An aristocrat with a disability hires an unrefined caretaker, and the two develop a life-changing friendship.",
  //   image: "https://image.tmdb.org/t/p/w500/xeVLVWV0VJhMt1g2hd7G0FhvlvP.jpg",
  // },
  // {
  //   title: "Spirited Away",
  //   genre: "Animation, Adventure, Family",
  //   year: 2001,
  //   rating: 8.6,
  //   description:
  //     "A young girl is trapped in a magical world and must find the courage to free herself and her family.",
  //   image: "https://image.tmdb.org/t/p/w500/uhD20VbHpkDF5Jz5jmrXBRk7rI6.jpg",
  // },
  // {
  //   title: "The Green Book",
  //   genre: "Biography, Comedy, Drama",
  //   year: 2018,
  //   rating: 8.2,
  //   description:
  //     "A bouncer drives a black pianist on a concert tour through the 1960s Deep South, forming an unlikely friendship.",
  //   image: "https://image.tmdb.org/t/p/w500/o8xy8ck7FuCrCx5MlqgTSzxseUN.jpg",
  // },
  // {
  //   title: "The Wolf of Wall Street",
  //   genre: "Biography, Crime, Drama",
  //   year: 2013,
  //   rating: 8.2,
  //   description:
  //     "The rise and fall of a stockbroker involved in Wall Street excess, corruption, and scandal.",
  //   image: "https://image.tmdb.org/t/p/w500/uykfaXM9JCBsWfxqk7HqglVwzBZ.jpg",
  // },
  // {
  //   title: "Django Unchained",
  //   genre: "Drama, Western",
  //   year: 2012,
  //   rating: 8.4,
  //   description:
  //     "A freed slave sets out to rescue his wife from a brutal plantation owner with the help of a German bounty hunter.",
  //   image: "https://image.tmdb.org/t/p/w500/sYJrZ59wWrhsHKtENHf1QgnlsH8.jpg",
  // },
  // {
  //   title: "WALL·E",
  //   genre: "Animation, Adventure, Family",
  //   year: 2008,
  //   rating: 8.4,
  //   description:
  //     "A waste-collecting robot on a future, deserted Earth embarks on a space journey that will change humanity's fate.",
  //   image: "https://image.tmdb.org/t/p/w500/iX1tYJMEdbjyxzgh3wvv7wY9vXs.jpg",
  // },
  // {
  //   title: "The Truman Show",
  //   genre: "Comedy, Drama",
  //   year: 1998,
  //   rating: 8.2,
  //   description:
  //     "An unknowing man discovers his entire life is a reality TV show, leading him to question everything he knows.",
  //   image: "https://image.tmdb.org/t/p/w500/uyK4yM1KrG7QyZIMvhZfBoI5QQz.jpg",
  // },
  // {
  //   title: "V for Vendetta",
  //   genre: "Action, Drama, Sci-Fi",
  //   year: 2005,
  //   rating: 8.2,
  //   description:
  //     "In a dystopian future, a masked vigilante ignites a revolution against a totalitarian regime in England.",
  //   image: "https://image.tmdb.org/t/p/w500/vFwRtnpA7eGJ1VYMzZzjX3iIuPM.jpg",
  // },
  // {
  //   title: "Amélie",
  //   genre: "Comedy, Romance",
  //   year: 2001,
  //   rating: 8.3,
  //   description:
  //     "A whimsical waitress helps people find happiness in Paris, but has trouble finding love for herself.",
  //   image: "https://image.tmdb.org/t/p/w500/8x0n7ewKyTz06AeXPX7LKTijz45.jpg",
  // },
  // {
  //   title: "The Grand Budapest Hotel",
  //   genre: "Adventure, Comedy, Crime",
  //   year: 2014,
  //   rating: 8.1,
  //   description:
  //     "A concierge and a lobby boy become entangled in the theft of a valuable painting and a family's inheritance battle.",
  //   image: "https://image.tmdb.org/t/p/w500/sA4Z7YqVuZmoS8sHRwY30tuHf60.jpg",
  // },
  // {
  //   title: "Braveheart",
  //   genre: "Biography, Drama, History",
  //   year: 1995,
  //   rating: 8.3,
  //   description:
  //     "In 13th-century Scotland, William Wallace leads a rebellion against English tyranny after a personal tragedy.",
  //   image: "https://image.tmdb.org/t/p/w500/jfa9d2UGQ0AV3p8GhVh6sNAnpdp.jpg",
  // },
  // {
  //   title: "Requiem for a Dream",
  //   genre: "Drama",
  //   year: 2000,
  //   rating: 8.3,
  //   description:
  //     "The haunting tale of four individuals' descent into addiction and the devastating impact on their lives.",
  //   image: "https://image.tmdb.org/t/p/w500/lIFvZ1T1gMXtWakqIxdn0WkD5js.jpg",
  // },
  // {
  //   title: "Blade Runner 2049",
  //   genre: "Action, Drama, Sci-Fi",
  //   year: 2017,
  //   rating: 8.0,
  //   description:
  //     "A new blade runner unearths a long-hidden secret that could unravel society's future, leading him to Rick Deckard.",
  //   image: "https://image.tmdb.org/t/p/w500/pV2hplLx1usmZ1og8gLXxkaogL.jpg",
  // },
  // {
  //   title: "Oldboy",
  //   genre: "Action, Drama, Mystery",
  //   year: 2003,
  //   rating: 8.4,
  //   description:
  //     "A man imprisoned for 15 years without explanation seeks revenge upon his mysterious release.",
  //   image: "https://image.tmdb.org/t/p/w500/g8uL30UuROq6OQnloXBj2qceH6v.jpg",
  // },
  // {
  //   title: "Pan's Labyrinth",
  //   genre: "Drama, Fantasy, War",
  //   year: 2006,
  //   rating: 8.2,
  //   description:
  //     "In post-Civil War Spain, a young girl discovers a fantastical labyrinth while her cruel stepfather fights insurgents.",
  //   image: "https://image.tmdb.org/t/p/w500/p5uONu5h1oErDhr5xX6iQ9VLP7g.jpg",
  // },
  // {
  //   title: "The Hunt",
  //   genre: "Drama",
  //   year: 2012,
  //   rating: 8.3,
  //   description:
  //     "A man's life unravels after a child falsely accuses him of sexual abuse, igniting a witch hunt in their village.",
  //   image: "https://image.tmdb.org/t/p/w500/2M0Jzi9aQvMnGGzLrszEX54QQUh.jpg",
  // },
  // {
  //   title: "Logan",
  //   genre: "Action, Drama, Sci-Fi",
  //   year: 2017,
  //   rating: 8.1,
  //   description:
  //     "In a dystopian future, a weary Wolverine cares for ailing Professor X, but is drawn into a young mutant's plight.",
  //   image: "https://image.tmdb.org/t/p/w500/rwLghp66bUw0C5aDDkwpg9nrmF7.jpg",
  // },
  // {
  //   title: "Shutter Island",
  //   genre: "Mystery, Thriller",
  //   year: 2010,
  //   rating: 8.2,
  //   description:
  //     "Two U.S. marshals investigate a missing patient's case on a remote mental institution island with dark secrets.",
  //   image: "https://image.tmdb.org/t/p/w500/sgzAkN3t9Vez8qvV4g2vTGGK0zz.jpg",
  // },
  // {
  //   title: "The Sixth Sense",
  //   genre: "Drama, Mystery, Thriller",
  //   year: 1999,
  //   rating: 8.1,
  //   description:
  //     "A troubled child psychologist attempts to help a young boy who claims he can see and communicate with the dead.",
  //   image: "https://image.tmdb.org/t/p/w500/zHUp8HZ8Roa1jfDTMzdtJmHDwJz.jpg",
  // },
  // {
  //   title: "Prisoners",
  //   genre: "Crime, Drama, Mystery",
  //   year: 2013,
  //   rating: 8.1,
  //   description:
  //     "After his daughter goes missing, a father takes matters into his own hands, spiraling into moral ambiguity.",
  //   image: "https://image.tmdb.org/t/p/w500/9KCV7weN0bTrp52tkV6T1jUq8Qu.jpg",
  // },
  // {
  //   title: "Gone Girl",
  //   genre: "Drama, Mystery, Thriller",
  //   year: 2014,
  //   rating: 8.1,
  //   description:
  //     "A man becomes the prime suspect in his wife's disappearance, which hides darker secrets than anyone imagined.",
  //   image: "https://image.tmdb.org/t/p/w500/pw8xLe2ImJ7E4nObLTaJePuwgHJ.jpg",
  // },
];

async function main() {
  // Insert each movie from the list into the database
  for (const movie of topImdbMovies) {
    await prisma.movie.create({
      data: {
        title: movie.title,
        genre: movie.genre,
        year: movie.year,
        rating: movie.rating,
        description: movie.description,
        image: movie.image,
      },
    });
  }

  console.log(
    `Successfully added ${topImdbMovies.length} movies to the database.`
  );
}

main()
  .catch((e: Error) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
