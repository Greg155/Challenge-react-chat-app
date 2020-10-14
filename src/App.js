import React from 'react';
import Contact from './components/Contact';
import ContactList from './components/ContactList';

function App() {
  return (
    <div className="App">
      <Contact 
        name = "Julie Mendez"
        avatar = "https://randomuser.me/api/portraits/women/40.jpg"
        online
      />
      <Contact 
        name = "Sue Meyers"
        avatar = "https://randomuser.me/api/portraits/women/75.jpg"
        online = {false}
      />
      <Contact 
        name = "Chris Jones"
        avatar = "https://randomuser.me/api/portraits/men/9.jpg"
        
        />
      <ContactList/>

    </div>
  );
}

export default App;
