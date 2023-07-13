import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { useState, useEffect } from "react";
import { Wrap } from "../wrap";
import "./services.style.scss";

const Services = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const query = '*[_type == "about"]';
    client.fetch(query).then((data) => setAbout(data));
  }, []);
  return (
    <div id="services" className="profiles">
      <h1>My Services</h1>
      <div className="offer">
        <p>
          I offer a comprehensive range of services including backend
          development, front-end development, web design, and graphic design.
        </p>
      </div>

      <div className="services">
        {about.map((about, index) => (
          <motion.div className="profile-item" key={about.title + index}>
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2>{about.title}</h2>
            <p>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Wrap(Services, "about");
