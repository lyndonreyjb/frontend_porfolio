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
      <div className="title">
        <h3>My tech stack</h3>
      </div>

      <div className="skills">
        {skills.map((skills, index) => (
          <div className="skills-item" key={skills.name + index}>
            <div>
              <img src={urlFor(skills.icon)} alt={skills.name} />
              <p> {skills.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wrap(Skills, "skills");
