import React, { useState, useEffect } from 'react';

const Nav = () => {
    const [sticky, setSticky] = useState(false);

    const listenScrollEvent = (e) => {
        if (window.scrollY > 700) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
    })


    if (sticky) {
        return (
            <div className="nav-container">
                <header>
                    <div className="logo">Steven Nguyen</div>
    
                    <nav className="nav-list">
                        <ul>
                            <li><a href="#">About Me</a></li>
                            <li><a href="#">My Work</a></li>
                            <li><a href="#">Contact Me</a></li>
                        </ul>
                        <div className="menu-btn">
                            <i className="fas fa-bars"></i>
                        </div>
                    </nav>
                </header>
    
                <div className="social-header scrolling">
                    <ul>
                        <li>
                            <a href="#">
                                <i className="fab fa-twitter" alt="twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/stevennguyen44">
                                <i className="fab fa-linkedin" alt="linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.github.com/stevennguyen21">
                                <i className="fab fa-github" alt="github"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )

    } else {
        return (
            <div className="nav-container">
                <header>
                    <div className="logo">Steven Nguyen</div>
    
                    <nav>
                        <ul>
                            <li><a href="#">About Me</a></li>
                            <li><a href="#">My Work</a></li>
                            <li><a href="#">Contact Me</a></li>
                        </ul>
                        <div className="menu-btn">
                            <i className="fas fa-bars"></i>
                        </div>
                    </nav>
                </header>
    
                <div className="social-header">
                    <ul>
                        <li>
                            <a href="#">
                                <i className="fab fa-twitter" alt="twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/stevennguyen44">
                                <i className="fab fa-linkedin" alt="linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.github.com/stevennguyen21">
                                <i className="fab fa-github" alt="github"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Nav;