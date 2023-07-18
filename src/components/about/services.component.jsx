import { urlFor, client } from "../../client";
import { useState, useEffect } from "react";
import { Wrap } from "../wrap";
import "./services.style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useMediaQuery } from "react-responsive";

const Services = () => {
  const [about, setAbout] = useState([]);
  const isMobile = useMediaQuery({ maxWidth: 900 });

  useEffect(() => {
    const query = '*[_type == "about"]';
    client.fetch(query).then((data) => setAbout(data));
  }, []);

  const getSlidesPerView = () => {
    if (isMobile) {
      return 1;
    } else {
      return 3;
    }
  };

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
        <Swiper
          slidesPerView={getSlidesPerView()}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper">
          {about.map((aboutItem, index) => (
            <SwiperSlide key={aboutItem.title + index}>
              <div className="profile-item">
                <div>
                  <img src={urlFor(aboutItem.imgUrl)} alt={aboutItem.title} />
                </div>

                <h3>{aboutItem.title}</h3>

                {/* <p>{aboutItem.description}</p> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Wrap(Services, "about");
