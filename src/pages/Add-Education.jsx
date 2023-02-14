import React from "react";
import { Link } from "react-router-dom";

const AddEducation = () => {
  return (
    <>
      <div className="container create-profil">
        <h3 className="text-center mt-5">Add Your Education</h3>
        <h5 className="text-center mt-3 mb-4">
          Add any school or bootcamp that you have attended
        </h5>
        <form className="w-75 ms-auto me-auto">
          <p>* = required field</p>
          <div className="row m-0">
            <input
              className="form-control mb-4"
              type="text"
              placeholder="* School or Bootcamp"
              required
            />
            <input
              className="form-control mb-4"
              type="text"
              placeholder="* Degree or Certificate"
              required
            />
            <input
              className="form-control mb-3"
              type="text"
              placeholder="Field of Study"
            />
            <label htmlFor="from-date">From Date</label>
            <input
              type="date"
              name="from-date"
              id="from-date"
              className="form-control mt-1 mb-4"
            />
            <label htmlFor="to-date">To Date</label>
            <input
              type="date"
              name="to-date"
              id="to-date"
              className="form-control mt-1 mb-4"
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
    </>
  );
};

export default AddEducation;
