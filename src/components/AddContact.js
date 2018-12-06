import React from 'react';

class AddContact extends React.Component {
  render () {
    return (
      <form className="contact-form">
        <h2>Add Contact Information</h2>
        <input name="firstName" type="text" placeholder="First Name"/>
        <input name="lastName" type="text" placeholder="Last Name"/>
        <input name="emailAddress" type="text" placeholder="Email Address"/>
        <input name="phoneNumber" type="number" placeholder="Phone Number"/>
        <input name="companyName" type="text" placeholder="Company"/>
        <button type="submit">+ Add Contact</button>
      </form>
    );
  }
}

export default AddContact;
