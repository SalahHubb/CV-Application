import React, { useState } from 'react';

export default function EducationForm({ formOption, educationInfo, setEducationInfo, closeForm }) {
  const [degree, setDegree] = useState(educationInfo.degree || '');
  const [institution, setInstitution] = useState(educationInfo.institution || '');
  const [dates, setDates] = useState(educationInfo.dates || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEducationInfo = { degree, institution, dates };
    setEducationInfo(updatedEducationInfo);
    closeForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Degree:</label>
        <input
          type="text"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Institution:</label>
        <input
          type="text"
          value={institution}
          onChange={(e) => setInstitution(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Dates Attended:</label>
        <input
          type="text"
          value={dates}
          onChange={(e) => setDates(e.target.value)}
          required
        />
      </div>
      <button type="submit">Save</button>
      <button type="button" onClick={closeForm}>Cancel</button>
    </form>
  );
}