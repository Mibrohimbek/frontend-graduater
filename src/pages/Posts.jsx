import axios from "axios";
import React from "react";
import { useState } from "react";

const Posts = () => {
  let [posts, setPosts] = useState([]);

  async function getPosts() {
    const token = localStorage.getItem("token");
    let { data } = await axios.get("/posts", token);
    console.log(data);
  }

  getPosts();

  //   setPosts(data);
  //   console.log(posts);
  return (
    <div>
      <h1>post</h1>
    </div>
  );
};

export default Posts;
