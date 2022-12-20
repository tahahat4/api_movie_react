import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardMovie = ({ move }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
      <Link to={`/movie/${move.id}`}>
        <div className="card">
          <img
            src={`https://image.tmdb.org/t/p/w500` + move.poster_path}
            className="card__image"
            alt="hu"
          />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p>Name File : {move.original_title}</p>
              <p>Release Date : {move.release_date}</p>
              <p>Vote Count : {move.vote_count} </p>
              <p>Vote Average : {move.vote_average} </p>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default CardMovie;
