import React from 'react';
import Hello from '../.././img/white-hello.svg';
import './Header.css';

const Header = () => {
    return(
        <header className="header" id="header">
          <img src={Hello} className="logo" alt="none" />
          <h2 className="name-logo">HelloChat</h2>
        </header>
    );
}

export default Header;