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
        <h1>My Tools and Skills</h1>
      </div>

      <div className="skills">
        {skills
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((skill, index) => (
            <div className="skills-item" key={skill.name + index}>
              <div>
                <img src={urlFor(skill.icon)} alt={skill.name} />
                <p>{skill.name}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Wrap(Skills, "skills");
