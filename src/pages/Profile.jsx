import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`https://nt-devconnector.onrender.com/api/profile`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <>
      <div className="container">
        <h1>help</h1>
        <Link to="/profiles" className="text-decoration-none text-dark">
          Back to Profiles
        </Link>
        <p>{user.bio}</p>
      </div>
    </>
  );
};

export default Profile;
