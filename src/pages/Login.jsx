import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../Components/Header";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) navigate("/dashboard");
  }, []);

  async function handleLogin(e) {
    e.preventDefault();

    // Validations ...

    try {
      // Login
      let {
        data: { token, message },
      } = await axios.post("/auth", values);

      localStorage.setItem("token", token);
      axios.defaults.headers.common["x-auth-token"] = `Bearer ${token}`;

      toast(message, { type: "success" });

      navigate("/dashboard");
    } catch (error) {
      toast("Not Found", { type: "error" });
      console.log(error);
    }
  }

  function handleInputChange(e) {
    setValues((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <div id="sign-in" className="container">
      <h3 className="text-center mt-5 display-5 fw-normal">Sign In</h3>
      <h5 className="text-center mt-3 mb-4">Sign Into Your Account</h5>

      <form
        onSubmit={handleLogin}
        className="d-flex align-items-center flex-column"
      >
        <input
          type="email"
          className="w-50 form-control mb-3"
          placeholder="Email Address"
          name="email"
          id="email"
          value={values.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          className="w-50 form-control mt-2"
          placeholder="Password"
          name="password"
          id="password"
          value={values.password}
          onChange={handleInputChange}
          min={6}
        />
        <button type="submit" className="text-light w-50 mt-3 btn px-4">
          Login
        </button>
      </form>
      <p className="text-center mt-4">
        Already have an account?
        <Link to="/register" className="text-decoration-none has-an-acc ms-1">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
