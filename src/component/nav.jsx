import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./nav.css"; // custom styles
// Image
import Log from "./images/chick-logo.png";
import Gp from './images/gps.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-2">
      <div className="container-fluid">

        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={Log} // replace with your logo path
            alt="Logo"
            height="40"
            className="me-2"
          />
        </a>

        {/*<a className="bow"><img src={Gp} alt="gps" className="img-fluid"/></a>*/}
        <a href="#" className="nav-link text-danger fw-semibold me-4 d-flex align-items-center">
          <i className="bi bi-geo-alt me-1"></i><img src={Gp} alt="gps" className="img-fluid" Style="margin-left:-10px; height: 20px; width: auto; margin-top: 0px; margin-right:2px;"/> Find a restaurant
        </a>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-danger fw-semibold" href="#">Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-danger fw-semibold" href="#">Stories</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-danger fw-semibold" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-danger fw-semibold" href="#">Careers</a>
            </li>
          </ul>


          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-outline-danger rounded-pill px-4 fw-semibold">
              Sign In
            </button>
            <button className="btn btn-danger rounded-pill px-4 fw-semibold">
              Order now
            </button>
            <a href="#" className="text-danger fs-5">
              <i className="bi bi-search"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
