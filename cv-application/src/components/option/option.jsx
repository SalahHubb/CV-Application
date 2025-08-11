import React from 'react';

export default function Option({ handleFormOption }) {
  return (
    <div>
      <h3>Select an Option</h3>
      <button onClick={() => handleFormOption('addPersonalDetails')}>Add Personal Details</button>
      <button onClick={() => handleFormOption('addEducation')}>Add Education</button>
      <button onClick={() => handleFormOption('addExperience')}>Add Experience</button>
    </div>
  );
}