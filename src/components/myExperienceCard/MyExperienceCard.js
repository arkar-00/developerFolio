import React, {createRef, useContext} from "react";
import {Fade, Slide} from "react-reveal";
import "./MyExperienceCard.scss";
import StyleContext from "../../contexts/StyleContext";

export default function MyExperienceCard({experience}) {
  const imgRef = createRef();

  const GetDescBullets = ({descBullets}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className="subTitle">
            {item}
          </li>
        ))
      : null;
  };
  const {isDark} = useContext(StyleContext);

  if (!experience.companylogo)
    console.error(`Image of ${experience.company} is missing in education section`);
  return (
    <div>
      <Fade left duration={1000}>
        <div className="education-card">
          {experience && (
            <div className="education-card-left">
              <img
                crossOrigin={"anonymous"}
                ref={imgRef}
                className="education-roundedimg"
                src={experience.companylogo}
                alt={experience.company}
              />
            </div>
          )}
          <div className="education-card-right">
            <div className="education-text-details">
              <h5
                className={
                  isDark
                    ? "dark-mode education-text-subHeader"
                    : "education-text-subHeader"
                }
              >
                {experience.role}
              </h5>
              <p
                className={`${
                  isDark ? "dark-mode" : ""
                } education-text-duration`}
              >
                {experience.date}
              </p>
              <p className="education-text-desc">{experience.desc}</p>
              <div className="education-text-bullets">
                <ul>
                  <GetDescBullets descBullets={experience.descBullets} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="education-card-border"></div>
      </Slide>
    </div>
  );
}
