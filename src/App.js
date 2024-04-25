import React, { useEffect, useState } from 'react';
import { displayPerson, displayCriminal } from './apis/apis.js';
import GuessButtons from './components/guessbuttons.js';
import RefreshButton from './components/refreshbutton.js';
import './App.css';

function App() {;
  const [profileData, setProfileData] = useState(null);
  const [selectedType, setSelectedType] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const randomChoice = Math.random() < 0.5 ? 'person' : 'criminal';

      

      if (randomChoice === 'person') {
        const data = await displayPerson();
        setProfileData(data.props);
        setSelectedType('person');
      } else {
        const data = await displayCriminal();
        setProfileData(data.props);
        setSelectedType('criminal');
      }
    };

    fetchData();
  }, [setProfileData, setSelectedType]);

  return (
    <div className='App'>
      <h1>Criminal or Not?</h1>
      {profileData ? (
        <>
          <h2 className='Intro_Paragraph'>Hi! Welcome to this basic guessing game I have created. Simply select whether the person shown below is or isn't a criminal! All criminals are sources using the FBI's websites API and the Non-Criminals are from the randomuser.me API </h2>
          {profileData.name && <h3 className='Person_Name'>{profileData.name}</h3>}
          {profileData.image && <img className='personimg' src={profileData.image} alt={profileData.name} />}
          <GuessButtons isCriminal={selectedType === 'criminal'} />
          <div className='Refresh_Button'><RefreshButton /></div>
          
        </>
      ) : (
        <p>No profile data available.</p>
      )}
    </div>
  );
}

export default App;
