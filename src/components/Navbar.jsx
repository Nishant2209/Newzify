import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-black navbar-dark">
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
                border: "1px solid white",
                borderRadius: "0.5rem",
              }}
            >
              <span
                className="navbar-toggler-icon"
                style={{
                  color: "white",
                }}
              ></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link mx-md-2 text-center"
                    href="/General"
                    style={{
                      color: "white",
                      border: "2px solid white",
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
                      color: "white",
                      border: "2px solid white",
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
                      color: "white",
                      border: "2px solid white",
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
                      color: "white",
                      border: "2px solid white",
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
                      color: "white",
                      border: "2px solid white",
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
                      color: "white",
                      border: "2px solid white",
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
                      color: "white",
                      border: "2px solid white",
                      borderRadius: "0.5rem",
                    }}
                  >
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
