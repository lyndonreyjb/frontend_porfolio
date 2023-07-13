import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import {
  FaHome,
  FaCode,
  FaProjectDiagram,
  FaMailBulk,
  FaInfoCircle,
  FaBriefcase,
} from "react-icons/fa";
export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
    icon: <FaHome />,
  },
  {
    id: 2,
    url: "about",
    text: "about",
    icon: <FaInfoCircle />,
  },
  {
    id: 3,
    url: "services",
    text: "services",
    icon: <FaBriefcase />,
  },
  {
    id: 4,
    url: "projects",
    text: "projects",
    icon: <FaProjectDiagram />,
  },
  {
    id: 5,
    url: "contact",
    text: "contact",
    icon: <FaMailBulk />,
  },
];

export const social = [
  {
    id: 1,
    url: "https://github.com/lyndonreyjb",
    icon: <FaGithub />,
  },
  {
    id: 2,
    url: "https://www.linkedin.com/in/lyndon-rey-bualat/",
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaInstagram />,
  },
  {
    id: 4,
    url: "https://www.twitter.com",
    icon: <FaFacebook />,
  },
  {
    id: 5,
    url: "https://www.twitter.com",
    icon: <FaYoutube />,
  },
];
