import { formatDistance } from 'date-fns';
import Link from 'next/link';
import React from 'react';
import { FiHeart } from 'react-icons/fi';

const PostCard = ({ data }) => {
  return (
    <Link href={`/blogs/${data.slug}`}>
      <div className="flex flex-col items-start p-12 border-b cursor-pointer">
        <span className="inline-block px-2 py-1 text-xs font-medium tracking-widest text-indigo-500 rounded bg-indigo-50">
          CATEGORY
        </span>
        <h2 className="mt-4 mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
          {data.title}
        </h2>
        <div className="flex items-start gap-6 mb-4">
          <p className="flex-1 mb-8 leading-relaxed">
            Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal
            portland. VHS man braid palo santo hoodie brunch trust fund.
          </p>
          <div className="flex flex-1">
            <div className="flex items-start flex-1 overflow-hidden aspect-w-16 aspect-h-9">
              <img src={data.cover} className="block object-cover h-full" />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center w-full pb-4 mt-auto mb-4 border-b-2 border-gray-100">
          <a className="inline-flex items-center text-indigo-500">
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <span className="inline-flex items-center gap-1 py-1 pr-3 ml-auto mr-3 text-sm leading-none text-gray-400 border-r-2 border-gray-200">
            <FiHeart /> {data?.likes || '0'}
          </span>
        </div>
        <a className="inline-flex items-center">
          <img
            alt="blog"
            src={`${data?.author?.avatar || 'https://dummyimage.com/104x104'}`}
            className="flex-shrink-0 object-cover object-center w-12 h-12 rounded-full"
          />
          <span className="flex flex-col flex-grow pl-4">
            <span className="font-medium text-gray-900 title-font">
              {data?.author?.name || 'You'}
            </span>
            <span className="text-gray-400 text-xs tracking-widest mt-0.5">
              {formatDistance(new Date(Date.now()), new Date(data?.createdAt))}
              {' ago'}
            </span>
          </span>
        </a>
      </div>
    </Link>
  );
};

export default PostCard;
