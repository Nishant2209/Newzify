import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <nav
        class={`navbar fixed-top navbar-expand-lg bg-${
          props.mode === "dark" ? "black" : "white "
        } navbar-${props.mode} text-${
          props.mode === "dark" ? "light" : "dark"
        }`}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/general"
            style={{ fontSize: "3rem" }}
          >
            Newzify
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{
              color: "white",
              border: `1px solid ${props.mode === "dark" ? "black" : "white"}`,
              borderRadius: "0.5rem",
            }}
          >
            <span
              className="navbar-toggler-icon"
              style={{
                color: `${props.mode === "dark" ? "black" : "white"}`,
              }}
            ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link mx-md-2 text-center"
                  href="/General"
                  style={{
                    color: `${props.mode === "dark"? "white": "black"}`,
                    border: `2px solid ${props.mode === "dark"? "white": "black"}`,
                    borderRadius: "0.5rem",
                  }}
                >
                  General
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link mx-md-2 text-center"
                  href="/Business"
                  style={{
                    color: `${props.mode === "dark"? "white": "black"}`,
                    border: `2px solid ${props.mode === "dark"? "white": "black"}`,
                    borderRadius: "0.5rem",
                  }}
                >
                  Business
                </a>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mx-md-2 text-center"
                  to="/Entertainment"
                  style={{
                    color: `${props.mode === "dark"? "white": "black"}`,
                    border: `2px solid ${props.mode === "dark"? "white": "black"}`,
                    borderRadius: "0.5rem",
                  }}
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mx-md-2 text-center"
                  to="/Health"
                  style={{
                    color: `${props.mode === "dark"? "white": "black"}`,
                    border: `2px solid ${props.mode === "dark"? "white": "black"}`,
                    borderRadius: "0.5rem",
                  }}
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mx-md-2 text-center"
                  to="/Science"
                  style={{
                    color: `${props.mode === "dark"? "white": "black"}`,
                    border: `2px solid ${props.mode === "dark"? "white": "black"}`,
                    borderRadius: "0.5rem",
                  }}
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mx-md-2 text-center"
                  to="/Sports"
                  style={{
                    color: `${props.mode === "dark"? "white": "black"}`,
                    border: `2px solid ${props.mode === "dark"? "white": "black"}`,
                    borderRadius: "0.5rem",
                  }}
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mx-md-2 text-center"
                  to="/Technology"
                  style={{
                    color: `${props.mode === "dark"? "white": "black"}`,
                    border: `2px solid ${props.mode === "dark"? "white": "black"}`,
                    borderRadius: "0.5rem",
                  }}
                >
                  Technology
                </Link>
              </li>
            </ul>
          </div>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label class="form-check-label" for="flexSwitchCheckDefault">
              Dark Mode
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
