import React from 'react';
import '../scss/main.scss';
import Nav from './Nav.jsx';
import Hero from './Hero.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Nav />
            <Hero />
            <About />
            <Projects />
        </Router>
    )
}

export default App;