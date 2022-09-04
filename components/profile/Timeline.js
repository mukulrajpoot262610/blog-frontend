import { formatDistance } from 'date-fns';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Timeline({ articles }) {
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    const arr1 = articles?.map((i) => {
      return { date: i.createdAt, title: i?.title, ...i };
    });
    setActivity(() => arr1);
  }, []);

  const elements = activity.map((i, j) => {
    return (
      <div key={j} className="relative flex p-4 rounded-lg custom-overlay">
        <p className="flex-1 text-xs">{i.title}</p>
        <p className="text-xs text-blue-500">
          created {formatDistance(new Date(i.date), Date.now())} ago
        </p>
        <Link href={`/blogs/${i.slug}`}>
          <a className="absolute inset-0 opacity-0 cursor-pointer">visit</a>
        </Link>
      </div>
    );
  });

  return (
    <div className="space-y-2">
      <h2 className="text-sm font-bold text-blue-400 uppercase">Articles</h2>
      {elements}
      {!elements.length ? (
        <div className="flex flex-col items-center justify-center w-full h-full mt-8">
          <img src="/no-data.svg" className="h-40 mt-10" />
          <h1 className="mt-8 text-2xl font-bold">No Activities Found...</h1>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
