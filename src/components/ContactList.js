import React from 'react';
import Contact from './Contact';


class ContactList extends React.Component {
  render () {
    return (
      <ul className="contact-list">
        <Contact />
      </ul>
    );
  }
}

export default ContactList;
