import React from 'react';
import {NavLink} from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return(
        <nav>
            <ul>
             <li><NavLink activeClassName={'active-link'}  to="/Profile" className="nav-link"> Profile </NavLink></li>
             <li><NavLink activeClassName={'active-link'}  to="/Dialogs" className="nav-link"> Message </NavLink></li>
             <li><NavLink activeClassName={'active-link'}  to="/News" className="nav-link"> News </NavLink></li>
             <li><NavLink activeClassName={'active-link'}  to="/Music" className="nav-link"> Music </NavLink></li>
             <li><NavLink activeClassName={'active-link'}  to="/Setting" className="nav-link"> Setting </NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;