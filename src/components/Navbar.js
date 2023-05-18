import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/NavBar.css";




function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  


  

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
      {/* <img src="https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x300" className="img-fluid rounded" width="50px" alt="" /> */}
      <a href="/">
        <img src="https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x300" className="img-fluid rounded" width="50px" alt="" />
      </a>
         
      <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/Contact"> Contact </Link>
          <button onClick={toggleNavbar}>
          <ReorderIcon/>
          </button>
         
          
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/Contact"> Contact </Link>
        <button onClick={toggleNavbar}>
        <ReorderIcon />
        </button>
        <div className="navbar-signIn">
        <Link to="/Login" className="login-link">
        <span className="sign-in-text">Sign In</span>
        </Link>
        </div>
        <div className="navbar-signUp">
        <Link to="/Login">
        <span className="sign-up-text">Sign Up</span>
        </Link>
        </div>
      </div>
    
    </div>
    
  );
}

export default Navbar;