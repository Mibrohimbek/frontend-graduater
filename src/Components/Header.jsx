import React from "react";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <nav className="d-flex align-items-center justify-content-between">
          <div className="left">
            <Link className="text-decoration-none logo text-light" to="/">
              &lt;/&gt;DevRahimov
            </Link>
          </div>
          <div className="right">
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
                <Link className="text-decoration-none nav-item text-light " to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
