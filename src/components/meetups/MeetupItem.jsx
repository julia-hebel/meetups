import React, { useContext } from 'react';
import MeetupsContext from '../../contexts/MeetupsContext';

function MeetupItem({ meetup }) {
  const meetupsContext = useContext(MeetupsContext);

  async function toggleFavorite(meetupToToggle) {
    const updatedMeetup = {
      ...meetupToToggle,
      isFavorite: !meetupToToggle.isFavorite,
    };

    await fetch(
      `https://react-tutorial-77259-default-rtdb.europe-west1.firebasedatabase.app/meetups/${meetupToToggle.id}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(updatedMeetup),
        headers: {
          'Content-type': 'application/json',
        },
      }
    );

    meetupsContext.setMeetups(
      meetupsContext.meetups.map((meetup) =>
        meetup.id === meetupToToggle.id
          ? { ...meetup, isFavorite: !meetup.isFavorite }
          : meetup
      )
    );
  }

  return (
    <li className='text-center my-3 px-2 py-3 border border-white rounded-md bg-gray-700'>
      <h3 className='pb-2'>{meetup.title}</h3>
      <div className='pb-2'>{meetup.address}</div>
      <button
        className={`cursor-pointer w-48 py-1 px-2 border border-white rounded-md ${
          meetup.isFavorite ? 'bg-red-600' : 'bg-green-600'
        }`}
        onClick={() => toggleFavorite(meetup)}
      >
        {meetup.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </li>
  );
}

export default MeetupItem;
