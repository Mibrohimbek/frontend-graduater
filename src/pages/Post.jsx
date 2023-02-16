import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Post = () => {
  let [comments, setComments] = useState([]);
  let { postId } = useParams();
  let [post, setPost] = useState([]);
  let [values, setValues] = useState({
    post: "",
  });
  let [myId, setmyId] = useState("");

  async function getMe() {
    try {
      let { data } = await axios.get("/profile/me");
      setmyId(data?.user?._id);
    } catch (error) {
      console.log(error);
    }
  }
  getMe();

  // input change
  function handleInputChange(e) {
    setValues((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.value,
    }));
  }

  //   comment delete button
  async function handleDelete(id) {
    try {
      let res = await axios.delete(`/posts/comment/${postId}/${id}`);
      toast("Comment has been deleted", { type: "success" });
    } catch (error) {
      console.log(error);
    }
  }

  async function createProfile() {
    try {
      let { data } = await axios.get(`/posts/${postId}`);
      setPost(data);
    } catch (error) {
      console.log(error);
    }
  }
  createProfile();

  //   form submit
  function handleFormSubmit(e) {
    e.preventDefault();

    // post a comment
    async function post() {
      try {
        let { data } = await axios.post(`/posts/comment/${postId}`, {
          text: values.post,
        });
        values.post = "";
        toast("Comment added", { type: "success" });
      } catch (error) {
        toast(error.response.data.errors[0].msg, { type: "error" });
      }
    }
    post();
  }

  //   comments
  async function getComments() {
    try {
      let { data } = await axios.get(`/posts/${postId}`);
      setComments(data.comments);
    } catch (error) {
      return toast(error.response.data.errors[0].msg, { type: "error" });
    }
  }
  getComments();

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

  return (
    <div className="container w-75">
      {post.length === 0 ? (
        <div className="d-flex">
          <div className="loader ms-auto me-auto"></div>
        </div>
      ) : (
        <>
          <Link
            to="/posts"
            style={{ backgroundColor: "#f3f3f3" }}
            className="mt-4 d-inline-block mb-3 text-decoration-none text-dark px-4 py-2"
          >
            Back To Posts
          </Link>

          <div className="d-flex align-items-center mt-2 mb-4 border p-3">
            <div className="profile col-3">
              <Link to={`/profiles/user/${post?.user}`}>
                <div className="d-flex">
                  <img
                    src={post?.avatar}
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50px",
                    }}
                    className="ms-auto me-auto"
                    alt="profile-img"
                  />
                </div>
                <h5 className="text-center mt-3">{post?.name}</h5>
              </Link>
            </div>
            <div className="info">
              <h6>{post.text}</h6>
              <p className="post-date mt-4">
                Posted on {post.date?.split("T")[0]}
              </p>
              <div>
                <button
                  onClick={() => handleLike(post._id)}
                  className="border-0 me-2 py-2 px-3"
                >
                  <img
                    className="me-1"
                    style={{ width: "20px" }}
                    src="/like.svg"
                    alt="like"
                  />
                  {post?.likes?.length === 0 ? "" : post?.likes?.length}
                </button>
                <button
                  onClick={() => handleDislike(post._id)}
                  className="border-0 py-2 px-3"
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
                  Discussion
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-main p-3 text-light" style={{ fontSize: "20px" }}>
            Leave a Comment
          </div>

          <form onSubmit={handleFormSubmit} className="mb-5">
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

          <div className="comments">
            {comments.map((comment, index) => (
              <div
                key={index}
                className="d-flex align-items-center mt-2 mb-4 border p-3"
              >
                <div className="profile text-center col-3">
                  <Link to={`/profiles/user/${comment.user}`}>
                    <img
                      className="rounded-circle w-50"
                      src={comment.avatar}
                      alt="avatar"
                    />
                  </Link>
                  <p className="mt-3 mb-0">{comment.name}</p>
                </div>
                <div>
                  <h6>{comment.text}</h6>
                  <p
                    className="mt-4 mb-2"
                    style={{ color: "gray", fontSize: "14px" }}
                  >
                    Posted on {comment.date?.split("T")[0]}
                  </p>
                  {comment.user === myId ? (
                    <button
                      onClick={() => handleDelete(comment._id)}
                      className="text-light bg-danger fw-bold border-0 px-4 py-2"
                    >
                      X
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Post;
