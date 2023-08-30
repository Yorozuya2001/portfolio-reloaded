"use client";

import Card from "../Card/Card";
import React, { useState, useEffect } from "react";
import styles from "./Cards.module.css";

interface Project {
  name: string;
  url: string;
  repo: string;
}

const Cards = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await fetch("/api/projects");
      const projectsData = await data.json();
      setProjects(projectsData);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-16">
      <>
        {projects.length > 0 ? (
          projects.map((project: Project, index: number) => {
            return (
              <Card
                key={index}
                name={project.name}
                url={project.url}
                repo={project.repo}
              />
            );
          })
        ) : (
          <p>Error al cargar proyectos :(</p>
        )}
      </>
    </div>
  );
};

export default Cards;
