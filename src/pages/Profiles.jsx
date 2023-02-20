import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Profiles = () => {
  let [profiles, setProfiles] = useState([]);

  async function getProfils() {
    try {
      let { data } = await axios.get("/profile");
      setProfiles(data);
    } catch (error) {
      console.log(error);
    }
  }

  getProfils();

  return (
    <div className="container">
      {profiles.length === 0 ? (
        <div className="d-flex">
          <div className="loader ms-auto me-auto"></div>
        </div>
      ) : (
        <div id="developers">
          <h3 className="text-center mt-5 display-3 fw-bold">Developers</h3>
          <h5 className="text-center mt-3 mb-4">
            Browse and connect with developers
          </h5>
          {profiles.map((profile, index) => (
            <div
              style={{ backgroundColor: "#f4f4f4" }}
              key={index}
              className="d-flex border developer align-items-center mb-4 rounded-3 p-3"
            >
              <div className="d-flex">
                <img
                  className="dev-avatar w-75 h-75 rounded-circle ms-auto me-auto"
                  src={profile?.user?.avatar}
                  alt=""
                />
              </div>
              <div className="p-4 col-12 col-md-7">
                <h4 className="text-capitalize mb-2 ">{profile?.user?.name}</h4>
                <p style={{ fontSize: "20px" }} className="mb-5">
                  {profile.status}
                </p>
                <Link
                  to={`/profiles/user/${profile.user._id}`}
                  className="text-decoration-none text-light vp-btn"
                >
                  View Profile
                </Link>
              </div>
              <div className="col-12 col-md-2 d-flex d-md-block skills">
                {profile.skills.map((skill, indeks) => (
                  <p style={{ color: "rgb(23, 162, 184)", wordWrap:'break-word'}} key={indeks}>
                    &#x2713;{skill}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Profiles;
