import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Nav from "../navBar/Nav";
import firstImage from "../assets/first-image.png";
import secondImage from "../assets/second-image.png";
import project1 from "../assets/Rectangle 29.png";
import { LetContact } from "./LetContact";
import { Footer } from "../footer/Footer";
import { onValue, ref } from "firebase/database";
import { analytics } from "../config/fireBaseConfig";
export const Jobs = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [data, setData] = React.useState([]);
  useEffect(() => {
    const jobsRef = ref(analytics, "openPositions");
    console.log(jobsRef);
    const unsubscribe = onValue(jobsRef, (snapshot) => {
      const val = snapshot.val();
      console.log(val);
      if (val) setData(Object.values(val));
    });

    return () => unsubscribe();
  }, []);
  // const getJobs = ref(analytics, 'openPositions/');
  console.log(data);
  return (
    <>
      <header>
        <Nav />
        <div className="servicesHeader">
          <div>
            <div className="leftSection">
              <h1 className="bigTitle">{t("Careers.title")}</h1>
              <p className="paragraph">{t("Careers.subtitle")}</p>
            </div>
            <div className="headerImg">
              <img src={firstImage} alt="firstImage" className="first-image" />
              <img
                src={secondImage}
                alt="secondImage"
                className="second-image"
              />
            </div>
          </div>
        </div>
      </header>
      <section className="jobContent">
        <div className="jobContainer">
          <h3 className="subTitle openPositionsTitle">{t("Careers.jobsOpportunities.title")}</h3>
          <div className="job ">
            {data.map((job, index) => (
              <div href={job.link} className="job-card" key={index}>
                <h2 className="jobTitle">{job.jobTitle}</h2>
                <i class="fi fi-ss-marker"></i> <span className="location paragraph job-description">{job.location}</span>
                <p className="job-description paragraph">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr />
      <LetContact />
      <Footer />
    </>
  );
};
