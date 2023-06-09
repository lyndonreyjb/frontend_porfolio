import React, { useState, useEffect } from "react";
import { urlFor, client } from "../../client";
import "./skills.style.scss";
import { Wrap } from "../wrap";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const query = '*[_type == "skills"]';
    client.fetch(query).then((data) => setSkills(data));
  }, []);
  return (
    <div className="skill-container">
      <div className="skill-description">
        <div>
          <h1>My skills and tools</h1>
        </div>
      </div>
      <div className="skills">
        {skills.map((skills, index) => (
          <div className="skills-item" key={skills.name + index}>
            <img src={urlFor(skills.icon)} alt={skills.name} />
            <h4> {skills.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wrap(Skills, "skills");
