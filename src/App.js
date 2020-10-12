import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact 
        firstName = "Julie"
        lastName = "Mendez"
        avatar = "https://randomuser.me/api/portraits/women/40.jpg"
        isOnline = "online"
      />
      <Contact 
        firstName = "Sue"
        lastName = "Meyers"
        avatar = "https://randomuser.me/api/portraits/women/75.jpg"
        isOnline = "offline"
      />
      <Contact 
        firstName = "Chris"
        lastName = "Jones"
        avatar = "https://randomuser.me/api/portraits/men/9.jpg"
        isOnline = "online"
        />

    </div>
  );
}

export default App;
