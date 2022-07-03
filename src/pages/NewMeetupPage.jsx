import React, { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import MeetupsContext from '../contexts/MeetupsContext';

function NewMeetupPage() {
  const titleInputRef = useRef();
  const addressInputRef = useRef();
  const favoritesInputRef = useRef();

  const meetupsContext = useContext(MeetupsContext);
  const navigate = useNavigate();

  async function addMeetup(e) {
    e.preventDefault();

    const newMeetup = {
      title: titleInputRef.current.value,
      address: addressInputRef.current.value,
      isFavorite: favoritesInputRef.current.checked,
    };

    if (!newMeetup.title || !newMeetup.address) {
      alert('Cannot be empty!');
      return;
    }

    await fetch(
      'https://react-tutorial-77259-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(newMeetup),
        headers: {
          'Content-type': 'application/json',
        },
      }
    );

    meetupsContext.setMeetups((meetups) => [...meetups, newMeetup]);
    navigate('/', { replace: true });
  }

  return (
    <div className='w-8/12 m-auto mt-4'>
      <h1 className='text-center text-xl font-bold mb-4'>Add New Meetup</h1>
      <form
        id='form'
        onSubmit={addMeetup}
        className='p-4 text-center border border-white rounded-lg'
      >
        <div>
          <label className='inline-block mb-1' htmlFor='title'>
            Title
          </label>
          <br />
          <input
            className='inline-block w-6/12 rounded-md text-sm text-black p-1 mb-4'
            type='text'
            placeholder='Title'
            ref={titleInputRef}
          />
        </div>
        <div>
          <label className='inline-block mb-1' htmlFor='address'>
            Address
          </label>
          <br />
          <input
            className='inline-block w-6/12 rounded-md text-sm text-black p-1 mb-4'
            type='text'
            placeholder='Address'
            ref={addressInputRef}
          />
        </div>
        <div>
          <label className='inline-block' htmlFor='favorites'>
            Favorites
          </label>
          <br />
          <input
            className='inline-block w-5 h-5 mt-1.5'
            type='checkbox'
            ref={favoritesInputRef}
          />
        </div>
        <div>
          <input
            type='submit'
            value='Add'
            className='bg-green-600 w-20 mt-4 mb-1 p-2 rounded-md cursor-pointer'
          />
        </div>
      </form>
    </div>
  );
}

export default NewMeetupPage;
