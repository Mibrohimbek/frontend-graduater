import React from "react";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-dark bg-dark fixed-top">
          <div className="container-fluid px-5">
            <div className="left">
              <Link className="text-decoration-none logo text-light" to="/">
                &lt;/&gt;DevRahimov
              </Link>
            </div>
            <div className="right d-none d-md-block">
              <ul className="list-unstyled d-flex gap-5 m-0">
                <li>
                  <Link
                    className="text-decoration-none nav-item text-light"
                    to="/profiles"
                  >
                    Developers
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none nav-item text-light "
                    to="/register"
                  >
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none nav-item text-light "
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>
            <button
              className="navbar-toggler d-block d-md-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end text-bg-dark"
              tabIndex="-1"
              id="offcanvasDarkNavbar"
              aria-labelledby="offcanvasDarkNavbarLabel"
            >
              <div className="offcanvas-header">
                <Link
                  className="text-decoration-none offcanvas-title display-6 fw-normal logo text-light"
                  to="/"
                >
                  &lt;/&gt;DevRahimov
                </Link>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 gap-3 pe-3">
                  <li className="nav-item ms-3" style={{ fontSize: "20px" }}>
                    <Link
                      className="text-decoration-none nav-item text-light"
                      to="/profiles"
                    >
                      Developers
                    </Link>
                  </li>
                  <li className="nav-item ms-3" style={{ fontSize: "20px" }}>
                    <Link
                      className="text-decoration-none nav-item text-light "
                      to="/register"
                    >
                      Register
                    </Link>
                  </li>
                  <li className="nav-item ms-3" style={{ fontSize: "20px" }}>
                    <Link
                      className="text-decoration-none nav-item text-light "
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
