import React from 'react';

const Stats = ({ articles }) => {
  return (
    <div className="sticky p-4 custom-overlay top-24">
      <section className="grid grid-cols-2 p-4">
        <div className="flex flex-col items-center p-4">
          <h2 className="text-3xl font-bold text-blue-500">
            {articles.length || 0}
          </h2>
          <p className="">articles</p>
        </div>
      </section>
    </div>
  );
};

export default Stats;
