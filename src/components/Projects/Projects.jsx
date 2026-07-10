import { useState } from "react";

import SectionTitle from "../SectionTitle/SectionTitle";

import projects from "../../data/projects";

import ProjectCard from "./ProjectCard";

import ProjectModal from "./ProjectModal";

import "./Projects.css";

const Projects = () => {

const [selectedProject,setSelectedProject]=useState(null);

return(

<section className="projects">

<div className="projects-container">

<SectionTitle

subtitle="My Work"

title="Featured Projects"

/>

<div className="projects-grid">

{

projects.map(project=>(

<ProjectCard

key={project.id}

project={project}

setSelectedProject={setSelectedProject}

/>

))

}

</div>

</div>

{

selectedProject &&

<ProjectModal

project={selectedProject}

closeModal={()=>setSelectedProject(null)}

/>

}

</section>

)

}

export default Projects;