import React from 'react';

export default function Display({ personalDetails, educationInfo, experienceInfo }) {
  return (
    <div className="display-section">
      <h2>Personal Details</h2>
      <p>Name: {personalDetails.name}</p>
      <p>Email: {personalDetails.email}</p>
      <p>Phone: {personalDetails.phone}</p>

      <h2>Education</h2>
      {educationInfo.map((edu, index) => (
        <div key={index}>
          <p>Degree: {edu.degree}</p>
          <p>Institution: {edu.institution}</p>
          <p>Dates Attended: {edu.dates}</p>
        </div>
      ))}

      <h2>Experience</h2>
      {experienceInfo.map((exp, index) => (
        <div key={index}>
          <p>Job Title: {exp.jobTitle}</p>
          <p>Company: {exp.company}</p>
          <p>Duration: {exp.duration}</p>
        </div>
      ))}
    </div>
  );
}