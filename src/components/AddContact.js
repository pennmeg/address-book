import React from 'react';

class AddContact extends React.Component {
  render () {
    return (
      <form className="contact-form">
        <input className="fullName" name="firstName" type="text" placeholder="First Name"/>
        <input className="fullName" name="lastName" type="text" placeholder="Last Name"/> <br />
        <input className="details" name="companyName" type="text" placeholder="Company"/> <br />
        <input className="details" name="emailAddress" type="text" placeholder="Email Address"/> <br />
        <input className="details" name="phoneNumber" type="number" placeholder="Phone Number"/> <br />
        <button type="submit"><i class="fas fa-plus"></i> Add Contact</button>
      </form>
    );
  }
}

export default AddContact;
