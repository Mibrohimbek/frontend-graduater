import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const AddEducation = () => {
  let navigate = useNavigate();

  const [values, setValues] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
  });

  function handleInputChange(e) {
    setValues((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.value,
    }));
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    async function createEdu() {
      try {
        let { data } = await axios.put("/profile/education", values);
        navigate("/dashboard");
        toast("Experience added", { type: "success" });
      } catch (error) {
        {
          error.response.data.errors.map((error) =>
            toast(error.msg, { type: "error" })
          );
        }
      }
    }

    createEdu();
  }
  return (
    <div className="container create-profil">
      <h3 className="text-center mt-5">Add Your Education</h3>
      <h5 className="text-center mt-3 mb-4">
        Add any school or bootcamp that you have attended
      </h5>
      <form onSubmit={handleFormSubmit} className="w-75 ms-auto me-auto">
        <p>* = required field</p>
        <div className="row m-0">
          <input
            name="school"
            className="form-control mb-4"
            type="text"
            placeholder="* School or Bootcamp"
            value={values.school}
            onChange={handleInputChange}
          />
          <input
            className="form-control mb-4"
            type="text"
            placeholder="* Degree or Certificate"
            name="degree"
            value={values.degree}
            onChange={handleInputChange}
          />
          <input
            className="form-control mb-3"
            type="text"
            placeholder="Field of Study"
            name="fieldofstudy"
            value={values.fieldofstudy}
            onChange={handleInputChange}
          />
          <label htmlFor="from-date">From Date</label>
          <input
            type="date"
            name="from"
            className="form-control mt-1 mb-4"
            value={values.from}
            onChange={handleInputChange}
          />
          <label htmlFor="to-date">To Date</label>
          <input
            type="date"
            name="to"
            className="form-control mt-1 mb-4"
            value={values.to}
            onChange={handleInputChange}
          />
          <textarea
            className="p-3"
            name="prog-desc"
            id="prog-desc"
            placeholder="Program Description"
            cols="10"
            rows="5"
          ></textarea>
        </div>
        <button className="send text-light px-5 py-2 mt-5" type="submit">
          Send
        </button>
        <Link
          className="back text-decoration-none text-dark ms-2 py-2 px-5"
          to="/dashboard"
        >
          Go Back
        </Link>
      </form>
    </div>
  );
};

export default AddEducation;
