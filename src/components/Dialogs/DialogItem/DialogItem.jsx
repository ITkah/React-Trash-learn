import React from 'react';
import {NavLink} from 'react-router-dom';
import './DialogItem.css';

const DialogItem = (props) => {
    let path = "/Dialogs/" + props.id;
    return(
        <div className="dialogs-user_block">
            <h3><NavLink activeClassName={'active-link'} to={path}>{props.name}</NavLink></h3>
        </div>
    );
}

export default DialogItem;