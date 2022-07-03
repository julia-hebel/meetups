import React from 'react';
import { Link } from 'react-router-dom';

function MainNavigation() {
  return (
    <header className='w-full grid grid-cols-2 grid-rows-1 h-12 bg-pink-700'>
      <div className='flex justify-center items-center'>React Meetups</div>
      <nav className='my-auto'>
        <ul className='grid grid-cols-3 mx-2'>
          <li className='w-full text-center border-l border-white'>
            <Link className='p-3' to='/'>
              All meetups
            </Link>
          </li>
          <li className='w-full text-center border-l border-white'>
            <Link className='p-3' to='/new-meetup'>
              New meetup
            </Link>
          </li>
          <li className='w-full text-center border-x border-white'>
            <Link className='p-3' to='/favorites'>
              Favorites
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
