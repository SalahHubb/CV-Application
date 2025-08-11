import { useState } from "react";
import Option from "../option/option";
import EducationForm from "./form";
import { FaGraduationCap } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export default function Education({educationInfo, setEducationInfo}) {
  const [open, setOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formOption, setFormOption] = useState(null)
  
  function handleToggleOpt() {
    if(showForm == true) {
      setShowForm(false);
      setOpen(false)
    } else {
      setOpen(!open);
    }
  }
  
  const handleFormOption = (opt) => {
    setShowForm(true);
    setFormOption(opt);
    setOpen(false);
  } 
  
  const closeForm = () => setShowForm(false);   

  return (
    <div>
       <div onClick={handleToggleOpt} className="tab">
        <FaGraduationCap size={40}/>
         <h2>Education</h2>
         {
          open ? <IoIosArrowDown /> : <IoIosArrowUp />
         }
       </div>
       {
          open && <Option handleFormOption={handleFormOption}/>
       }
       {
        showForm && <EducationForm formOption={formOption} educationInfo={educationInfo} setEducationInfo={setEducationInfo} closeForm={closeForm}/>
       }
    </div>
  );
}
