import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Header_after = () => {
  let navigate = useNavigate();

  function handleClick() {
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <div>
      {/* <header>
        <nav className="d-flex px-5 align-items-center justify-content-between">
          <div className="left">
            <Link
              className="text-decoration-none logo text-light"
              to="/dashboard"
            >
              &lt;/&gt;DevRahimov
            </Link>
          </div>
          <div className="right">
            <ul className="list-unstyled d-flex gap-4 m-0">
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
                  className="text-decoration-none nav-item text-light"
                  to="/posts"
                >
                  Posts
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none nav-item text-light "
                  to="/register"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <button
                  className="text-decoration-none logout-btn text-light bg-danger border-0"
                  to="/login"
                  onClick={handleClick}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header> */}
      <header>
        <nav className="navbar navbar-dark bg-dark fixed-top">
          <div className="container-fluid px-5">
            <div className="left">
              <Link className="text-decoration-none logo text-light" to="/">
                &lt;/&gt;DevRahimov
              </Link>
            </div>
            <div className="right d-none d-lg-block">
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
                    className="text-decoration-none nav-item text-light"
                    to="/posts"
                  >
                    Posts
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none nav-item text-light "
                    to="/register"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button
                    className="text-decoration-none logout-btn text-light bg-danger border-0"
                    to="/login"
                    onClick={handleClick}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
            <button
              className="navbar-toggler d-block d-lg-none"
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
                <ul className="navbar-nav ms-3 justify-content-end flex-grow-1 gap-3 pe-3">
                  <li className="nav-item" style={{ fontSize: "20px" }}>
                    <Link
                      className="text-decoration-none nav-item text-light"
                      to="/profiles"
                    >
                      Developers
                    </Link>
                  </li>
                  <li className="nav-item" style={{ fontSize: "20px" }}>
                    <Link
                      className="text-decoration-none nav-item text-light"
                      to="/posts"
                    >
                      Posts
                    </Link>
                  </li>
                  <li className="nav-item" style={{ fontSize: "20px" }}>
                    <Link
                      className="text-decoration-none nav-item text-light "
                      to="/register"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <button
                      className="text-decoration-none logout-btn text-light bg-danger px-4 py-2 border-0"
                      to="/login"
                      onClick={handleClick}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Header_after;
