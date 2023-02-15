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
      </header>
      <Outlet />
    </div>
  );
};

export default Header_after;
