import React from 'react';
import Header from './components/header/Header.jsx';
import Overview from './components/overview/Overview.jsx';
import Education from './components/education/Education.jsx'; // New component import
import Experience from './components/experience/Experience.jsx';
import Skills from './components/skills/Skills.jsx';
import Projects from './components/projects/Projects.jsx';
import Footer from './components/footer/Footer.jsx';
import './App.css';

const App = () => {
    return (
        <div className="antialiased">
            <Header />
            <main className="container mx-auto px-6 py-12">
                <Overview />
                <Experience />
                <Skills />
                <Projects />
                <Education />
            </main>
            <Footer />
        </div>
    );
};

export default App;