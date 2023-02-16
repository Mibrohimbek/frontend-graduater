import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const CreateProfile = () => {
  let statuses = [
    "*Select professional status",
    "Developer",
    "Junior developer",
    "Senior developer",
    "Manager",
    "Student of learning",
    "Instructor or Teacher",
    "Intern",
    "Other",
  ];

  const [values, setValues] = useState({
    status: "",
    company: "",
    website: "",
    location: "",
    skills: "",
    github: "",
    bio: "",
    twitter: "",
    instagram: "",
    facebook: "",
    youtube: "",
    linkedin: "",
  });

  let social_medias = [
    {
      img: "./instagram-logo.svg",
      placeholder: "Instagram URL",
      value: values.instagram,
      name: "instagram",
    },
    {
      img: "./Facebook_icon.png",
      placeholder: "Facebook URL",
      value: values.facebook,
      name: "facebook",
    },
    {
      img: "./linkedin.svg",
      placeholder: "Linkedin URL",
      value: values.linkedin,
      name: "linkedin",
    },
    {
      img: "./youtube.png",
      placeholder: "YouTube URL",
      value: values.youtube,
      name: "youtube",
    },
    {
      img: "./twitter.svg",
      placeholder: "Twitter URL",
      value: values.twitter,
      name: "twitter",
    },
  ];

  let navigate = useNavigate();

  function handleInputChange(e) {
    setValues((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.value,
    }));
  }

  async function formSubmit(e) {
    e.preventDefault();

    try {
      let { data } = await axios.post("/profile", values);
      navigate("/dashboard");
      toast("Profile created", { type: "success" });
    } catch (error) {
      {
        error.response.data.errors.map((error) =>
          toast(error.msg, { type: "error" })
        );
      }
    }
  }

  return (
    <>
      <div className="container create-profil">
        <h3 className="text-center mt-5">Create Your Profile</h3>
        <h5 className="text-center mt-3 mb-4">
          Let's get some information to make your
        </h5>
        <p>* = required field</p>

        <form onSubmit={formSubmit}>
          <div className="row m-0">
            <select
              className="form-select"
              value={values.status}
              onChange={handleInputChange}
              name="status"
              required
              id="status"
            >
              {statuses.map((job) => (
                <option key={job} value={job}>
                  {job}
                </option>
              ))}
            </select>
            <p className="mt-1 mb-4">
              Give us an idea of where you are at in your career
            </p>
            <input
              className="form-control"
              type="text"
              value={values.company}
              onChange={handleInputChange}
              placeholder="Company"
              name="company"
            />
            <p className="mt-1 mb-4">
              Could be your own company or one you work for
            </p>
            <input
              className="form-control"
              type="text"
              value={values.website}
              onChange={handleInputChange}
              placeholder="Website"
              name="website"
            />
            <p className="mt-1 mb-4">Could be your own or a company website</p>
            <input
              className="form-control"
              type="text"
              placeholder="Location"
              value={values.location}
              onChange={handleInputChange}
              name="location"
            />
            <p className="mt-1 mb-4">City & state suggested (eg. Boston, MA)</p>
            <input
              className="form-control"
              type="text"
              placeholder="*Skills"
              value={values.skills}
              onChange={handleInputChange}
              name="skills"
            />
            <p className="mt-1 mb-4">
              Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
            </p>
            <input
              className="form-control"
              type="text"
              placeholder="GitHub Username"
              values={values.github}
              name="github"
              onChange={handleInputChange}
            />
            <p className="mt-1 mb-4">
              If you want your latest repos and a Github link, include your
              username
            </p>
            <textarea
              style={{ fontSize: "25px" }}
              className="p-3"
              name="bio"
              id="bio"
              placeholder="A short bio of yourself"
              cols="10"
              rows="2"
              value={values.bio}
              onChange={handleInputChange}
            ></textarea>
            <p>Tell us a little about yourself</p>
          </div>

          <button type="button" className="mb-5 mt-4 border-0 px-4 py-3">
            Add Social Network Links
          </button>

          <p style={{ fontSize: "20px" }} className="d-inline-block ms-4">
            Optional
          </p>

          {social_medias.map((sm, index) => (
            <div key={index} className="d-flex gap-4 mb-4">
              <img
                src={sm.img}
                style={{ width: "40px", height: "40px" }}
                alt={sm.img}
              />
              <input
                name={sm.name}
                value={sm.value}
                onChange={handleInputChange}
                className="form-control"
                type="text"
                placeholder={sm.placeholder}
              />
            </div>
          ))}

          <button className="send text-light px-5 py-2 mt-5" type="submit">
            Send
          </button>
          <Link
            className="back text-decoration-none text-dark ms-2 py-2 px-5"
            to="/dashboard-create-profile"
          >
            Go Back
          </Link>
        </form>
      </div>
    </>
  );
};

export default CreateProfile;
