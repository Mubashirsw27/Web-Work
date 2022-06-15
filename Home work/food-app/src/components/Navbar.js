import React from "react";
import MainLogo from "../images/MainLogo.png";

import "../App.css";
function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-black">
        <div class="flex">
          <img src={MainLogo} alt="" />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <button>Home</button>
              </li>
              <li class="nav-item">
                <button>Missions</button>
              </li>
              <li class="nav-item">
                <button>White Paper</button>
              </li>
              <li class="nav-item">
                <button>Team</button>
              </li>
              <li class="nav-item">
                <button>Partners</button>
              </li>
              <li class="nav-item">
                <button>Contact</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
