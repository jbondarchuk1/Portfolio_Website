import React from 'react';
import './Contact.css';

function Contact () {

        return (
        <div className='contact'>
            <div className="login-box">
            <h2>CONTACT</h2>
            <form method='POST'>
                <div className="user-box">
                    <input type="text" name="Name" required="true" />
                    <label>Name</label>
                </div>
                <div className="user-box">
                    <input type="text" name="EmailAddress" required="true" />
                    <label>Email address</label>
                </div>
                <div className="user-box">
                    <input type="text" name="Subject" required="true" />
                    <label>Subject</label>
                </div>
                <div className="user-box">
                    <textarea rows="4" cols="40" name="Message" required="true"></textarea>
                    <label>Message</label>
                </div>
                <input type='submit' href='/contact' id='a'/>
            </form>
            </div>
        </div>
        )
    }

export default Contact;