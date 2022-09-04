import { Tab } from '@headlessui/react';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import About from './About';
import Articles from './Articles';
import Edit from './Edit';
import Timeline from './Timeline';

export default function Tabs({ articles, profile }) {
  const { isAuth } = useSelector((state) => state.auth);

  return (
    <Tab.Group defaultIndex={0}>
      <Tab.List className="flex justify-center bg-white border border-blue-300 rounded-xl border-opacity-20 md:gap-x-5">
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={`px-4 outline-none p-2 text-xs tracking-tight text-base-content uppercase ${
                selected
                  ? 'border-b-2 border-blue-500 text-blue-500 font-bold'
                  : ''
              }`}
            >
              About
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={`px-4 outline-none p-2 text-xs tracking-tight text-base-content uppercase ${
                selected
                  ? 'border-b-2 border-blue-500 text-blue-500 font-bold'
                  : ''
              }`}
            >
              Articles
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={`px-4 outline-none p-2 text-xs tracking-tight text-base-content uppercase ${
                selected
                  ? 'border-b-2 border-blue-500 text-blue-500 font-bold'
                  : ''
              }`}
            >
              Timeline
            </button>
          )}
        </Tab>
        {isAuth ? (
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`px-4 outline-none p-2 text-xs tracking-tight text-base-content uppercase ${
                  selected
                    ? 'border-b-2 border-blue-500 text-blue-500 font-bold'
                    : ''
                }`}
              >
                Edit
              </button>
            )}
          </Tab>
        ) : null}
      </Tab.List>

      <Tab.Panels className="mt-4">
        <Tab.Panel>
          <About profile={profile} />
        </Tab.Panel>
        <Tab.Panel>
          <Articles articles={articles} />
        </Tab.Panel>
        <Tab.Panel>
          <Timeline articles={articles} />
        </Tab.Panel>
        {isAuth ? (
          <Tab.Panel>
            <Edit profile={profile} />
          </Tab.Panel>
        ) : null}
      </Tab.Panels>
    </Tab.Group>
  );
}
