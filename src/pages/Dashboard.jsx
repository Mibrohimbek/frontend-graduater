import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Dashboard = () => {
  let navigate = useNavigate();
  let [myInfo, setmyInfo] = useState();

  async function getMe() {
    try {
      let { data } = await axios.get("/profile/me");
      setmyInfo(data);
      // console.log(data?.experience[0]?.from);
    } catch (error) {
      console.log(error);
    }
  }

  let date = myInfo?.experience[0]?.from.split("T")[0];
  // console.log(date);
  getMe();

  function handleDelete(e) {
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
            {/* {myInfo?.experience !== undefined
              ? myInfo?.experience.map((ex) => {
                  // <tr>
                  //   <td>{ex.company}</td>
                  //   <td scope="row">{myInfo?.experience[0]?.title}</td>
                  //   <td>
                  //     {myInfo?.experience[0].from.split("T")[0]}-
                  //     {myInfo?.experience[0]?.current === true ? (
                  //       <p className="d-inline-block">now</p>
                  //     ) : (
                  //       <p>{myInfo?.experience[0].to.split("T")[0]}</p>
                  //     )}
                  //   </td>
                  //   <td>
                  //     <button className="text-light bg-danger border-0 px-3 py-2">
                  //       Delete
                  //     </button>
                  //   </td>
                  // </tr>;
                })
              : ""} */}

            {/* {myInfo?.experience !== undefined
              ? map?.experience.map((ex) => <div>yes</div>)
              : "bad"} */}
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
            <tr>
              {/* <th scope="row"></th> */}
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <button
          onClick={handleDelete}
          className="bg-danger text-light border-0 px-4 py-3 mb-5"
        >
          Delete My Account
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
