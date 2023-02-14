import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section id="home" style={{ backgroundColor: "black" }}>
        <div className="container">
          <div className="text-center">
            <h2 className="text-light display-3 fw-bold">Developer Rahimov</h2>
            <h5 className="text-light mt-4 mb-4">
              Create a developer profile/portfolio, share posts and get help
              from other developers
            </h5>
            <Link
              to="/register"
              className="bg-info d-inline-block mt-2 text-light text-decoration-none px-4 py-2 me-2"
            >
              Sign up
            </Link>
            <Link
              to="/login"
              className="bg-light text-decoration-none text-dark px-4 py-2"
            >
              Login
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
