import axios from "axios";
import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import ENDPOINTS from "../utils/constants/endpoints";

const Movies = () => {
  const [loadData, setLoadData] = useState([]);

  const options = {
    method: "GET",
    url: `${ENDPOINTS.POPULAR}`,
  };

  const getDataMovie = async () => {
    axios
      .request(options)
      .then(function (response) {
        setLoadData(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    getDataMovie();
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center text-4xl font-bold mb-4">
        MOVIE
      </div>
      <div className="grid grid-cols-5 gap-4">
        {loadData.map((value) => {
          return <Movie key={value.id} data={value} />;
        })}
      </div>
    </div>
  );
};

export default Movies;
