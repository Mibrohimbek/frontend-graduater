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
        <>
          <h3 className="text-center mt-5 display-3 fw-bold">Developers</h3>
          <h5 className="text-center mt-3 mb-4">
            Browse and connect with developers
          </h5>
          {profiles.map((profile, index) => (
            <div
              style={{ backgroundColor: "#f4f4f4" }}
              key={index}
              className="d-flex border align-items-center mb-4 rounded-3 p-3"
            >
              <div className="col-3 d-flex">
                <img
                  className="w-75 h-75 rounded-circle ms-auto me-auto"
                  src={profile?.user?.avatar}
                  alt=""
                />
              </div>
              <div className="p-4 col-7">
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
              <div className="col-2">
                {profile.skills.map((skill, indeks) => (
                  <p style={{ color: "rgb(23, 162, 184)" }} key={indeks}>
                    &#x2713;{skill}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Profiles;
