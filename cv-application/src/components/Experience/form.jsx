import React, { useState } from 'react';

export default function ExperienceForm({ experienceInfo, setExperienceInfo, closeForm, formOption }) {
  const [jobTitle, setJobTitle] = useState(formOption ? experienceInfo.jobTitle : '');
  const [company, setCompany] = useState(formOption ? experienceInfo.company : '');
  const [duration, setDuration] = useState(formOption ? experienceInfo.duration : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExperience = { jobTitle, company, duration };
    setExperienceInfo(newExperience);
    closeForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Job Title:</label>
        <input 
          type="text" 
          value={jobTitle} 
          onChange={(e) => setJobTitle(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Company:</label>
        <input 
          type="text" 
          value={company} 
          onChange={(e) => setCompany(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Duration:</label>
        <input 
          type="text" 
          value={duration} 
          onChange={(e) => setDuration(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Save</button>
      <button type="button" onClick={closeForm}>Cancel</button>
    </form>
  );
}