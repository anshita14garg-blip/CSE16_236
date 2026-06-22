import { useState } from "react";
import "./App.css";

const tvShows = [
  {
    name: "Wednesday",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmPTC8bEC7PPkOOzGZ-luQHOhjN7_6zlewUvkUNsIN9UpZTZzPqH43tog&s=10",
    topImage: "https://m.media-amazon.com/images/M/MV5BY2E1NDI5OWEtODJmYi00Nzg2LWI4MjUtODFiMTU2YWViOTU3XkEyXkFqcGc@._V1_.jpg",
  },
  {
    name: "Money Heist",
    image: "https://i.cdn.newsbytesapp.com/images/l19220210802192421.jpeg",
    topImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx6APBk1DCoWCkFt5Tcb5sQopr7arubPOiq3Hz8ZfFWfhuOUL9IqoB98g&s=10",
  },
  {
    name: "Stranger Things",
    image: "https://cdn.arstechnica.net/wp-content/uploads/2026/01/strangerTOP.jpg",
    topImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSViUwnHJrHwaBOCKQTF-zlonqTfnL2sXYXpd6IljVHsbC_mUKcvq6nN8w&s=10",
  },
  {
    name: "Bridgerton",
    image: "https://ntvb.tmsimg.com/assets/p18974714_b_h10_as.jpg?w=1280&h=720",
    topImage: "https://m.media-amazon.com/images/M/MV5BNmY4MDAyNjgtZTBkYi00MTY5LWIwOTctZjY1MGQ0MDM5NTU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    name: "Friends",
    image: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/52dae4c7-2ab1-4bb9-ab1c-8100fd54e2f9/5406c807-d062-4484-a6ae-54aaf6806b03?host=wbd-images.prod-vod.h264.io&partner=beamcom&w=500",
    topImage: "https://m.media-amazon.com/images/M/MV5BOTU2YmM5ZjctOGVlMC00YTczLTljM2MtYjhlNGI5YWMyZjFkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
  name: "Ginny & Georgia",
  image: "https://ntvb.tmsimg.com/assets/p19369806_b_h8_af.jpg?w=960&h=540",
  topImage: "https://static.wikia.nocookie.net/riordanfans/images/8/86/Ginny_%26_Georgia_S2_Poster.jpg/revision/latest?cb=20230105063900",
},
{
  name: "Squid Game",
  image: "https://cdn.prod.website-files.com/6695547d26d9da9a04cfb486/6872e648c27c24c625d73a0d_Should%20My%20Kid%20Watch%20Squid%20Game.webp",
  topImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkFTEclBXDehzT6h8G8JeKXP1y2kw8RXjW8A&s",
},
];

const movieList = [
  {
    name: "Kalank",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmuYW71V7V6Bl7S5Inly-bPmA5Du3D3l2gOEKY-fHecK3T3uYk4d8XbDZp&s=10",
    topImage: "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Kalank_Poster.jpg/250px-Kalank_Poster.jpg",
  },
  {
    name: "Chhaava",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvgNMTSk1QE2bpIgcmhJtb7njZaavJwkmfn7CBX1ROgQ&s=10",
    topImage: "https://m.media-amazon.com/images/M/MV5BNjdhZjhhMmUtNDFmNi00NDQwLWJmMGYtNmNhNzAyODMzNDE4XkEyXkFqcGc@._V1_.jpg",
  },
  {
    name: "Mardaani 3",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSKOf6_LTnZFJ5EBhK1itWdfDGNKCX4llrp28-g8Mleg&s=10",
    topImage: "https://m.media-amazon.com/images/M/MV5BNWZjMzgxMjctZDMzYi00MmMxLThiZmMtZjk3ZDAxZjcwZDE3XkEyXkFqcGc@._V1_.jpg",
  },
  {
    name: "Bhoot Bangla",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYB8yELDT__fg3YTmF422Fn1e__skhQtU6iXwdn1BleaNZ3lDoVSBm5oM6&s=10",
    topImage: "https://m.media-amazon.com/images/M/MV5BN2Y3NjRhYmMtNWVjMy00ZmE1LWJkNGYtNDY3Y2I3NjkzOGE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    name: "Sultan",
    image: "https://www.yashrajfilms.com/images/default-source/news/sultan.jpg?sfvrsn=45cef6cc_4",
    topImage: "https://m.media-amazon.com/images/M/MV5BMmM4NzJjNTQtZGU0Mi00NmJhLTkxMWQtYThiYjA2YjlhMjRkXkEyXkFqcGc@._V1_.jpg",
  },
  {
  name: "Dhurandhar",
  image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/medium/dhurandhar-et00452447-1764571309.jpg",
  topImage: "https://m.media-amazon.com/images/M/MV5BMTA3MDQ3ODAtNjcyMi00ODQ3LWEyZDMtMjliMzM0MGU3N2ZhXkEyXkFqcGc@._V1_.jpg",
},
{
  name: "Pathaan",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw8nKyCz0giR3q8dhkK3D2kab3xT8vD6dQ1g&s",
  topImage: "https://upload.wikimedia.org/wikipedia/en/c/c3/Pathaan_film_poster.jpg",
},
];

const topTen = [
  tvShows[0],
  movieList[3],
  tvShows[2],
  movieList[0],
  movieList[1],
  tvShows[3],
  movieList[4],
  tvShows[5],
  movieList[5],
  movieList[6],
];

const allMovies = [...tvShows, ...movieList];

function MovieCard({ movie, openMovie }) {
  return (
    <button className="movie-card" onClick={() => openMovie(movie)}>
      <img src={movie.image} alt={movie.name} />
      <span>{movie.name}</span>
    </button>
  );
}

function MovieRow({ title, movies, openMovie, id }) {
  function slide(direction) {
    document.getElementById(id).scrollBy({
      left: direction * 600,
      behavior: "smooth",
    });
  }

  return (
    <section className="row">
      <h2>{title}</h2>

      <div className="row-wrap">
        <button className="slide left" onClick={() => slide(-1)}>❮</button>

        <div className="row-content" id={id}>
          {movies.map((movie) => (
            <MovieCard key={movie.name} movie={movie} openMovie={openMovie} />
          ))}
        </div>

        <button className="slide right" onClick={() => slide(1)}>❯</button>
      </div>
    </section>
  );
}

function TopTen({ openMovie }) {
  function slide(direction) {
    document.getElementById("top-ten-row").scrollBy({
      left: direction * 500,
      behavior: "smooth",
    });
  }

  return (
    <section className="row top-ten">
      <h2>Top 10 Movies in Netflix Today</h2>

      <div className="row-wrap">
        <button className="slide left" onClick={() => slide(-1)}>❮</button>

        <div className="row-content" id="top-ten-row">
          {topTen.map((movie, index) => (
            <button
              className="top-card"
              key={movie.name}
              onClick={() => openMovie(movie)}
            >
              <b>{index + 1}</b>
              <img src={movie.topImage} alt={movie.name} />
            </button>
          ))}
        </div>

        <button className="slide right" onClick={() => slide(1)}>❯</button>
      </div>
    </section>
  );
}

function App() {
  const [page, setPage] = useState("Home");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [myList, setMyList] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [profileOpen, setProfileOpen] = useState(false);

  const searchResults = allMovies.filter((movie) =>
    movie.name.toLowerCase().includes(search.toLowerCase())
  );

  const isAdded = selectedMovie
    ? myList.some((movie) => movie.name === selectedMovie.name)
    : false;

  function addToMyList() {
    if (!isAdded) setMyList([...myList, selectedMovie]);
  }

  function removeMovie(name) {
    setMyList(myList.filter((movie) => movie.name !== name));
  }

  function openPage(name) {
    setPage(name);
    setSearchOpen(false);
    setProfileOpen(false);
  }

  return (
    <>
      <nav>
        <h1>NETFLIX</h1>

        <div className="menu">
          {["Home", "TV Shows", "Movies", "My List"].map((item) => (
            <button
              key={item}
              className={page === item ? "active" : ""}
              onClick={() => openPage(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="nav-icons">
          <button className="icon-button" onClick={() => setSearchOpen(!searchOpen)}>⌕</button>
          <button className="icon-button" onClick={() => openPage("My List")}>♡</button>
          <button
            className="icon-button"
            onClick={() => {
              setProfileOpen(!profileOpen);
              setSearchOpen(false);
            }}
          >
            ☺
          </button>
        </div>

        {profileOpen && (
          <div className="profile-menu">
            <b>Student Profile</b>
            <button onClick={() => openPage("My List")}>My List</button>
            <button onClick={() => openPage("Home")}>Switch Profile</button>
          </div>
        )}
      </nav>

      {searchOpen && (
        <section className="search-box">
          <input
            autoFocus
            placeholder="Search movies or TV shows..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          {search && (
            <div className="search-results">
              {searchResults.length ? (
                searchResults.map((movie) => (
                  <button
                    key={movie.name}
                    onClick={() => {
                      setSelectedMovie(movie);
                      setSearchOpen(false);
                    }}
                  >
                    {movie.name}
                  </button>
                ))
              ) : (
                <p>No movie found.</p>
              )}
            </div>
          )}
        </section>
      )}

      {page === "Home" && (
        <main>
          <TopTen openMovie={setSelectedMovie} />
          <MovieRow title="New on Netflix" movies={tvShows} openMovie={setSelectedMovie} id="new-row" />
          <MovieRow title="Indian Movies" movies={movieList} openMovie={setSelectedMovie} id="indian-row" />
        </main>
      )}

      {page === "TV Shows" && (
        <main className="page-main">
          <MovieRow title="TV Shows" movies={tvShows} openMovie={setSelectedMovie} id="tv-row" />
        </main>
      )}

      {page === "Movies" && (
        <main className="page-main">
          <MovieRow title="Movies" movies={movieList} openMovie={setSelectedMovie} id="movie-row" />
        </main>
      )}

      {page === "My List" && (
        <main className="page-main">
          <h2>My List</h2>

          {myList.length === 0 ? (
            <p className="empty-list">Your list is empty. Add movies from their popup.</p>
          ) : (
            <div className="my-list">
              {myList.map((movie) => (
                <div className="my-list-item" key={movie.name}>
                  <MovieCard movie={movie} openMovie={setSelectedMovie} />
                  <button className="remove-button" onClick={() => removeMovie(movie.name)}>
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </main>
      )}

      {selectedMovie && (
        <div className="modal-bg" onClick={() => setSelectedMovie(null)}>
          <div className="modal" onClick={(event) => event.stopPropagation()}>
            <button className="close" onClick={() => setSelectedMovie(null)}>×</button>

            <div
              className="modal-image"
              style={{ backgroundImage: `url(${selectedMovie.image})` }}
            >
              <div className="modal-title">
                <h2>{selectedMovie.name}</h2>
                <button className="play-button">▶ Resume</button>
              </div>
            </div>

            <div className="modal-info">
              <p><b>98% Match</b> &nbsp; 2026 &nbsp; Netflix</p>
              <p>Watch {selectedMovie.name} now on Netflix.</p>

              {isAdded ? (
                <p className="added-message">✓ Added to My List</p>
              ) : (
                <button className="add-button" onClick={addToMyList}>
                  + Add to My List
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;