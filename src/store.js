import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

let initalState = {
  PopularMovies: [],
  movieUpcooming: [],
};
// const PopularUrl = "https://api.themoviedb.org/3/movie/popular";
const ApiKey = "36e100c0555b58b480307c0b7e44b97b";
export function getMovies() {
  return function (dispatch) {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "movie/get", payload: data });
        // console.log(data.results);
      });
  };
}

export function movieReducer(state = initalState, action) {
  // console.log("store state", state);
  switch (action.type) {
    case "movie/get":
      return { ...state, PopularMovies: action.payload };
    case "movie/upcomming":
      return { ...state, movieUpcooming: action.payload };
    default:
      break;
  }
  return state;
}

export function getMovieUpcooming() {
  return function (dispatch) {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${ApiKey}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "movie/upcomming", payload: data.results });
        // console.log(data.results);
      });
  };
}
const store = createStore(movieReducer, applyMiddleware(thunk));

export default store;
// fetch for popular
//------------------------------------------------------------------------
