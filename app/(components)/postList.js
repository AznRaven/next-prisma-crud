import React from "react";
import Post from "./post";

const PostList = ({ posts }) => {
  return (
    <ul>
      {posts.map((x) => (
        <Post key={x.id} post={x} />
      ))}
    </ul>
  );
};

export default PostList;
