import React from 'react';
import User from './User';

export default function ProfileComponent({ data, user }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <section id="profile" className="col-span-4 md:col-span-1">
        <User profile={data?.profile} user={user} />
      </section>

      <section id="stats" className="col-span-4 md:col-span-1"></section>
    </div>
  );
}
