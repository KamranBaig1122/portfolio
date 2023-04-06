import React from "react";
//import Logo from "!file-loader!../assets/logo1.svg";
import Logo from "../assets/logo2.png";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img src={Logo} alt="" className="object-none" />
          </a>
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
