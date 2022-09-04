import React from 'react';
import { FiHeart } from 'react-icons/fi';

const AllBlogs = () => {
  return (
    <div>
      <hr />
      <h2 className="mt-6 mb-2 uppercase font-bold">
        Trending Stories (Sorted by Most Liked)
      </h2>
      <hr />
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8 h-80 bg-gradient-to-b to-black from-transparent relative">
            <h1 className="text-4xl font-bold absolute bottom-10 left-10 text-left max-w-lg text-white">
              Hello World
            </h1>
            <span className="text-white mr-3 inline-flex items-center ml-auto leading-none text-2xl pr-3 py-1 border-r-2 gap-1 border-gray-200 absolute top-10 left-10">
              <FiHeart /> 1.2K
            </span>
          </div>

          <div className="col-span-12 lg:col-span-4 h-80 bg-slate-700"></div>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-4 h-80 bg-slate-700"></div>
          <div className="col-span-12 lg:col-span-8 h-80 bg-red-400"></div>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
