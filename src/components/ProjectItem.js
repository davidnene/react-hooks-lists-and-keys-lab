import React from "react";

function ProjectItem({ name, about, technologies }) {
  let techItems = technologies.map((tech, index) => (
    <span key={index}>{tech}</span>
  ))
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techItems}
      </div>
    </div>
  );
}

export default ProjectItem;
