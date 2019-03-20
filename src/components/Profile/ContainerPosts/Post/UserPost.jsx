import React from 'react';
import Avatar from '../../../.././img/avatar.jpg';
import './UserPost.css';

const UserPost = (props) => {
    return( 
        <div className="post-block">
            <div className="post-state">
                <div className="post-state_avatar">
                    <img src={Avatar} alt="avatar"/>
                </div>
                <div className="post-state_message">
                    <p>{props.message}</p>
                </div>
                <div className="post-state_like">
                    <span>Like {props.like}</span>
                </div>
            </div>
        </div>
    );
}

export default UserPost; 