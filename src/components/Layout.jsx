// components/Layout.js
import React, { useEffect, useState } from "react";
import { FaUserTie } from "react-icons/fa6";
import { BiNotepad } from "react-icons/bi";
import { IoCodeSlashOutline } from "react-icons/io5";
import { MdPermContactCalendar } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const withLayout = (WrappedComponent) => {
  const Layout = (props) => {
    const location = useLocation();
    const { pathname } = location;
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
      <div>
        <div>
          <div className="page new-skin ">
            <div className="preloader " style={{ display: "none" }}>
              <div className="centrize full-width ">
                <div className="vertical-center ">
                  <div className="spinner " style={{ display: "none" }}>
                    <div className="double-bounce1 " />
                    <div className="double-bounce2 " />
                  </div>
                </div>
              </div>
            </div>
            <div className="background gradient ">
              <ul className="bg-bubbles ">
                <li className="" />
                <li className="" />
                <li className="" />
                <li className="" />
                <li className="" />
                <li className="" />
                <li className="" />
                <li className="" />
                <li className="" />
                <li className="" />
              </ul>
            </div>
            <div
              data-animation-in={
                windowWidth <= 1200 ? "fadeInDown" : "fadeInLeft"
              }
              data-animation-out={
                windowWidth <= 1200 ? "fadeOutUp" : "fadeOutLeft"
              }
              className="container opened -routeAnimations"
              style={{}}
            >
              <app-menu-bar className="">
                <header className="header">
                  <div className="profile">
                    <div className="title">Sandeep Singh</div>
                    <div className="subtitle subtitle-typed">Freelancer</div>
                    <span className="typed-cursor">|</span>
                  </div>
                  <div className="top-menu">
                    <ul>
                      <li
                        routerlinkactive="active"
                        className={pathname === "/about" ? "active" : ""}
                      >
                        <Link routerlink="/about" to="/about">
                          <span className="icon">
                            <FaUserTie />
                          </span>
                          <span className="link">About</span>
                        </Link>
                      </li>
                      <li
                        routerlinkactive="active"
                        className={pathname === "/resume" ? "active" : ""}
                      >
                        <Link routerlink="/resume" to="/resume">
                          <span className="icon">
                            <BiNotepad />
                          </span>
                          <span className="link">Resume</span>
                        </Link>
                      </li>
                      <li
                        routerlinkactive="active"
                        className={pathname === "/works" ? "active" : ""}
                      >
                        <Link routerlink="/works" to="/works">
                          <span className="icon ">
                            <IoCodeSlashOutline />
                          </span>
                          <span className="link">Works</span>
                        </Link>
                      </li>
                      <li
                        routerlinkactive="active"
                        className={pathname === "/contact" ? "active" : ""}
                      >
                        <Link routerlink="/contact" to="/contact">
                          <span className="icon">
                            <MdPermContactCalendar />
                          </span>
                          <span className="link">Contact</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </header>
              </app-menu-bar>
              <app-profile-card className="">
                <div id="home-card" className="card-started">
                  <div className="profile no-photo">
                    <div
                      className="slide"
                      style={{ backgroundImage: "url(/sandeep.png)" }}
                    />
                    <div className="title">Sandeep Singh</div>

                    <div
                      className="subtitle subtitle-typed"
                      style={{ marginTop: 5 }}
                    >
                      MERN Stack Developer
                    </div>
                    <span className="typed-cursor">|</span>
                    <div className="social">
                      <a target="_blank" href="https://github.com/ssingh862">
                        <span className="fa">
                          <FaGithub />
                        </span>
                      </a>
                      <a
                        target="_blank"
                        href="https://www.instagram.com/royalsingh9223/"
                      >
                        <span className="fa ">
                          <FaInstagram />
                        </span>
                      </a>
                      <a
                        target="_blank"
                        href="www.linkedin.com/in/sandeep-singh-595946206"
                      >
                        <span className="fa ">
                          <FaLinkedin />
                        </span>
                      </a>
                    </div>
                    <div className="lnks">
                      <a href="/SandeepSingh.pdf" download="" className="lnk">
                        <span className="text">Download CV</span>
                      </a>
                      <Link
                        routerlink="/contact"
                        className="lnk discover"
                        to="/contact"
                      >
                        <span className="text">Contact Me</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </app-profile-card>
              <WrappedComponent {...props} pathname={pathname} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return Layout;
};

export default withLayout;
