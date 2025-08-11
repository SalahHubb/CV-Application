import { useState } from "react";
import Option from "../option/option";
import PersonalForm from "./form";
import { MdPerson } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export default function Personal({ personalInfo, setPersonalInfo }) {
  const [tabClicked, setTabClicked] = useState(false);
  const [formOpened, setFormOpened] = useState(false);
  const [formOption, setFormOption] = useState(null);

  const handleTabClick = () => {
    if (formOpened == true) {
      setTabClicked(false);
      setFormOpened(false);
    } else {
      setTabClicked(!tabClicked);
    }
  };

  function handleFormOption(opt) {
    setFormOpened(true);
    setFormOption(opt);
    setTabClicked(false);
  }

  const closeForm = () => setFormOpened(false);

  return (
    <div>
      <div onClick={handleTabClick} className="tab">
        <MdPerson size={44} />

        <h2>Personal</h2>
        {tabClicked ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </div>
      {tabClicked && <Option handleFormOption={handleFormOption} />}

      {formOpened && (
        <PersonalForm
          formOption={formOption}
          closeForm={closeForm}
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />
      )}
    </div>
  );
}
