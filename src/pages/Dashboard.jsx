import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Dashboard = () => {
  let navigate = useNavigate();
  let [myInfo, setmyInfo] = useState();
  let [myExp, setExp] = useState();
  let [myEdu, setEdu] = useState();

  async function getMe() {
    try {
      let { data } = await axios.get("/profile/me");
      setmyInfo(data);
      setEdu(data.education);
      setExp(data.experience);
    } catch (error) {
      console.log(error);
      navigate("/create-profile");
    }
  }

  getMe();

  function handleDeleteAcc(e) {
    e.preventDefault();

    async function deleteProfil() {
      let { data } = await axios.delete("/profile");
    }
    let text = "Are you sure?";
    if (confirm(text) == true) {
      delete toast("Account has been deleted", { type: "error" });
      localStorage.removeItem("token");
      navigate("/login");
      deleteProfil();
    }
  }

  async function handleDeleteExp(id) {
    try {
      let res = await axios.delete(`profile/experience/${id}`);
      toast("Experience removed", { type: "success" });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeleteEdu(id) {
    try {
      let res = await axios.delete(`profile/education/${id}`);
      toast("Education removed", { type: "success" });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="container">
        <h3 className="display-3 fw-bold mt-5">Dashboard</h3>
        <p className="mt-3 display-6"> Welcome {myInfo?.user?.name}</p>
        <Link
          className="text-decoration-none text-dark px-4 py-2 dashboard-links mt-5 d-d-inline-block"
          to="/edit-profile"
        >
          Edit Profile
        </Link>
        <Link
          className="text-decoration-none text-dark px-4 py-2 dashboard-links mt-3 d-inline-block"
          to="/add-experience"
        >
          Add Experience
        </Link>
        <Link
          className="text-decoration-none text-dark px-4 py-2 dashboard-links d-inline-block mb-4"
          to="/add-education"
        >
          Add Education
        </Link>
        <h5 className="mt-4 display-6 fw-normal">Experience Credentials</h5>

        <table className="table mt-4 w-50">
          <thead>
            <tr>
              <th scope="col">Company</th>
              <th scope="col">Title</th>
              <th scope="col">Years</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myExp?.map((exp, index) => (
              <tr key={index}>
                <td>{exp.company}</td>
                <td>{exp.title}</td>
                <td>
                  {exp?.from?.split("T")[0]} -{" "}
                  {exp.current === true ? "Now" : exp?.to?.split("T")[0]}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteExp(exp._id)}
                    className="text-light bg-danger border-0 px-3 py-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h5 className="mt-5 display-6 fw-normal">Education Credentials</h5>

        <table className="table mt-4 mb-5 w-50">
          <thead>
            <tr>
              <th scope="col">School</th>
              <th scope="col">Degree</th>
              <th scope="col">Years</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myEdu?.map((edu, index) => (
              <tr key={index}>
                <td>{edu.school}</td>
                <td>{edu.degree}</td>
                <td>
                  {edu.from?.split("T")[0]} -{" "}
                  {edu.current === true ? "Now" : edu.to?.split("T")[0]}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteEdu(edu._id)}
                    className="text-light bg-danger border-0 px-3 py-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          onClick={handleDeleteAcc}
          className="bg-danger text-light border-0 px-4 py-3 mb-5"
        >
          Delete My Account
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
