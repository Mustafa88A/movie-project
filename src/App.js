import { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { getMovies } from "./store";
import Contenar from "./components/Contenar";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
  }, []);
  return (
    <div>
      <Contenar />
    </div>
  );
}

export default App;
