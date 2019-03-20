import React from 'react';
import './Footer.css';


const Footer = () => {

    let year = new Date();
    
    return(
        <div className="copyright">copyright <span>{year.getFullYear()}</span></div>
    );
}

export default Footer;