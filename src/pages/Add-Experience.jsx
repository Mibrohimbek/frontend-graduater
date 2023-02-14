import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddExperience = () => {
  const [values, setValues] = useState({
    job_title: "",
    company: "",
    date_from: "",
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

  return (
    <>
      <div className="container create-profil">
        <h3 className="text-center mt-5">Add An Experience</h3>
        <h5 className="text-center mt-3 mb-4">
          Add any developer/programming positions that you have had in the past
        </h5>
        <form className="w-75 ms-auto me-auto">
          <p>* = required field</p>
          <div className="row m-0">
            <input
              className="form-control mb-4"
              type="text"
              placeholder="* Job Title"
              required
              value={values.job_title}
              onChange={handleInputChange}
              name="job_title"
            />
            <input
              className="form-control mb-4"
              type="text"
              placeholder="*Company"
              required
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
            <label htmlFor="date_from">From Date</label>
            <input
              type="date"
              name="date_from"
              id="date_from"
              className="form-control mt-1 mb-4"
              value={values.date_from}
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
