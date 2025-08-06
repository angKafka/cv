import React from 'react';

const Overview = () => (
    <section id="overview" className="mb-24">
        <h2 className="text-3xl font-bold text-slate-800 section-title">Overview</h2>
        <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
                <p className="text-lg leading-relaxed mb-6">
                    Experienced and results-driven Backend Developer with 4.9 years of expertise in architecting, developing, and optimizing scalable, event-driven microservices using Java, Spring Boot, and Kafka. Skilled in cloud platforms (GCP, Azure), CI/CD automation, and secure API development. Strong track record in enhancing system performance, maintaining distributed consistency, and collaborating with cross-functional teams to deliver robust enterprise solutions.                </p>
            </div>
            <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-amber-500">
                    <h3 className="font-bold text-slate-800">Latency Reduction</h3>
                    <p className="text-2xl font-bold text-amber-600">40%</p>
                    <p className="text-sm text-slate-500">Optimized backend search at Disney.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-amber-500">
                    <h3 className="font-bold text-slate-800">Processing Efficiency</h3>
                    <p className="text-2xl font-bold text-amber-600">35%</p>
                    <p className="text-sm text-slate-500">Refactored logic at Mercedes-Benz.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-amber-500">
                    <h3 className="font-bold text-slate-800">Code Quality</h3>
                    <p className="text-2xl font-bold text-amber-600">40%</p>
                    <p className="text-sm text-slate-500">Improved via SonarQube integration.</p>
                </div>
            </div>
        </div>
    </section>
);

export default Overview;