import React from 'react';
import img from '../images/chess.png';
import vibeify from '../images/vibeify.gif';
import reviews from '../images/reviews.gif';

const Projects = () => {
    return (
        <section className="portfolio">

            <div className="portfolio-container transition3">
                <div className="portfolio-left">
                    <div className="inner">
                        <p className="subtitle">Chess</p>

                        <p className="featured-title">
                            <a href="https://www.github.com/stevennguyen21/chess">
                                github.com/stevennguyen21/chess
                            </a>
                        </p>
                        <p className="featured-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid rerum dicta atque sed animi dolorum eos cum exercitationem minima aut quod ipsum eaque accusantium culpa, impedit qui delectus non fuga!</p>
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
                        <p className="featured-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid rerum dicta atque sed animi dolorum eos cum exercitationem minima aut quod ipsum eaque accusantium culpa, impedit qui delectus non fuga!</p>
                    </div>
                </div>
                <a href='#'>
                    <img className="project" src={vibeify} alt="vibeify" />
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
                        <p className="featured-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid rerum dicta atque sed animi dolorum eos cum exercitationem minima aut quod ipsum eaque accusantium culpa, impedit qui delectus non fuga!</p>
                    </div>
                </div>
                <a href='#'>
                    <img className="project" src={reviews} alt="reviews" />
                </a>
            </div>

        </section>
    )
}

export default Projects;