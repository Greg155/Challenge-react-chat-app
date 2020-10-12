import React from 'react';
import Contact from './Contact';

const users = [
    {
      name: 'Robert Reyes',
      avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
      isOnline: false,
      isOnlineString : "offline"
    },
    {
      name: 'Nellie Caldwell',
      avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
      isOnline: true,
      isOnlineString : "online"
    },
    {
      name: 'Vernon Mason',
      avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
      isOnline: true,
      isOnlineString : "online"
    },
    {
      name: 'Erica Hunt',
      avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
      isOnline: false,
      isOnlineString : "offline"
    },
    {
      name: 'Juanita Phillips',
      avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
      isOnline: true,
      isOnlineString : "online"
    }
  ];

const ContactList = () => (
    <div>
        {users.map(item => (
            <Contact name={item.name} avatar={item.avatar} isOnline={item.isOnline} isOnlineString={item.isOnlineString}/>
            ))}
    </div>

);

export default ContactList;