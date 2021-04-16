import React from 'react';

const Footer = () => {
    const handleScrollUp = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    };
    return (
        <div className="footer-container">
            <div className="copyright-container">
                <span className="copyright">Steven Nguyen &copy; 2021</span>
            </div>
            <div className="arrow-container"
                role="button"
                onClick={() => {
                    handleScrollUp();
                }}
            >
                <i className="fas fa-angle-double-up"></i>
            </div>
        </div>
    )
}

export default Footer;