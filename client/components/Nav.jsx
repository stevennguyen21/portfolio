import React from 'react';

const Nav = () => {
    return (
        <div className="nav-container">
            <header>
                <div className="logo">Steven Nguyen</div>

                <nav>
                    <ul>
                        <li><a href="#">My work</a></li>
                        <li><a href="#">My skills</a></li>
                        <li><a href="#">Contact me</a></li>
                    </ul>
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
                        <a href="#">
                            <i className="fab fa-linkedin" alt="linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fab fa-github" alt="github"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;