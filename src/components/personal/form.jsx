import { useEffect, useState } from "react";

export default function PersonalForm({
  formOption,
  personalInfo,
  setPersonalInfo,
  closeForm,
}) {
  const [current, setCurrent] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    if (formOption === "create") {
      setCurrent({ name: "", email: "", phone: "", address: "" });
    } else if (formOption == "edit") {
      setCurrent(personalInfo);
    }
  }, [formOption]);

  function handleChange(e) {
    setCurrent({ ...current, [e.target.name]: e.target.value });
  }

  function handleSave(e) {
    e.preventDefault();
    if (Object.values(current).some((val) => val === "")) {
      alert("Please fill all the fields");
      return;
    }
    setPersonalInfo(current);
    setCurrent({ name: "", email: "", phone: "", address: "" });
    closeForm();
  }

  return (
    <div className="personal">
      <div className="option-display-container">{formOption === "edit" ? <div>Edit</div> : <div>add new info</div>}</div>
      <form onSubmit={handleSave}>
        <div>
          <input
            type="text"
            name="name"
            value={current.name}
            placeholder="Full Name"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={current.email}
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            value={current.phone}
            placeholder="Phone Number"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="address"
            value={current.address}
            placeholder="Address"
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={() => closeForm()}>
          Cancel
        </button>
        <button>Save</button>
      </form>
    </div>
  );
}
