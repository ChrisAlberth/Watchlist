import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { MovieContext } from "../context/MovieContext";

import noImage from "../utils/no-image-available.png";
import "../styles/Detail.css";

const Detail = () => {
  let { id } = useParams();
  const { showDetail, selectedMovie } = useContext(MovieContext);
  useEffect(() => {
    showDetail(id); 
  }, []);

  return (
    <div className="detail-container">
      <div className="poster">
        {selectedMovie.Poster === "N/A" ? (
          <img src={noImage} alt={selectedMovie.Title} />
        ) : (
          <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
        )}
      </div>
      <div className="detinfo">
        <div className="field">
          <div className="label">
            <p className="title label-p">{selectedMovie.Title}</p>
          </div>
        </div>
        <div className="field">
          <div className="label">
            <p className="label-p">{selectedMovie.Plot}</p>
          </div>
        </div>
        <div className="field">
          <div className="label">
            IMDB rating : <p className="label-p">{selectedMovie.imdbRating}</p>
          </div>
        </div>
        <div className="field">
          <div className="label">
            Director : <p className="label-p">{selectedMovie.Director}</p>
          </div>
        </div>
        <div className="field">
          <div className="label">
            Writer : <p className="label-p">{selectedMovie.Writer}</p>
          </div>
        </div>
        <div className="field">
          <div className="label">
          Actors : <p className="label-p">{selectedMovie.Actors}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
