import "./footer.style.scss";
import { social } from "../../data.jsx";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <div className="footer">
      <IconContext.Provider value={{ className: "footer-icons" }}>
        <div className="footer-container">
          <ul className="footer-social-icons">
            {social.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
          <span>© 2023 Lyndon Rey. All Rights Reserved.</span>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Footer;
