import React from "react";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (  

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" href="#">AXOLOTL</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    <li class="nav-item">
              <Link
              to="/search"
              className={
                window.location.pathname === "/Search" || window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Search
            </Link>
      </li>
    </ul>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
      <Link
              to="/login"
              className={
                window.location.pathname === "/login" || window.location.pathname === "/"
                  ? "nav-link"
                  : "nav-link"
              }
            >
              Login
            </Link>
      </li>
      <li class="nav-item">
              <Link
              to="/signup"
              className={
                window.location.pathname === "/login" || window.location.pathname === "/"
                  ? "nav-link"
                  : "nav-link"
              }
            >
              Sign Up
            </Link>
      </li>

    </ul>
  </div>
</nav>

  );
}

export default Navbar;
