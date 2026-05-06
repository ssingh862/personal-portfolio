import React, { useEffect, useState } from 'react'
import { IoDesktopSharp } from "react-icons/io5";
import { IoCodeSlashOutline } from "react-icons/io5";
import { FaGears } from "react-icons/fa6";
import { FaGamepad } from "react-icons/fa";
import withLayout from './Layout';



const About = () => {
    const [windowWidth, setWindowWidth] = useState(undefined);
    const [aboutData, setAboutData] = useState({
        title: "About Me",
        paragraphs: [
            "Overall, 4+ years of experience in the development of Web & Enterprise applications using JavaScript Technologies. Thrived in a challenging environment where I can enhance my capabilities, achieve professional excellence and develop skills, accept newer and higher responsibilities and thereby improve and sharpen my creative and analytical skills in the IT field."
        ],
        infoList: [
            { label: "Age", value: "25" },
            { label: "Residence", value: "India" },
            { label: "Freelance", value: "Available" },
            { label: "Address", value: "Rajkot, Gujarat" }
        ],
        myService: {
            title: "My Services",
            serviceItems: [
                {
                    icon: <IoDesktopSharp />,
                    name: "Frontend Development",
                    description:
                        "Developing Frontend Responsive and Dynamic Designs using HTML, CSS, JavaScript, React, NextJS, Bootstrap, Tailwind and PrimeUI"
                },
                {
                    icon: <IoCodeSlashOutline />,
                    name: "Backend Development",
                    description:
                        "Developing RESTful structured API's using Node.js, Express.js, MongoDB, JWT and TypeScript in MVC Architecture"
                },
                {
                    icon: <FaGears />,
                    name: "DevOps",
                    description:
                        "Management, Deployment, Scalability and Monitroting of your Web Apps using Firebase and CloudFlare"
                }

            ]
        }
    })

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div>
            <div

                className="ng-star-inserted"
                style={{}}
            >
                <div

                    id="about-card"
                    className={`${windowWidth <= 1200 ? 'fadeInDown' : 'fadeInLeft'} card-inner  animated active`}
                >
                    <div className="card-wrap">
                        <div className="content about">
                            <div className="title">
                                {aboutData?.title}
                            </div>
                            <div className="row">
                                <div

                                    className="col col-d-6 col-t-6 col-m-12 border-line-v"
                                >
                                    <div className="text-box">
                                        <p >
                                            {" "}
                                            {aboutData?.paragraphs}
                                        </p>
                                    </div>
                                </div>
                                <div

                                    className="col col-d-6 col-t-6 col-m-12 border-line-v"
                                >
                                    <div className="info-list">
                                        <ul >
                                            {aboutData?.infoList?.map((item, index) => (
                                                <li key={index}>
                                                    <strong >
                                                        {item?.label}
                                                    </strong>{" "}
                                                    {item?.value}
                                                </li>
                                            ))}

                                        </ul>
                                    </div>
                                </div>
                                <div className="clear" />
                            </div>
                        </div>
                        <div className="content services">
                            <div className="title">
                                {aboutData?.myService?.title}
                            </div>
                            <div

                                className="row service-items border-line-v"
                            >
                                {aboutData?.myService?.serviceItems?.map((item, index) =>
                                (
                                    <div
                                        key={index}
                                        className="col col-d-6 col-t-6 col-m-12 border-line-h"
                                    >
                                        <div className="service-item">
                                            <div className="icon">
                                                <span
                                                    className='about-icon'

                                                >{item?.icon}
                                                </span>
                                            </div>
                                            <div className="name">
                                                <span >
                                                    {" "}
                                                    {item?.name}
                                                </span>
                                            </div>
                                            <div className="desc">
                                                <div >
                                                    <p >
                                                        {" "}
                                                        {item?.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="clear" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withLayout(About)