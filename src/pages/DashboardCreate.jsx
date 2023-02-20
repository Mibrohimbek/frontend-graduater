import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const DashboardCreate = () => {
  let [username, setName] = useState();

  async function getName() {
    try {
      let { data } = await axios.get("/auth");
      setName(data);
    } catch (error) {
      console.log(error);
    }
  }

  getName();

  return (
    <div id="dashboard-create" className="text-center">
      <h3 className="text-center display-2 fw-normal mt-5 mb-3">Dashboard</h3>
      <h5 className="text-center display-4"> Welcome {username?.name}</h5>
      <p className="text-center mt-4">
        You have not yet setup a profile, please add some info
      </p>
      <Link
        className="create-profile-btn text-decoration-none text-light px-4 py-3 mt-4 d-inline-block"
        to="/create-profile"
      >
        Create Profile
      </Link>
    </div>
  );
};

export default DashboardCreate;
