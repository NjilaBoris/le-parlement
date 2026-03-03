import PostForm from "@/components/forms/PostForm";
import React from "react";

const page = () => {
  return (
    <div className="h-full w-full lg:max-w-xl mx-auto">
      <h1 className="text-xl  font-medium text-neutral-700">Create Post</h1>
      <div className="pt-9">
        <PostForm />
      </div>
    </div>
  );
};

export default page;
