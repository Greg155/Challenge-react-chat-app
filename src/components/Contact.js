import React from 'react';
import './Contact.css';

function Contact() {
    return(
        <figure className="Contact">
            <img 
                src="https://randomuser.me/api/portraits/women/40.jpg"
                className="avatar"  alt="Random women">
            </img>
            <div className="name-container">
                <div className="name">
                    Julia Mendez
                </div>
                <div className="status">
                    <div className="status-online"></div>
                    <div className="status-text">
                    online
                     </div>
                </div>
            </div>
        </figure>
    )
}

export default Contact;