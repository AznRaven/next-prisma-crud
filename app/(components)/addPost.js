"use client";
import React, { useState } from "react";
import Modal from "./modal";
import axios from "axios";
import { useRouter } from "next/navigation";

const AddPost = () => {
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState(false);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    axios
      .post("/api/posts", input)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setInput({});
        setModalOpen(false);
        router.refresh();
      });
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <div className="">
      <button
        onClick={() => setModalOpen(true)}
        className="bg-blue-700 text-white p-3 cursor-pointer"
      >
        Add New Post
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form className="w-full" onSubmit={handleSubmit}>
          <h1 className="text-2xl pb-3 ">Add Post</h1>
          <input
            type="text"
            value={input.title}
            onChange={handleChange}
            placeholder="Title"
            name="title"
            className="w-full p-2 my-5"
          />
          <input
            type="text"
            value={input.description}
            onChange={handleChange}
            placeholder="Description"
            name="description"
            className="w-full p-2 my-5"
          />
          <button
            type="submit"
            className="bg-blue-700 px-5 py-2 text-white cursor-pointer"
          >
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddPost;
