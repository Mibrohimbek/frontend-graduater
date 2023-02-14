import React from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

const DashboardCreate = () => {
  return (
    <div className="dashboard-create text-center">
      <Header />
      <h3 className="text-center display-2 fw-normal mt-5 mb-3">Dashboard</h3>
      <h5 className="text-center display-4"> Welcome ibrohim</h5>
      <p className="text-center mt-4">
        You have not yet setup a profile, please add some info
      </p>
      <Link
        className="create-profil-btn text-decoration-none text-light px-4 py-3 mt-4 d-inline-block"
        to="/create-profile"
      >
        Create Profile
      </Link>
    </div>
  );
};

export default DashboardCreate;
