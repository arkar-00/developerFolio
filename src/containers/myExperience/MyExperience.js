import React from "react";
import "./MyExperience.scss";
import {workExperiences} from "../../portfolio";
import MyExperienceCard from "../../components/myExperienceCard/MyExperienceCard";

export default function MyExperience() {
  if (workExperiences.display) {
    return (
      <div className="education-section" id="experience">
        <h1 className="education-heading">Experience</h1>
        <div className="education-card-container">
          {workExperiences.experience.map((experience, index) => (
            <MyExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
