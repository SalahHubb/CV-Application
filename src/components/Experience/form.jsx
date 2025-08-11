import { useEffect, useState } from "react";

export default function ExperienceForm({formOption, experienceInfo, setExperienceInfo, closeForm}) {
  const [current, setCurrent] = useState({company: '', position: '', startDate: '', endDate: '', location: ''})
  
  useEffect(() => {
   if(formOption == 'edit') {
     setCurrent(experienceInfo);
   } else if (formOption == 'create') {
     setCurrent({company: '', position: '', startDate: '', endDate: '', location: ''})
   }
  }, [formOption])

  function handleChange(e) {
   setCurrent({...current, [e.target.name]: e.target.value});
  }
  
  function handleSave(e) {
    e.preventDefault();
    if(Object.values(current).some((val) => val === '')) {
      alert('Please fill all the fields')
      return;
    }
    setExperienceInfo(current);
    setCurrent({company: '', position: '', startDate: '', endDate: '', location: ''})
    closeForm();
  }

  return (
    <div>
       <div className="option-display-container">{formOption === "edit" ? <div>Edit</div> : <div>add new info</div>}</div>
      <form onSubmit={handleSave}>
        <div>
          <input type="text" name="company" value={current.company} placeholder="Enter Company Name" onChange={handleChange}/>
        </div>
        <div>
          <input type="text" name="position" value={current.position} placeholder="Enter Position Title" onChange={handleChange}/>
        </div>
        <div>
          <input type="text" name="startDate" value={current.startDate} placeholder="Enter Start Date" onChange={handleChange}/>
        </div>
        <div>
          <input type="text" name="endDate" value={current.endDate} placeholder="Enter End Date" onChange={handleChange}/>
        </div>
        <div>
          <input type="text" name="location" value={current.location} placeholder="Enter Location" onChange={handleChange}/>
        </div>
        <div>
          <textarea className="description" onChange={handleChange} name="description" value={current.description} placeholder="Enter Description"></textarea>
        </div>
        <div>
          <button type="button" onClick={() => closeForm()}>Cancel</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}
