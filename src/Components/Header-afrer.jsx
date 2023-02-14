import React from "react";
import { Link, Outlet } from "react-router-dom";

const Header_after = () => {
  return (
    <div>
      <header>
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
                  className="text-decoration-none text-light"
                  to="/profiles"
                >
                  Developers
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none text-light" to="/posts">
                  Posts
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none text-light "
                  to="/register"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none text-light " to="/login">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Header_after;
