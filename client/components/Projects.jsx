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
                        <p className="subtitle">Project Name</p>

                        <p className="featured-title">Featured</p>
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
                        <p className="subtitle">Project Name</p>

                        <p className="featured-title">Featured</p>
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
                        <p className="subtitle">Project Name</p>

                        <p className="featured-title">Featured</p>
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