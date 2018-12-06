import React from 'react';

class Contact extends React.Component {
  render () {
    return (
      <li className="contact-infomation">
        <h2><i class="fas fa-user-circle"></i> First Name Last Name</h2>
        <p><i class="fas fa-building"></i> Company Name</p>
        <p><i class="fas fa-at"></i> Email Address</p>
        <p><i class="fas fa-phone"></i> Phone Number</p>
      </li>
    );
  }
}

export default Contact;
