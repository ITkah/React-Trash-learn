import React from 'react';
import './ProfileInfo.css';
import Avatar from '../../.././img/avatar.jpg';

const ProfileInfo = (props) => {
    return(
        <div className="profile-info">
            <div className="profile-info-photo">
                <img src={Avatar} alt="avatar" />
            </div>
            <div className="profile-info-text">
                <p>name: Ilya Tkah</p>
                <p>age: 19</p>
                <p>city: Dnipro</p>
            </div>
        </div>
    );
}

export default ProfileInfo;