import React from 'react';
import './Contact.css';
// Need to npm install prop-types
import PropTypes from 'prop-types';


function Contact(props) {
    return(
        <figure className="Contact">
            <img 
                src={props.avatar} className="avatar"  alt="Random women">
            </img>
            <div className="name-container">
                <div className="name">
                    {props.name}
                </div>
                <div className="status">
                    <div className={props.isOnline? 'status-online':'status-offline'}></div>
                    <div className="status-text">
                        {props.isOnlineString}
                    </div>
                </div>
            </div>
        </figure>
    )
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
};
export default Contact;