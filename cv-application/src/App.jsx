import React, { useState } from 'react';
import PersonalDetails from './components/PersonalDetails';
import Education from './components/Education';
import Experience from './components/Experience';
import Display from './components/Display';
import './styles/main.css';

export default function App() {
  const [personalInfo, setPersonalInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState([]);
  const [experienceInfo, setExperienceInfo] = useState([]);

  return (
    <div className="app-container">
      <div className="form-section">
        <PersonalDetails personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
        <Education educationInfo={educationInfo} setEducationInfo={setEducationInfo} />
        <Experience experienceInfo={experienceInfo} setExperienceInfo={setExperienceInfo} />
      </div>
      <div className="display-section">
        <Display personalInfo={personalInfo} educationInfo={educationInfo} experienceInfo={experienceInfo} />
      </div>
    </div>
  );
}