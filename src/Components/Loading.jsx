import React from "react";
import { FadeLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center mt-30 pb-20">
      <p className="text-3xl md:text-5xl font-extrabold">L</p>
      <div className="ml-4 mr-2">
        <FadeLoader color="#9333EA"></FadeLoader>
      </div>
      <p className="text-3xl md:text-5xl font-extrabold">A D I N G . . .</p>
    </div>
  );
};

export default Loading;
