import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import EducationImg from "./EducationImg";
import { degrees as staticDegrees } from "../../portfolio";
import { db } from "../../firebase";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

function Education(props) {
  const [degrees, setDegrees] = useState(staticDegrees);
  const theme = props.theme;

  useEffect(() => {
    const unsubscribe = db
      .collection("content")
      .doc("education")
      .onSnapshot((doc) => {
        if (doc.exists) {
          setDegrees(doc.data());
        }
      });
    return () => unsubscribe();
  }, []);

  return (
    <div className="education-main">
      <Header theme={theme} />
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div">
              <EducationImg theme={theme} />
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Education
              </h1>
              <h3
                className="resume-subTitle"
                style={{ color: theme.secondaryText }}
              >
                Basic Qualification and Certifcations
              </h3>
            </div>
          </div>
        </Fade>
        <Educations theme={theme} degrees={degrees} />
        <Certifications theme={theme} />
      </div>
      <Footer theme={theme} />
    </div>
  );
}

export default Education;
