import { useState } from 'react'
import './styles/App.css'
import Personal from './components/personal'
import Education from './components/Education'
import Experience from './components/Experience'
import CVTemplate from './components/cv-template'
import usePersonalInfo from './components/custom-hook/usePersonal'
import useEducationInfo from './components/custom-hook/useEducation'
import useExperienceInfo from './components/custom-hook/useExperience'

function App() {
  const [personalInfo, setPersonalInfo] = usePersonalInfo();
  const [educationInfo, setEducationInfo] = useEducationInfo();
  const [experienceInfo, setExperienceInfo] = useExperienceInfo();

  return <div className="app">

    <div className="cv-forms">
         <h1>Build Your CV</h1>
        <Personal personalInfo={personalInfo} setPersonalInfo= {setPersonalInfo}/>
        <Education educationInfo={educationInfo} setEducationInfo={setEducationInfo} />
        <Experience experienceInfo={experienceInfo} setExperienceInfo={setExperienceInfo}/>
    </div>
    <div className="cv-template">
       <CVTemplate personalInfo={personalInfo} educationInfo={educationInfo} experienceInfo={experienceInfo} />
    </div>
  </div>
}

export default App
