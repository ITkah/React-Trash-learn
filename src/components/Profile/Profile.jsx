import React from 'react';
import './Profile.css';
import BlockPosts from './ContainerPosts/BlockPost';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return(
        <section className="profile">
            <ProfileInfo />
            <BlockPosts postsData={props.state.postsData}/>
        </section>
    );
}

export default Profile;