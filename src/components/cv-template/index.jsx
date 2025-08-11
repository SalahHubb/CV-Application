import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

export default function CVTemplate({
  personalInfo,
  educationInfo,
  experienceInfo,
}) {
  return (
    <>
      <header className="cv-header">
        <h1>{personalInfo.name}</h1>
        <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
          <MdEmail />
          <div>{personalInfo.email}</div>
        </div>
        <div className="contact">
          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            {" "}
            <FaPhoneAlt /> <div>{personalInfo.phone}</div>
          </div>
          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            {" "}
            <CiLocationOn /> <div>{personalInfo.address}</div>
          </div>
        </div>
      </header>

      <div className="edu-preview">
        <h3>Education</h3>
        <div className="detail">
          <div className="left">
            <div>
              {educationInfo.startDate} {" -"} {educationInfo.endDate}
            </div>
            <div>{educationInfo.location}</div>
          </div>
          <div className="right">
            <h4>{educationInfo.school}</h4>
            <div>{educationInfo.field}</div>
          </div>
        </div>
      </div>

      <div className="prof-preview">
        <h3>Professional Experience</h3>
        <div className="detail">
          <div className="left">
            <div>
              {experienceInfo.startDate} {" -"} {experienceInfo.endDate}
            </div>
            <div>{experienceInfo.location} </div>
          </div>
          <div className="right">
            <h4>{experienceInfo.company} </h4>
            <div>{experienceInfo.position} </div>
            <div style={{maxWidth: '200px'}}>{experienceInfo.description} </div>
          </div>
        </div>
      </div>
    </>
  );
}
