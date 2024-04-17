import React from "react";
import { useSelector } from "react-redux";

function Popular() {
  const PopularMovies = useSelector((state) => state.PopularMovies.results);

  return (
    <>
      <div>
        <h1 className="text-[#30AC43] w-36 h-28  flex justify-end items-center md:ml-12  md:text-4xl md:h-44 md:w-80">
          The Movie Popular
        </h1>
      </div>
      <div className="flex flex-wrap gap-5 justify-center md:ml-11">
        {PopularMovies.map((movie) => (
          <div className="">
            <img
              className="w-[150px] h-[250px] md:w-[250px] md:h-[350px]"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=""
            />
            <h6 className="text-white w-60">{movie.title} </h6>
          </div>
        ))}
      </div>
    </>
  );
}
export default Popular;
