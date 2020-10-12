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
                    {props.firstName} {props.lastName}
                </div>
                <div className="status">
                    <div className={props.isOnline==="online"? 'status-online':'status-offline'}></div>
                    <div className="status-text">
                        {props.isOnline}
                    </div>
                </div>
            </div>
        </figure>
    )
}

Contact.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
};
export default Contact;