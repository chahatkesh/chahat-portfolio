import React from "react";

const Loader = () => {
  return (
    <div className="flex space-x-2 justify-center items-center bg-white h-screen dark:bg-[#18181b]">
      <div className="h-4 w-4 bg-[#3f3f46cc] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-4 w-4 bg-[#3f3f46cc] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-4 w-4 bg-[#3f3f46cc] rounded-full animate-bounce"></div>
    </div>
  );
};

export default Loader;
