import React from 'react';
import './Profile.css';
import BlockPosts from './ContainerPosts/BlockPost';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return(
        <section className="profile">
            <ProfileInfo />
            <BlockPosts />
        </section>
    );
}

export default Profile;