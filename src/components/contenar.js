import FavoriteList from "./FavoriteList";
import HomePage from "./HomePage";
import Navbar from "./Navbar";
import NewMovie from "./NewMovie";
import Popular from "./Popular";
import Upcomming from "./Upcomming";
import { Routes, Route } from "react-router-dom";
import Search from "./Search";

function Contenar() {
  return (
    <div className="md:flex md:w-[100%]">
      <div className="md:flex-[4%]">
        <Navbar />
      </div>

      <div className="md:flex-[96%] ">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/FavoriteList" element={<FavoriteList />} />
          <Route path="/NewMovie" element={<NewMovie />} />
          <Route path="/Upcomming" element={<Upcomming />} />
          <Route path="/Popular" element={<Popular />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </div>
  );
}
export default Contenar;
