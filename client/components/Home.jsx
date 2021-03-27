import React from 'react';

const Home = () => {
    return (
        <main id="home">
            <h1 className="lg-heading">
                Steven <span className="text-secondary">Nguyen</span>
            </h1>
            <h2 className="sm-heading">
                Web Developer, Programmer, Designer
            </h2>
            <div className="icons">
                <a href="#!">
                    <i className="fab fa-twitter fa-2x"></i>
                </a>
                <a href="#!">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="#!">
                    <i className="fab fa-github fa-2x"></i>
                </a>
            </div>
        </main>
    )
}

export default Home;