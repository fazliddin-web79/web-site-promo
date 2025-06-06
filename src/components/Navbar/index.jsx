import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        PromoKod Sayt
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Bosh sahifa
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/categories">
              Kategoriyalar
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/companies">
              Kompaniyalar
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Kirish
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Ro'yxatdan o'tish
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
