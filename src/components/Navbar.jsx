import React from "react";
import Home from "../icon-move/home.png";
import Favorite from "../icon-move/heart.png";
import New from "../icon-move/video.png";
import Up from "../icon-move/calendar.png";
import Pop from "../icon-move/hot-deal.png";
import find from "../icon-move/search-interface-symbol.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex flex-col box-border justify-center bg-[#30AC43] w-[100%] h-[60px] fixed left-0  bottom-0 md:w-[60px] md:h-[100%]">
      <ul className="flex justify-between  md:overflow-auto md:overscroll-y-contain md:flex-col md:h-[100%] ">
        <li>
          <NavLink to="/">
            <img src={Home} alt="" className=" " />
          </NavLink>
        </li>
        <li>
          <NavLink to="/Popular">
            <img src={Pop} alt="" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/search">
            <img src={find} alt="" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/NewMovie">
            <img src={New} alt="" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/Upcomming">
            <img src={Up} alt="" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/FavoriteList">
            <img src={Favorite} alt="" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
