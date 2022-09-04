import React from 'react';
import {
  FaGithub,
  FaGlobe,
  FaLinkedinIn,
  FaStackOverflow,
  FaTwitter,
} from 'react-icons/fa';
import { ImMail4 } from 'react-icons/im';
import { SiHashnode } from 'react-icons/si';

export default function User({ user, profile }) {
  console.log({ profile });
  return (
    <div className="sticky flex flex-col p-4 py-12 bg-white rounded-xl top-24">
      <section className="flex justify-center">
        <div
          id="profile-pic"
          className="w-32 h-32 overflow-hidden bg-white rounded-full ring-2 ring-blue-500 ring-offset-4"
        >
          <img src={profile?.avatar ? profile?.avatar : '/profile.jpg'} />
        </div>
      </section>

      <section className="py-6">
        <h2 className="text-xl font-bold text-center">{user?.name}</h2>
        <p className="mt-1 text-xs font-medium text-center">
          {/* {user?.tagline || 'Your Tagline Appear here'} */}
        </p>
      </section>

      <section className="flex flex-wrap justify-center gap-2">
        {profile?.github && (
          <div className="flex items-center">
            <a
              target="_blan"
              href={profile?.github}
              className="p-2 font-semibold border rounded-full cursor-pointer hover:border-blue-500"
            >
              <FaGithub className="text-2xl" />
            </a>
          </div>
        )}
        {profile?.hashnode && (
          <div className="flex items-center">
            <a
              target="_blan"
              href={profile?.hashnode}
              className="p-2 font-semibold border rounded-full cursor-pointer hover:border-blue-500"
            >
              <SiHashnode className="text-2xl" />
            </a>
          </div>
        )}
        {profile?.linkedin && (
          <div className="flex items-center">
            <a
              target="_blan"
              href={profile?.linkedin}
              className="p-2 font-semibold border rounded-full cursor-pointer hover:border-blue-500"
            >
              <FaLinkedinIn className="text-2xl" />
            </a>
          </div>
        )}
        {profile?.mail && (
          <div className="flex items-center">
            <a
              target="_blan"
              href={profile?.mail}
              className="p-2 font-semibold border rounded-full cursor-pointer hover:border-blue-500"
            >
              <ImMail4 className="text-2xl" />
            </a>
          </div>
        )}
        {profile?.website && (
          <div className="flex items-center">
            <a
              target="_blan"
              href={profile?.website}
              className="p-2 font-semibold border rounded-full cursor-pointer hover:border-blue-500"
            >
              <FaGlobe className="text-2xl" />
            </a>
          </div>
        )}
        {profile?.stackoverflow && (
          <div className="flex items-center">
            <a
              target="_blan"
              href={profile?.stackoverflow}
              className="p-2 font-semibold border rounded-full cursor-pointer hover:border-blue-500"
            >
              <FaStackOverflow className="text-2xl" />
            </a>
          </div>
        )}
        {profile?.twitter && (
          <div className="flex items-center">
            <a
              target="_blan"
              href={profile?.twitter}
              className="p-2 font-semibold border rounded-full cursor-pointer hover:border-blue-500"
            >
              <FaTwitter className="text-2xl" />
            </a>
          </div>
        )}
      </section>
    </div>
  );
}
