import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    password: '',
    contactNumber: '',
    organizationName: '',
    organizationType: '',
    organizationAddress: '',
    area: '',
    governorate: '',
  });

  const handleChange = (event) => {
    setFormData({
     ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First name:</label><br />
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          /><br />
          <label htmlFor="lastName">Last name:</label><br />
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          /><br />
          <label htmlFor="gender">Gender:</label><br />
          <input
            type="text"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          /><br />
          <label htmlFor="email">Email:</label><br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          /><br />
          <label htmlFor="password">Password:</label><br />
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          /><br />
          <label htmlFor="contactNumber">Contact number:</label><br />
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
          /><br />
          <label htmlFor="organizationName">Organization name:</label><br />
          <input
            type="text"
            id="organizationName"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleChange}
          /><br />
          <label htmlFor="organizationType">Organization type:</label><br />
          <input
            type="text"
            id="organizationType"
            name="organizationType"
            value={formData.organizationType}
            onChange={handleChange}
          /><br />
          <label htmlFor="organizationAddress">Organization address:</label><br />
          <input
            type="text"
            id="organizationAddress"
            name="organizationAddress"
            value={formData.organizationAddress}
            onChange={handleChange}
            
          /><br />
          <label htmlFor="area">Area:</label><br />
          <input
            type="text"
            id="area"
            name="area"
            value={formData.area}
            onChange={handleChange}
          /><br />
          <label htmlFor="governorate">Governorate:</label><br />
          <input
            type="text"
            id="governorate"
            name="governorate"
            value={formData.governorate}
            onChange={handleChange}
          /><br />
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default App;