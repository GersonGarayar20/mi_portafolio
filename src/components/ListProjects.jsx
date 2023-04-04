import React from "react";
import { projects } from "./projects";
import CardProject from "./CardProject";

export default function ListProjects() {
  return (
    <ul className="grid md:grid-cols-2 gap-x-8 gap-y-16">
      {projects.map(({ title, description, github, imagen, url, tags }, i) => (
        <CardProject
          key={i}
          title={title}
          description={description}
          url={url}
          github={github}
          imagen={imagen}
          tags={tags}
        />
      ))}
    </ul>
  );
}
