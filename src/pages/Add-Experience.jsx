import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const AddExperience = () => {
  let navigate = useNavigate();

  const [values, setValues] = useState({
    title: "",
    company: "",
    from: "",
    date_to: "",
    location: "",
    job_description: "",
  });

  function handleInputChange(e) {
    setValues((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.value,
    }));
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    async function createExp() {
      try {
        let { data } = await axios.put("/profile/experience", values);
        navigate("/dashboard");
        toast("Experience added", { type: "success" });
      } catch (error) {
        return toast(error.response.data.errors[0].msg, { type: "error" });
      }
    }
    createExp();
  }

  return (
    <>
      <div className="container create-profil">
        <h3 className="text-center mt-5">Add An Experience</h3>
        <h5 className="text-center mt-3 mb-4">
          Add any developer/programming positions that you have had in the past
        </h5>
        <form onSubmit={handleFormSubmit} className="w-75 ms-auto me-auto">
          <p>* = required field</p>
          <div className="row m-0">
            <input
              className="form-control mb-4"
              type="text"
              placeholder="* Job Title"
              value={values.title}
              onChange={handleInputChange}
              name="title"
            />
            <input
              className="form-control mb-4"
              type="text"
              placeholder="*Company"
              value={values.company}
              onChange={handleInputChange}
              name="company"
            />
            <input
              className="form-control mb-3"
              type="text"
              placeholder="Location"
              value={values.location}
              onChange={handleInputChange}
              name="location"
            />
            <label htmlFor="from">From Date</label>
            <input
              type="date"
              name="from"
              id="from"
              className="form-control mt-1 mb-4"
              value={values.from}
              onChange={handleInputChange}
            />
            <label htmlFor="date_to">To Date</label>
            <input
              type="date"
              name="date_to"
              id="date_to"
              className="form-control mt-1 mb-4"
              value={values.date_to}
              onChange={handleInputChange}
            />
            <textarea
              className="p-3"
              name="job_description"
              id="job-desc"
              placeholder="Job Description"
              cols="10"
              rows="5"
              value={values.job_description}
              onChange={handleInputChange}
            ></textarea>
            <p>Tell us a little about yourself</p>
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
    </>
  );
};

export default AddExperience;
