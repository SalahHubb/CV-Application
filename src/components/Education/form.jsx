import { useEffect, useState } from "react";

export default function EducationForm({formOption, educationInfo, setEducationInfo, closeForm}) { 
  const [current, setCurrent] = useState({eduLevel: '', field: '', startDate: '', endDate: '', location: ''}) 

  useEffect(() => {
    if(formOption == 'edit') {
      setCurrent(educationInfo)
    } else if(formOption == 'create') {
        setCurrent({eduLevel: '', field: '', startDate: '', endDate: '', location: ''})
    }

  }, [formOption]);

  const handleChange = (e) => setCurrent({...current, [e.target.name]: e.target.value})
  
  const handleSave = (e) => {
    e.preventDefault();
    if(Object.values(current).some((val) => val === '') ) {
      alert('Please fill all the fields')
      return;
    }
    setEducationInfo(current);
    setCurrent({eduLevel: '', field: '', startDate: '', endDate: '', location: ''})
    closeForm();
  }

  const handleCancel = () => {
    closeForm()
  }
  return (
    <div>
       <div className="option-display-container">{formOption === "edit" ? <div>Edit</div> : <div>add new info</div>}</div>
      <form onSubmit={handleSave}>
        <div>
          <input type="text" name="eduLevel" value={current.eduLevel} placeholder="Enter school/ university" onChange={handleChange}/>
        </div>
        <div>
          <input  type="text" name="field" value={current.field} placeholder="Enter degree/ field of study" onChange={handleChange}/>
        </div>
        <div>
          <input value={current.startDate} name="startDate" type="text" placeholder="Enter Start Date" onChange={handleChange}/>
        </div>
        <div>
          <input value={current.endDate} name="endDate" type="text" placeholder="Enter End Date" onChange={handleChange}/>
        </div>
        <div>
          <input value={current.location} type="text" name="location" placeholder="Enter Location" onChange={handleChange}/>
        </div>
        <div>
          <button type="button" onClick={handleCancel}>Cancel</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}
