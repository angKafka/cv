import React, { useState } from 'react';
import resumeData from '/src/data/resumeData.js';

const ExperienceItem = ({ job }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="timeline-item cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <div className="job-header">
                <h3 className="text-xl font-bold text-slate-800">{job.title}</h3>
                <p className="font-medium text-slate-600">{job.company} | {job.location}</p>
                <p className="text-sm text-slate-500 mb-2">{job.period}</p>
            </div>
            {isOpen && (
                <ul className="job-details list-disc list-inside text-slate-600 space-y-2 pl-4 mt-4">
                    {job.details.map((detail, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: detail }} />
                    ))}
                </ul>
            )}
        </div>
    );
};

const Experience = () => (
    <section id="experience" className="mb-24">
        <h2 className="text-3xl font-bold text-slate-800 section-title">Experience</h2>
        <div id="experience-timeline" className="relative border-l-2 border-slate-200 pl-8 space-y-12">
            {resumeData.experience.map((job, index) => (
                <ExperienceItem key={index} job={job} />
            ))}
        </div>
    </section>
);

export default Experience;