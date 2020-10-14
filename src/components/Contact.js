import React from 'react';
import './Contact.css';
// Need to npm install prop-types
import PropTypes from 'prop-types';


class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            online : props.online
        };
    }

    render(){
        return(
            <figure className="Contact">
                <img 
                    src={this.props.avatar} className="avatar"  alt="Random women">
                </img>
                <div className="name-container">
                    <div className="name">
                        {this.props.name}
                    </div>
                    <div className="status"
                        onClick={event=> {
                            const newOnline = !this.state.online;
                            this.setState({ online: newOnline});
                            }
                        }>
                        <div className={this.state.online? 'status-online':'status-offline'}></div>
                        <div className="status-text">{this.state.online? 'Online':'Offline'}
                        </div>
                    </div>
                </div>
            </figure>
        )
    }  
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
};
export default Contact;