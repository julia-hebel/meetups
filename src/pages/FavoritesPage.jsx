import React, { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import MeetupsContext from '../contexts/MeetupsContext';

function FavoritesPage() {
  const meetupsContext = useContext(MeetupsContext);

  return (
    <div className='w-8/12 m-auto mt-4'>
      <h1 className='text-center text-xl font-bold mb-4'>Favorites Page</h1>
      <MeetupList
        meetups={meetupsContext.meetups.filter(
          (meetup) => meetup.isFavorite === true
        )}
      />
      {meetupsContext.meetups.length === 0 && (
        <div className='mt-20 text-center text-xl font-bold underline'>
          No favorites to show
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;
