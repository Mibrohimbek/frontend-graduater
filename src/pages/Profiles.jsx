import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Profiles = () => {
  let [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch(`https://nt-devconnector.onrender.com/api/profile`)
      .then((res) => res.json())
      .then((data) => setProfiles(data));
  }, []);

  return (
    <>
      <div className="container">
        <h3 className="text-center mt-5 display-3 fw-bold">Developers</h3>
        <h5 className="text-center mt-3 mb-4">Browse and connect with developers</h5>
        {profiles.length === 0 ? (
          <div className="d-flex">
            <div
              className="loader ms-auto me-auto"
              style={{ marginTop: "150px" }}
            ></div>
          </div>
        ) : (
          profiles.map((profile, index) => (
            <div
              style={{ backgroundColor: "#f4f4f4" }}
              key={index}
              className="d-flex border align-items-center mb-4 rounded-3 p-3"
            >
              <div className="col-3">
                <img className="w-100 h-100" src="./User.svg.png" alt="" />
              </div>
              <div className="p-4 col-7">
                <h4 className="text-capitalize mb-2 ">{profile?.user?.name}</h4>
                <p style={{ fontSize: "20px" }} className="mb-5">
                  {profile.status}
                </p>
                <Link
                  to={`/${profile._id}`}
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
          ))
        )}
      </div>
    </>
  );
};

export default Profiles;
