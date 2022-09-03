import React from 'react';

const AllBlogs = () => {
  return (
    <div>
      <hr />
      <h2 className="mt-6 mb-2">Trending Stories</h2>
      <hr />
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-8 h-80 bg-gradient-to-b to-black from-transparent relative">
            <h1 className="text-4xl font-bold absolute bottom-10 left-10 text-left max-w-lg text-white">
              Hello World
            </h1>
          </div>
          <div className="col-span-4 h-80 bg-slate-700"></div>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-4 h-80 bg-slate-700"></div>
          <div className="col-span-8 h-80 bg-red-400"></div>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
