import React from "react";
import { Link } from "react-router-dom";
import Logo from "./assests/img/download.png"
import { useOnlineStatus } from "../utils/useOnlineStatus";
/*
If we want to export the Header component to other files without using default 
export then we have to put use export keyword before Component Function declaration
eg -> export const Header = () => {....}
*/

const Header = () => {

  const onlineStatus = useOnlineStatus();

  return (
    <nav className="flex justify-between bg-pink-100 m-2">
      <img
        className="logo w-20 h-15]"
        alt="logo"
        src={Logo}
      />
      <div className="header-menu flex items-center">
        <ul className="flex gap-4">
          <li>{onlineStatus ? "online" : "offline"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li>Cart</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
