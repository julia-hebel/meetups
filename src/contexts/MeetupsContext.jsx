import React, { useState, createContext } from 'react';

const MeetupsContext = createContext();

export function MeetupsContextProvider(props) {
  const [meetups, setMeetups] = useState([]);

  const values = {
    meetups: meetups,
    setMeetups: setMeetups,
  };

  return (
    <MeetupsContext.Provider value={values}>
      {props.children}
    </MeetupsContext.Provider>
  );
}

export default MeetupsContext;
