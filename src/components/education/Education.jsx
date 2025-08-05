import React from "react";
import educationData from "/src/data/educationData.js";

const Education = () => (
    <section id="education" className="mb-24">
        <h2 className="text-3xl font-bold text-slate-800 section-title">Education</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
            {educationData.education.map((edu, index) => ( // The .map() method is called here
                <div key={index} className="mb-4 last:mb-0">
                    <h3 className="text-xl font-bold text-slate-800">{edu.degree}</h3>
                    <p className="text-slate-600 font-medium">{edu.university}</p>
                    <p className="text-sm text-slate-500">{edu.year}</p>
                </div>
            ))}
        </div>
    </section>
);

export default Education;