import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

let initalState = {
  movies: [],
};
// const ApiUrl = "https://api.themoviedb.org/3/movie/popular";
// const ApiKey = "36e100c0555b58b480307c0b7e44b97b";
export function getMovies() {
  return async function (dispatch) {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=36e100c0555b58b480307c0b7e44b97b`
    );
    const data = await res.json();
    console.log(data.results);
    // .then((res) => {
    //   res.json();
    //   console.log(res);
    // })
    // .then((data) => {
    //   dispatch({ type: "movie/get", payload: data });
    // });
  };
}

export function movieReducer(state = initalState, action) {
  switch (action.type) {
    case "movie/get":
      return { ...state, movies: action.payload };
    default:
      break;
  }
  return state;
}

const store = createStore(movieReducer, applyMiddleware(thunk));

export default store;
