import React, { useState, useEffect } from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting as staticGreeting } from "../../portfolio";
import { fade } from "react-reveal";
import FeelingProud from "./FeelingProud";
import { db } from "../../firebase"; // Ensure you created this file in Step 4

export default function Greeting(props) {
  const theme = props.theme;

  // Use local state to handle dynamic updates
  const [greeting, setGreeting] = useState(staticGreeting);

  useEffect(() => {
    // Real-time listener for the 'greeting' document in Firestore
    const unsubscribe = db
      .collection("content")
      .doc("greeting")
      .onSnapshot(
        (doc) => {
          if (doc.exists) {
            // Merge dynamic data with static settings (like resumeLink)
            setGreeting((prevState) => ({
              ...prevState,
              ...doc.data(),
            }));
          }
        },
        (error) => {
          console.error("Firebase fetch error:", error);
        }
      );

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  return (
    <fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                <Button
                  text="⭐ Star Me On Github"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                />
              </div>
              {/* <div className="button-greeting-div">
              <Button text="Contact Me" href="#contact" />
              <Button text="See My Resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </fade>
  );
}
