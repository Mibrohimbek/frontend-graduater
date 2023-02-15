import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Dashboard = () => {
  const { user } = useSelector((store) => store);

  let navigate = useNavigate();

  function handleDelete(e) {
    e.preventDefault();

    async function deleteProfil() {
      let { data } = await axios.delete("/profile");
    }
    delete toast("Account has been deleted", { type: "error" });
    localStorage.removeItem("token");
    navigate("/login");
    deleteProfil();
  }
  return (
    <div>
      <div className="container">
        <h3 className="display-3 fw-bold mt-5">Dashboard</h3>
        <p className="mt-3 display-6"> Welcome {user.name}</p>
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
            <tr>
              {/* <th scope="row"></th> */}
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
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
