import React from 'react';
import Stats from './Stats';
import Tabs from './Tabs';
import User from './User';

export default function Profile({ data }) {
  console.log({ data });
  return (
    <div className="grid grid-cols-4 gap-4 pt-4">
      <section id="profile" className="col-span-4 md:col-span-1">
        <User profile={data?.profile} user={data?.profile} />
      </section>
      <section className="col-span-4 md:col-span-2" id="tabs">
        <Tabs profile={data?.profile || null} articles={data?.articles || []} />
      </section>
      <section id="stats" className="col-span-4 md:col-span-1">
        <Stats articles={data?.articles || []} />
      </section>
    </div>
  );
}
