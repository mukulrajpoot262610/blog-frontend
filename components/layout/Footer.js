import React from 'react';

const Footer = () => {
  return (
    <footer className="body-font">
      <div className="flex flex-col items-center w-11/12 px-5 py-8 mx-auto sm:flex-row">
        <a className="flex items-center justify-center font-medium title-font md:justify-start">
          <img alt="logo" src="/logo.png" className="object-contain w-10" />
          <h1 className="hidden text-2xl ml-2 font-bold tracking-tight uppercase cursor-pointer  lg:block">
            SUDO
          </h1>
        </a>
        <p className="mt-4 text-sm text-center text-gray-700 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0">
          © 2022 Sudo — Team Gama
        </p>
        <span className="inline-flex items-center justify-center gap-2 mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
          <img alt="hashnode" src="/ineuron-logo.png" className="h-5" />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
