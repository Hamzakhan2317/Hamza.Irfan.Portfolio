import React, { useEffect, useState } from "react";
import "./about.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { UrlFor, client } from "../../client";
import { AppWrap } from "../../wrapper";

const About = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((res) => {
      setAbout(res);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        I know that <span> Good Development </span> <br />
        means &nbsp;
        <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {about.map((aboutData, index) => {
          return (
            <>
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: "tween" }}
                className="app__profile-item"
                key={aboutData.title + index}
              >
                <img src={UrlFor(aboutData.imgUrl)} alt={aboutData.title} />
                <h2 className="bold-text" style={{ marginTop: 20 }}>
                  {aboutData.title}
                </h2>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {aboutData.description}
                </p>
              </motion.div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default AppWrap(About, "about", "app__whitebg");
