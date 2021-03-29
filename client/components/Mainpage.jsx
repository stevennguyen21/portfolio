import React from 'react';

const Mainpage = () => {
    return (
        <div>
            <div className="overlay-color">
            </div>
            <header>
                <div className="menu-btn">
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                </div>
                <nav className="menu">
                    <div className="menu-branding">
                        <div className="portrait"></div>
                    </div>
                    <ul className="menu-nav">
                        <li className="nav-item">
                            <a href="/" className="nav-link">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/about" className="nav-link">
                                About Me
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/projects" className="nav-link">
                                Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/contact" className="nav-link">
                                Contact Me
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>

        </div>
    )
}

export default Mainpage;