import { useEffect } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import { useDispatch } from "react-redux";
import { getMovies } from "./store";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
  }, []);
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
