import React from "react";
import { useSelector } from "react-redux";

function Upcomming() {
  const upcommingMovies = useSelector((state) => state.movieUpcooming);
  return (
    <div>
      <div>
        <h1 className="text-[#30AC43] w-44 h-28  flex justify-end items-center md:ml-12  md:text-3xl md:h-44 md:w-[400px]">
          The Upcomming Movies
        </h1>
      </div>
      <div className="flex flex-wrap gap-5 justify-center md:ml-11">
        {upcommingMovies.map((Upcomming) => (
          <div className="">
            <img
              className="w-[150px] h-[250px] md:w-[250px] md:h-[350px]"
              src={`https://image.tmdb.org/t/p/w500${Upcomming.poster_path}`}
              alt=""
            />
            <h6 className="text-white w-60 ">{Upcomming.title} </h6>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Upcomming;
