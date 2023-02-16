import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Posts = () => {
  const [myId, setmyId] = useState("");
  let [posts, setPosts] = useState([]);
  let [values, setValues] = useState({
    post: "",
  });

  // get all posts
  async function getPosts() {
    try {
      let { data } = await axios.get("/posts");
      setPosts(data);
    } catch (error) {
      toast(error.response.data.msg, { type: "error" });
    }
  }

  getPosts();

  function handleFormSubmit(e) {
    e.preventDefault();

    // post a post
    async function post() {
      try {
        let { data } = await axios.post("/posts", { text: values.post });
        values.post = "";
        toast("Post created", { type: "success" });
      } catch (error) {
        toast(error.response.data.errors[0].msg, { type: "error" });
      }
    }
    post();
  }

  // input change
  function handleInputChange(e) {
    setValues((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.value,
    }));
  }

  // like
  async function handleLike(id) {
    try {
      let res = await axios.put(`/posts/like/${id}`);
    } catch (error) {
      toast(error.response.data.msg, { type: "error" });
    }
  }

  // dislike
  async function handleDislike(id) {
    try {
      let res = await axios.put(`/posts/unlike/${id}`);
    } catch (error) {
      toast(error.response.data.msg, { type: "error" });
    }
  }

  // my info
  async function getMe() {
    try {
      let { data } = await axios.get(`/profile/me`);
      setmyId(data.user._id);
    } catch (error) {
      toast(error.response.data.msg, { type: "error" });
    }
  }
  getMe();

  // delete Post
  async function handleDelete(id) {
    try {
      let res = await axios.delete(`/posts/${id}`);
      toast("Post has been deleted", { type: "success" });
    } catch (error) {
      toast(error.response.data.msg, { type: "error" });
    }
  }

  return (
    <div className="container">
      {posts.length === 0 ? (
        <div className="d-flex">
          <div className="loader ms-auto me-auto"></div>
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
                  <button
                    onClick={() => handleLike(post._id)}
                    className="border-0 me-3 py-2 px-3"
                  >
                    <img
                      className="me-1"
                      style={{ width: "20px" }}
                      src="/like.svg"
                      alt="like"
                    />
                    {post?.likes?.length === 0 ? "" : post.likes.length}
                  </button>
                  <button
                    onClick={() => handleDislike(post._id)}
                    className="border-0 me-3 py-2 px-3"
                  >
                    <img
                      style={{ width: "20px" }}
                      src="/dislike.svg"
                      alt="dislike"
                    />
                  </button>
                  <Link
                    to={`/post/${post._id}`}
                    className="dsc-btn text-light ms-2 text-decoration-none"
                  >
                    Discussion{" "}
                    {post.comments.length !== 0 ? post.comments.length : ""}
                  </Link>
                  {myId === post.user ? (
                    <button
                      onClick={() => handleDelete(post._id)}
                      className="bg-danger border-0 fw-bold px-4 ms-3 py-2 text-light"
                    >
                      X
                    </button>
                  ) : (
                    ""
                  )}
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
