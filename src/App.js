import "./index.css";
import NavBar from "./component/NavBar";
import MoviesLists from "./component/MoviesLists";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDes from "./component/MovieDes";

function App() {
  const [movies, setMovies] = useState([]);
  const [maxpage, setMaxpage] = useState();

  //gett all movies by axios
  const GetAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=b4fa2e079f2d27a5847bc6c52dcd969c&language=en-US"
    );
    setMovies(res.data.results);
    setMaxpage(res.data.total_pages);
  };

  // to run api
  useEffect(() => {
    GetAllMovies();
  }, []);

  // to search in api
  const sreach = async (film) => {
    if (film === "") {
      GetAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=b4fa2e079f2d27a5847bc6c52dcd969c&language=en-US&page=1&include_adult=false&query=${film}`
      );
      setMovies(res.data.results);
      setMaxpage(res.data.total_pages);
    }
  };

  const getPageMovie = async (page) => {
    let res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=b4fa2e079f2d27a5847bc6c52dcd969c&language=en-US&page=${page}`
    );
    setMovies(res.data.results);
    console.log(page);
  };

  return (
    <div className="font color-body">
      <NavBar sreach={sreach} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/"  element={<MoviesLists maxpage={maxpage} getPageMovie={getPageMovie} movies={movies} />}/>
            <Route path="/movie/:id"  element={  <MovieDes />}/>
            
          
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
