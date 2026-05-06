import React, { useEffect, useState } from "react";
import { FaBriefcase } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { FaFlag } from "react-icons/fa";
import { IoCodeSlashOutline } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import withLayout from "./Layout";

const Resume = () => {
  const [resumeData, setResumeData] = useState({
    title: "Experience",
    icon: <FaBriefcase />,
    items: [
      {
        date: "July'24 - Present",
        name: "Full Stack Developer",
        company: "Proffesional Soft-Tech",
        description:
          "Leverage Full Stack expertise to design and build robust web applications",
      },
      {
        date: "June'22 - July'24",
        name: "React Developer",
        company: "Proffesional Soft-Tech",
        description:
          "Three Years of Mastery: Celebrating My Expertise as a React.js Developer",
      },
      {
        date: "Jan'22 - May'22",
        name: "Software Intern",
        company: "Proffesional Soft-Tech",
        description:
          "I have completed my internship in Proffesional Soft-Tech as a MERN stack developer.",
      },
    ],
    education: {
      title: "Education",
      icon: <FaUniversity />,
      items: [
        {
          date: "June'18 - Aug'21",
          name: "B.Tech (Computer Engineering) - RK University",
          company: "Rajkot",
          description:
            "I have completed my graduation in Computer Engineering from RK University.",
        },
      ],
    },
    mySkill: {
      title: "My Skills",
      icon: <FaGear />,
      items: [
        { name: "Backend (MongoDB, Node.js, Express.js)", percentage: "90%" },
        { name: "Frontend ( ReactJS, NextJS)", percentage: "80%" },
        {
          name: "UI (HTML, CSS, SCSS, Bootstrap, Tailwind, MaterialUI)",
          percentage: "75%",
        },
      ],
    },
    communicationSkill: {
      title: "Communication Skills",
      icon: <FaFlag />,
      items: [
        { name: "English", percentage: "80%" },
        { name: "Gujarati", percentage: "100%" },
        { name: "Hindi", percentage: "100%" },
      ],
    },
    skillDetails: {
      title: "Skill Details",
      icon: <IoCodeSlashOutline />,
      items: [
        { name: "ReactJS", percentage: "90%" },
        { name: "NextJS", percentage: "80%" },
        { name: "Node.js", percentage: "70%" },
        { name: "TypeScript", percentage: "75%" },
        { name: "JavaScript", percentage: "85%" },
        { name: "HTML / CSS", percentage: "95%" },
      ],
    },
    knowlage: {
      title: "Knowledge",
      icon: <FaThList />,
      items: [
        { name: "Web Development" },
        { name: "Web API's" },
        { name: "Web Design" },
        { name: "Website Hosting" },
        { name: "Git & GitHub" },
        { name: "MongoDB" },
      ],
    },
  });
  const [windowWidth, setWindowWidth] = useState(undefined);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      id="resume-card"
      className={`${windowWidth <= 1200 ? "fadeInDown" : "fadeInLeft"} card-inner  animated active`}
    >
      <div className="card-wrap">
        <div className="content resume">
          <div className="title">Resume</div>
          <div className="row">
            <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
              <div className="resume-title border-line-h">
                <div className="icon">
                  <span>
                    <FaBriefcase />
                  </span>
                </div>
                <div className="name">{resumeData?.title}</div>
              </div>

              <div className="resume-items">
                {resumeData?.items?.map((item, index) => (
                  <div
                    className={`${index === 0 ? "active" : ""} resume-item border-line-h `}
                  >
                    <div className="date">{item?.date}</div>
                    <div className="name">{item?.name}</div>
                    <div className="company">{item?.company}</div>
                    <p>{item?.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
              <div className="resume-title border-line-h">
                <div className="icon">
                  <span>{resumeData?.education?.icon}</span>
                </div>
                <div className="name">{resumeData?.education?.title}</div>
              </div>
              <div className="resume-items">
                {resumeData?.education?.items?.map((item, index) => (
                  <div className="resume-item border-line-h">
                    <div className="date">{item?.date}</div>
                    <div className="name">{item?.name}</div>
                    <div className="company">{item?.company}</div>
                    <p>{item?.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>
        <div className="content skills">
          <div className="title">{resumeData?.mySkill?.title}</div>
          <div className="row">
            <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
              <div className="skills-list">
                <div className="skill-title border-line-h">
                  <div className="icon">
                    <span>{resumeData?.mySkill?.icon}</span>
                  </div>
                  <div className="name">Categories</div>
                </div>
                <ul>
                  {resumeData?.mySkill?.items?.map((item, index) => (
                    <li className="border-line-h">
                      <div className="name">{item?.name}</div>
                      <div className="progress">
                        <div
                          className="percentage"
                          style={{ width: `${item?.percentage}` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
              <div className="skills-list dotted">
                <div className="skill-title border-line-h">
                  <div className="icon">
                    <span>{resumeData?.communicationSkill?.icon}</span>
                  </div>
                  <div className="name">
                    {resumeData?.communicationSkill?.title}
                  </div>
                </div>
                <ul>
                  {resumeData?.communicationSkill?.items?.map((item, index) => (
                    <li className="border-line-h">
                      <div className="name">{item?.name}</div>
                      <div className="progress">
                        <div
                          className="percentage"
                          style={{ width: `${item?.percentage}` }}
                        />
                        <span className="dg">
                          <span />
                          <span />
                          <span />
                          <span />
                          <span />
                          <span />
                          <span />
                          <span />
                          <span />
                          <span />
                        </span>
                        <span className="da" style={{ width: 291 }}>
                          <span />
                          <span />
                          <span />
                          <span />
                          <span />
                          <span />
                          <span />
                          <span />
                          <span />
                          <span />
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
              <div className="skills-list circles">
                <div className="skill-title border-line-h">
                  <div className="icon">
                    <span>{resumeData?.skillDetails?.icon}</span>
                  </div>
                  <div className="name">{resumeData?.skillDetails?.title}</div>
                </div>
                <ul>
                  {resumeData?.skillDetails?.items?.map((item, index) => (
                    <li>
                      <div className="name">{item?.name}</div>
                      <div className="progress p90">
                        <span>{item?.percentage}</span>
                        <div className="slice">
                          <div className="bar" />
                          <div className="fill" />
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
              <div className="skills-list list">
                <div className="skill-title border-line-h">
                  <div className="icon">
                    <span>{resumeData?.knowlage?.icon}</span>
                  </div>
                  <div className="name">{resumeData?.knowlage?.title}</div>
                </div>
                <ul>
                  {resumeData?.knowlage?.items?.map((item, index) => (
                    <li>
                      <div className="name">{item?.name}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withLayout(Resume);
