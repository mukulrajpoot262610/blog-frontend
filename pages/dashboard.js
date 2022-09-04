import React from 'react';

const Dashboard = () => {
  return (
    <div className="pt-24 overflow-hidden">
      <h1 className="font-bold uppercase text-lg">Analytics Summary</h1>

      <div className="grid mt-4 items-center gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-6xl font-bold">69</h2>
            <p>Total Post Reactions</p>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-6xl font-bold">69</h2>
            <p>Total Blogs Posted</p>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-6xl font-bold">69</h2>
            <p>Followers</p>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-6xl font-bold">69</h2>
            <p>Followings</p>
          </div>
        </div>
      </div>

      <div className="lg:grid grid-cols-12 mt-6 gap-10">
        <div className="col-span-12 lg:col-span-3">
          <div className="sticky bg-white rounded-lg p-6">
            <h3 className="p-2 hover:bg-blue-100 rounded-lg">Post</h3>
            <h3 className="p-2 hover:bg-blue-100 rounded-lg">Followers</h3>
            <h3 className="p-2 hover:bg-blue-100 rounded-lg">Following</h3>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-9">
          <h1 className="font-bold uppercase text-lg">Post</h1>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
