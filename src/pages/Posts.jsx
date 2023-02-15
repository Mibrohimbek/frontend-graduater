import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Posts = () => {
  let [posts, setPosts] = useState([]);
  let [values, setValues] = useState({
    post: "",
  });

  async function getPosts() {
    let { data } = await axios.get("/posts");
    setPosts(data);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (values.post === "") {
      toast("Text is required", { type: "error" });
    } else {
      async function post() {
        let { data } = await axios.post("/posts", { text: values.post });
        toast("Post created", { type: "success" });
      }
      post();
      values.post = "";
    }
  }

  function handleInputChange(e) {
    setValues((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.value,
    }));
  }

  getPosts();

  return (
    <div className="container">
      {posts.length === 0 ? (
        <div className="d-flex">
          <div
            className="loader ms-auto me-auto"
          ></div>
        </div>
      ) : (
        <>
          <h3 className="mt-3 text-center display-4 fw-bold">Posts</h3>
          <p className="fw-normal text-center" style={{ fontSize: "30px" }}>
            Welcome to the community
          </p>

          <form onSubmit={handleFormSubmit} className="mb-5">
            <div
              className="p-3 text-light fw-bold"
              style={{ backgroundColor: "rgb(23, 162, 184)", fontSize: "15px" }}
            >
              Say Something ...
            </div>
            <textarea
              name="post"
              id="post"
              cols="30"
              rows="3"
              value={values.post}
              onChange={handleInputChange}
              placeholder="Create a post"
              className="w-100 mt-4 p-2"
              style={{ fontSize: "20px" }}
            ></textarea>
            <button type="submit" className="text-light bg-dark mt-3 px-4 py-2">
              Submit
            </button>
          </form>
          {posts.map((post, index) => (
            <div
              key={index}
              className="d-flex align-items-center mb-4 border p-3"
            >
              <div className="profile col-2">
                <Link to={`/profiles/user/${post.user}`}>
                  <div className="d-flex">
                    <img
                      src={post.avatar}
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50px",
                      }}
                      className="ms-auto me-auto"
                      alt="profile-img"
                    />
                  </div>
                  <h5 className=" text-center mt-3">{post.name}</h5>
                </Link>
              </div>
              <div className="info">
                <h6>{post.text}</h6>
                <p className="post-date mt-4">Posted on {post.date}</p>
                <div>
                  <button className="border-0 me-2 py-2 px-3">
                    <img
                      className="me-1"
                      style={{ width: "20px" }}
                      src="/like.svg"
                      alt=""
                    />
                    {post?.likes?.length}
                  </button>
                  <button className="border-0 py-2 px-3">
                    <img style={{ width: "20px" }} src="/dislike.svg" alt="" />
                  </button>
                  <Link className="dsc-btn text-light ms-2 text-decoration-none">
                    Discussion
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Posts;
