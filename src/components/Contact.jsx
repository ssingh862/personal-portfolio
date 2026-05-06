import React, { useEffect, useState } from "react";
import withLayout from "./Layout";

const icontactAddress = [
  { label: "Address", value: "Rajkot, India" },
  { label: "Email", value: "sandeep1916518@gmail.com", fontSize: "0.8rem" },
  { label: "Phone", value: "+91 9067876459" },
  { label: "Freelance", value: "Available" },
];
const Contact = () => {
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
      <div
        id="contacts-card"
        className={`${windowWidth <= 1200 ? "fadeInDown" : "fadeInLeft"} card-inner  animated contacts active`}
      >
        <div className="card-wrap">
          <div className="content contacts">
            <div className="title">Get in Touch</div>
            <div className="row">
              <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3691.5079212506384!2d70.7600276!3d22.2966226!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cbc39add5ce5%3A0xdf4064227d5d5137!2sShivalik%208!5e0!3m2!1sen!2sin!4v1778044481537!5m2!1sen!2sin"
                  width="100%"
                  height={220}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                />
                <div className="info-list" style={{ marginTop: 25 }}>
                  <ul>
                    {icontactAddress?.map((item, index) => (
                      <li>
                        <strong>{item?.label}</strong>
                        <span style={{ fontSize: `${item?.fontSize}` }}>
                          {item?.value}
                        </span>{" "}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="clear" />
            </div>
          </div>
          <div className="content contacts">
            <div className="title">Contact Form</div>
            <div className="row">
              <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                <div className="contact_form">
                  <form
                    noValidate=""
                    className="ng-untouched ng-pristine ng-invalid"
                  >
                    <div className="row">
                      <div className="col col-d-6 col-t-6 col-m-12">
                        <div className="group-val">
                          <input
                            type="text"
                            name="name"
                            formcontrolname="name"
                            placeholder="Full Name"
                            className="ng-untouched ng-pristine ng-invalid"
                          />
                        </div>
                      </div>
                      <div className="col col-d-6 col-t-6 col-m-12">
                        <div className="group-val">
                          <input
                            type="text"
                            name="email"
                            formcontrolname="email"
                            placeholder="Email Address"
                            className="ng-untouched ng-pristine ng-invalid"
                          />
                        </div>
                      </div>
                      <div className="col col-d-12 col-t-12 col-m-12">
                        <div className="group-val">
                          <textarea
                            name="message"
                            formcontrolname="message"
                            placeholder="Your Message"
                            className="ng-untouched ng-pristine ng-invalid"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="align-left">
                      <button type="submit" className="button">
                        <span className="text">Send Message</span>
                        <span className="arrow" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="clear" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withLayout(Contact);
