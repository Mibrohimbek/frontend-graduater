import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) navigate("/dashboard");
  }, []);

  async function handleRegister(e) {
    e.preventDefault();

    if (values.password !== values.confirmedPassword) {
      return toast("Password do not match", { type: "error" });
    }

    try {
      let {
        data: { token, message },
      } = await axios.post("/users", values);

      localStorage.setItem("token", token);
      axios.defaults.headers.common["x-auth-token"] = `${token}`;

      toast(message, { type: "success" });

      navigate("/dashboard-create-profile");
    } catch (error) {
      console.log(error);
      toast(error.response.data.errors[0].msg, { type: "error" });
    }
  }

  function handleInputChange(e) {
    setValues((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <div id="sign-up">
      <div className="container">
        <h3 className="text-center mt-5 display-5 fw-normal">Sign Up</h3>
        <h5 className="text-center mt-3">Create Your Account</h5>

        <form
          onSubmit={handleRegister}
          className="d-flex align-items-center flex-column"
        >
          <input
            type="text"
            className="w-50 form-control mb-4"
            placeholder="Name"
            required
            value={values.name}
            onChange={handleInputChange}
            id="name"
            name="name"
          />
          <input
            type="email"
            className="w-50 form-control mb-2"
            placeholder="Email Address"
            required
            value={values.email}
            onChange={handleInputChange}
            id="email"
            name="email"
          />
          <p>
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </p>
          <input
            type="password"
            className="w-50 form-control mb-4 mt-2"
            placeholder="Password"
            required
            name="password"
            id="password"
            min={6}
            value={values.password}
            onChange={handleInputChange}
          />
          <input
            type="password"
            className="w-50 form-control"
            placeholder="Confirm Password"
            required
            name="confirmedPassword"
            id="confirmedPassword"
            min={6}
            onChange={handleInputChange}
          />
          <button type="submit" className="text-light w-50 mt-3 btn px-4">
            Register
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-decoration-none has-an-acc ms-1">
            Sign in
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
