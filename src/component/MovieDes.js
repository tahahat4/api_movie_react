import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link , useParams } from "react-router-dom";
import axios from "axios";
import { useState , useEffect } from "react";

function MovieDes() {
  // get all param in url
  const parma = useParams() ;




  const [moviee , setMoviee] = useState([]) ;

  // get movie details with id in param 
  const getMovie = async () => {
    let res = await axios.get(`https://api.themoviedb.org/3/movie/${parma.id}?api_key=b4fa2e079f2d27a5847bc6c52dcd969c&language=en-US`)
    setMoviee(res.data)
  }


  useEffect(() => {
    getMovie()
  }, []);




  return (
    <div>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-4 ">
          <div className="card-detalis  d-flex align-items-center ">
            <img className="img-movie w-30" src={`https://image.tmdb.org/t/p/w500/${moviee.poster_path}`} alt="ascad" />
            <div className="justify-content-center text-center  mx-auto">
              <p className="card-text-details border-bottom">name Film : {moviee.title}</p>
              <p className="card-text-details border-bottom">Release Date : {moviee.release_date} </p>
              <p className="card-text-details border-bottom">Vote Count : {moviee.vote_count} </p>
              <p className="card-text-details border-bottom">Vote Average : {moviee.vote_average} </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-1 ">
          <div className="card-story  d-flex flex-column align-items-start">
            <div className="text-end p-4 ">
              <p className="card-text-title border-bottom">story:</p>
            </div>
            <div className="text-end px-2">
              <p className="card-text-story">{moviee.overview}</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col
          md="10"
          xs="12"
          sm="12"
          className="mt-2 d-flex justify-content-center "
        >
          <Link to={"/"}>
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary mx-2"
            >
              Home Page
            </button>
          </Link>

          <a href={moviee.homepage} target="_blanck">
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary"
            >
              watching the movie
            </button>
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default MovieDes;
