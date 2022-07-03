import React, { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import MeetupsContext from '../contexts/MeetupsContext';

function AllMeetupsPage() {
  const meetupsContext = useContext(MeetupsContext);

  return (
    <div className='w-8/12 m-auto mt-4'>
      <h1 className='text-center text-xl font-bold mb-4'>All Meetups Page</h1>
      <MeetupList meetups={meetupsContext.meetups} />
    </div>
  );
}

export default AllMeetupsPage;
