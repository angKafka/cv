import React from 'react';
import resumeData from '/src/data/resumeData.js';

const ProjectCard = ({ project }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-xl font-bold text-slate-800">{project.name}</h3>
        <p className="text-sm text-slate-500 mb-4">{project.date}</p>
        <p className="text-slate-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
                <span key={index} className="bg-amber-100 text-amber-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">{tech}</span>
            ))}
        </div>
    </div>
);

const Projects = () => (
    <section id="projects" className="mb-12">
        <h2 className="text-3xl font-bold text-slate-800 section-title">Projects</h2>
        <div id="projects-grid" className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
            {resumeData.projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    </section>
);

export default Projects;