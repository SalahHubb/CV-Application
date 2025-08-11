import { useState } from "react";
import Option from "../option/option";
import ExperienceForm from "./form";

export default function Experience({ experienceInfo, setExperienceInfo }) {
  const [open, setOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formOption, setFormOption] = useState(null);
  
  function handleToggleOpt() {
    if (showForm) setShowForm(false);
    setOpen(!open);
  }
  
  const handleFormOption = (opt) => {
    setShowForm(true);
    setFormOption(opt);
    setOpen(false);
  };
  
  const closeForm = () => setShowForm(false);

  return (
    <div>
      <div onClick={handleToggleOpt}>
        <h2>Experience</h2>
      </div>
      {
        open && <Option handleFormOption={handleFormOption} />
      }
      {
        showForm && <ExperienceForm formOption={formOption} experienceInfo={experienceInfo} setExperienceInfo={setExperienceInfo} closeForm={closeForm} />
      }
    </div>
  );
}