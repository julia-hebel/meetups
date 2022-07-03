import React, { useContext, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetupsPage';
import FavoritesPage from './pages/FavoritesPage';
import NewMeetupPage from './pages/NewMeetupPage';
import MainNavigation from './components/layout/MainNavigation';
import MeetupsContext from './contexts/MeetupsContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const meetupsContext = useContext(MeetupsContext);

  useEffect(() => {
    fetchMeetups();
    setIsLoading(false);
    // eslint-disable-next-line
  }, []);

  async function fetchMeetups() {
    const response = await fetch(
      'https://react-tutorial-77259-default-rtdb.europe-west1.firebasedatabase.app/meetups.json'
    );
    const data = await response.json();

    for (const key in data) {
      const meetup = {
        id: key,
        ...data[key],
      };
      meetupsContext.setMeetups((meetups) => [...meetups, meetup]);
    }
  }

  if (isLoading) {
    return (
      <section className='text-white'>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div className='bg-gray-900 text-white'>
      <MainNavigation />
      <Routes>
        <Route path='/' exact element={<AllMeetupsPage />} />
        <Route path='/new-meetup' element={<NewMeetupPage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
