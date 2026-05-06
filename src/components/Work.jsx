import React, { useEffect, useState } from "react";
import withLayout from "./Layout";

const filterOptions = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Node.js",
    value: "nodejs",
  },
  {
    label: "React",
    value: "react",
  },
  {
    label: "NextJS",
    value: "nextjs",
  },
  {
    label: "Graphql",
    value: "graphql",
  },
];

const Works = () => {
  const [windowWidth, setWindowWidth] = useState(undefined);
  const [activeTab, setActiveTab] = useState("all");
  const [works, setWorks] = useState([
    {
      name: "FusionHome",
      category: "NextJS",
      value: "nextjs",
      imageUrl: "/fusionhome.png",
      websiteUrl: "https://fusionhome.ai/",
    },
    {
      name: "Studio FusionHome",
      category: "NextJS",
      value: "nextjs",
      imageUrl: "/studio.png",
      websiteUrl: "https://studio.fusionhome.ai/",
    },
    {
      name: "Travel Agents",
      category: "NextJS",
      value: "nextjs",
      imageUrl: "/sgtravel.png",
      websiteUrl: "https://sgtravelagents.com/",
    },
    {
      name: "SG Elektrik",
      category: "NextJS",
      value: "nextjs",
      imageUrl: "/sgelectrik.png",
      websiteUrl: "https://sgelectrik-web.vercel.app/",
    },
    {
      name: "Maison Purl",
      category: "NextJS",
      value: "nextjs",
      imageUrl: "/maisonpurl.png",
      websiteUrl: "https://www.maisonpurl.com/",
    },
    {
      name: "FusinHome Pro",
      category: "NextJS",
      value: "nextjs",
      imageUrl: "/profusionhome.png",
      websiteUrl: "https://pro.fusionhome.ai/",
    },
    {
      name: "Personal Portfolio",
      category: "React",
      value: "react",
      imageUrl: "/myself.png",
      websiteUrl:
        "https://personal-portfolio-4u6rxrmpc-sandeep-singhs-projects-47417e9e.vercel.app/about",
    },
  ]);

  const [filterWorks, setFilterWorks] = useState(works);

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

  useEffect(() => {
    if (activeTab !== "all") {
      const filterWork = works?.filter((item) => item?.value === activeTab);
      setFilterWorks(filterWork);
    }
  }, [activeTab]);

  return (
    <div>
      <div
        id="works-card"
        className={`${windowWidth <= 1200 ? "fadeInDown" : "fadeInLeft"} card-inner  animated active`}
      >
        <div className="card-wrap">
          <div className="content works">
            <div className="title">Recent Works</div>
            <div className="filter-menu filter-button-group">
              {filterOptions?.map((tab, index) => (
                <div
                  key={index}
                  className={`${activeTab === tab?.value ? "active" : ""} f_btn ng-star-inserted`}
                >
                  <label>
                    <input
                      onClick={() => setActiveTab(tab?.value)}
                      type="radio"
                      name="fl_radio"
                      className="ng-untouched ng-pristine ng-valid"
                    />{" "}
                    {tab?.label}
                  </label>
                </div>
              ))}
            </div>
            <div className="row grid-items border-line-v">
              {filterWorks?.map((item, index) => (
                <div
                  key={index}
                  className="col col-d-6 col-t-6 col-m-12 grid-item ng-star-inserted"
                >
                  <div className="box-item">
                    <div className="image">
                      <a
                        target="_blank"
                        className="has-popup-image"
                        href={item?.websiteUrl}
                      >
                        <img alt="" src={item?.imageUrl} />
                        <span className="info">
                          <span className="ion ion-image" />
                        </span>
                      </a>
                    </div>
                    <div className="desc">
                      <a
                        target="_blank"
                        className="name has-popup-image"
                        href={item?.websiteUrl}
                      >
                        {item?.name}
                      </a>
                      <div className="category">{item?.category}</div>
                    </div>
                    {/**/}
                    {/**/}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withLayout(Works);
