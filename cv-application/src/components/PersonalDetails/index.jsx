import { useState } from "react";
import PersonalDetailsForm from "./form";

export default function PersonalDetails() {
  const [showForm, setShowForm] = useState(false);
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleEdit = () => {
    setShowForm(true);
  };

  const handleSave = (details) => {
    setPersonalDetails(details);
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <div>
      <h2>Personal Details</h2>
      {showForm ? (
        <PersonalDetailsForm
          initialDetails={personalDetails}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <div>
          <p>Name: {personalDetails.name}</p>
          <p>Email: {personalDetails.email}</p>
          <p>Phone: {personalDetails.phone}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}