import { useState } from "react";
import Option from "../option/option";
import ExperienceForm from "./form";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FaBriefcase } from "react-icons/fa";

export default function Experience({ experienceInfo, setExperienceInfo }) {
  const [open, setOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formOption, setFormOption] = useState(null);

  function handleToggleOpen() {
    if (showForm == true) {
      setShowForm(false);
      setOpen(false)  
    } else{
        setOpen(!open);
    }
    
  }

  function handleFormOption(opt) {
    setShowForm(true);
    setFormOption(opt);
    setOpen(false);
  }

  const closeForm = () => setShowForm(false);

  return (
    <div >
      <div onClick={handleToggleOpen} className="tab">
         <FaBriefcase size={30}/>
        <h2>Experience</h2>
        {
          open ? <IoIosArrowDown /> : <IoIosArrowUp />
         }
      </div>
      {open && <Option handleFormOption={handleFormOption} />}
      {showForm && (
        <ExperienceForm
          formOption={formOption}
          experienceInfo={experienceInfo}
          setExperienceInfo={setExperienceInfo}
          closeForm={closeForm}
        />
      )}
    </div>
  );
}
