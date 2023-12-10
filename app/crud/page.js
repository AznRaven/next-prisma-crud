import React from "react";
import AddPost from "../(components)/addPost";
import PostList from "../(components)/postList";

async function getData(){
    const res = await fetch(process.env.URL +'/api/posts',{
        cache:'no-store',
    })

    if(!res.ok){
    throw new Error('Failed to fetch')}

    return res.json()
}

const Crud = async () => {
    const posts = await getData()
    console.log(posts)
  return (
    <div className="max-w-4xl mx-auto mt-4">
      <div className="my-5 flex-col gap-4">
        <h1 className="text-3xl font-bold mb-10">Todo List App</h1>
        <AddPost />
      </div>
      <PostList posts={posts}/>
    </div>
  );
};

export default Crud;
