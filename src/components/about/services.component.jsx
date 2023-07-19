import { urlFor, client } from "../../client";
import { useState, useEffect } from "react";
import { Wrap } from "../wrap";
import "./services.style.scss";
import "swiper/css";
import "swiper/css/pagination";

const Services = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const query = '*[_type == "about"]';
    client.fetch(query).then((data) => setAbout(data));
  }, []);

  return (
    <div id="services">
      <div className="profiles">
        <h1>My Services</h1>
        <div className="offer">
          <p>
            I offer a comprehensive range of services including backend
            development, front-end development, web design, and graphic design.
          </p>
        </div>
        <div className="mySwiper">
          {about.map((aboutItem, index) => (
            <div className="profile-item" key={aboutItem.title + index}>
              <div>
                <img src={urlFor(aboutItem.imgUrl)} alt={aboutItem.title} />
              </div>
              <h4>{aboutItem.title}</h4>
              <p>{aboutItem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wrap(Services, "about");
