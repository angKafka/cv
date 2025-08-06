import React, { useState, useRef } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import resumeData from '/src/data/resumeData.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('languages');
    const chartRef = useRef(null);

    const chartData = {
        labels: resumeData.skills[activeCategory],
        datasets: [{
            label: 'Skills',
            data: resumeData.skills[activeCategory].map(() => Math.random() * 80 + 20),
            backgroundColor: 'rgba(245, 158, 11, 0.6)',
            borderColor: 'rgba(245, 158, 11, 1)',
            borderWidth: 1,
        }]
    };

    const options = {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false },
        },
        scales: {
            x: { beginAtZero: true, display: false },
            y: { ticks: { font: { size: 14, family: 'Inter' }, color: '#475569' } },
        },
    };

    const handleFilterClick = (category) => {
        setActiveCategory(category);
    };

    return (
        <section id="skills" className="mb-24">
            <h2 className="text-3xl font-bold text-slate-800 section-title">Technical Skills</h2>
            <p className="text-lg mb-8 text-center">
                This chart showcases my technical skills. You can click the buttons below to filter by category and see the specific technologies I have worked with. This provides a quick way to see if my skill set aligns with your needs.
            </p>
            <div className="flex justify-center flex-wrap gap-2 mb-8">
                {Object.keys(resumeData.skills).map((category) => (
                    <button
                        key={category}
                        className={`skill-filter-btn px-4 py-2 rounded-full text-sm font-medium border border-slate-200 hover:bg-slate-100 ${activeCategory === category ? 'active bg-amber-500 text-white' : 'bg-white text-slate-600'}`}
                        onClick={() => handleFilterClick(category)}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}
                    </button>
                ))}
            </div>
            <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg">
                <div className="chart-container">
                    <Bar ref={chartRef} data={chartData} options={options} />
                </div>
            </div>
        </section>
    );
};

export default Skills;