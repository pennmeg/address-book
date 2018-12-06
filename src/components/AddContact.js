import React from 'react';

class AddContact extends React.Component {
  render () {
    return (
      <form className="contact-form">
        <h2>Add Contact Information</h2>
        <input type="text" />
        <button type="submit"></button>
      </form>
    );
  }
}

export default AddContact;
