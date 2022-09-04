import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="relative flex flex-col items-center justify-center w-full min-h-screen lg:gap-20 lg:flex-row">
      <div className="flex flex-col mt-24 items-start justify-center w-full h-full lg:w-1/2">
        <h1 className="z-20 max-w-6xl text-4xl mb-4 font-bold md:text-6xl">
          Publishing Platform for professional bloggers
        </h1>
        <p className="z-20 max-w-xl mt-2 text-sm text-gray-400 md:text-lg">
          Create beautiful, independent online publication by writing faster and
          better than you ever have before.
        </p>
        <Link href="/explore">
          <button className="mt-4 bg-blue-200 btn btn-ghost btn-wide hover:bg-blue-100">
            Get Started - It&apos;s free
          </button>
        </Link>
      </div>

      <div className="relative w-full h-full p-2 mt-10 md:w-11/12 lg:w-1/2">
        <img
          alt="overlay"
          src="/hero.gif"
          className="object-cover object-top w-full rounded-3xl"
        />
      </div>
    </header>
  );
};

export default Header;
