import React from "react";

const Movie = ({ data }) => {
  return (
    <div className="rounded flex items-center flex-col">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`}
          className="rounded-lg"
        />
      </div>
      <div className="flex justify-center items-center">
        <span className="text-center self-center">{data.title}</span>
      </div>
    </div>
  );
};

export default Movie;
