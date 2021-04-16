import React from 'react';
import img from '../images/chess.png';
import vibeify from '../images/vibeify.gif';
import reviews from '../images/reviews.png';
import dateSelection from '../images/dateSelection.gif';

const Projects = () => {
    return (
        <section className="portfolio">
            <div className="portfolio-header">
                Software Applications
            </div>

            <div className="portfolio-container transition3">
                <div className="portfolio-left">
                    <div className="inner">
                        <p className="subtitle">Chess</p>

                        <p className="featured-title">
                            <a href="https://www.github.com/stevennguyen21/chess">
                                github.com/stevennguyen21/chess
                            </a>
                        </p>
                        <p className="featured-desc">A recreation of chess with multiplayer functionality using web sockets</p>
                    </div>
                </div>
                <a href='#'>
                    <img className="project" src={img} alt="chess" />
                </a>
            </div>
            <div className="portfolio-container transition3">
                <div className="portfolio-left">
                    <div className="inner">
                        <p className="subtitle">Vibe-ify</p>

                        <p className="featured-title">
                            <a href="https://www.github.com/stevennguyen21/Vibe-ify">
                                github.com/stevennguyen21/Vibe-ify
                            </a>
                        </p>
                        <p className="featured-desc">Application for users to fine tune their Spotify recommendations based on various parameters such as mood, tempo, energy, etc.</p>
                    </div>
                </div>
                <a href='#'>
                    <img className="project" src={vibeify} alt="vibeify" />
                </a>
            </div>
            <div className="portfolio-container transition3">
                <div className="portfolio-left">
                    <div className="inner">
                        <p className="subtitle">HomeStay Hotline</p>

                        <p className="featured-title">
                            <a href="https://www.github.com/HomeStay-Hotline/reservations-service">
                                github.com/HomeStay-Hotline/reservations-service
                            </a>
                        </p>
                        <p className="featured-desc">Service oriented back-end architecture calendar booking component able to handle large web traffic</p>
                    </div>
                </div>
                <a href='#'>
                    <img className="project" src={reviews} alt="reviews" />
                </a>
            </div>
            <div className="portfolio-container transition3">
                <div className="portfolio-left">
                    <div className="inner">
                        <p className="subtitle">Home2Go</p>

                        <p className="featured-title">
                            <a href="https://www.github.com/Home2Go/reviews-service">
                                github.com/Home2Go/reviews-service
                            </a>
                        </p>
                        <p className="featured-desc">Open-source accomadation booking service made with test driven development using Jest and Enzyme</p>
                    </div>
                </div>
                <a href='#'>
                    <img className="project" src={dateSelection} alt="reviews" />
                </a>
            </div>

        </section>
    )
}

export default Projects;