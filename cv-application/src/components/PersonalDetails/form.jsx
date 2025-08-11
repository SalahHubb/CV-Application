import React, { useState } from 'react';

export default function PersonalDetailsForm({ personalInfo, setPersonalInfo, closeForm }) {
  const [name, setName] = useState(personalInfo.name || '');
  const [email, setEmail] = useState(personalInfo.email || '');
  const [phone, setPhone] = useState(personalInfo.phone || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    setPersonalInfo({ name, email, phone });
    closeForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Phone:</label>
        <input 
          type="tel" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Save</button>
      <button type="button" onClick={closeForm}>Cancel</button>
    </form>
  );
}