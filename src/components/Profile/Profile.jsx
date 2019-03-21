import React from 'react';
import './Profile.css';
import BlockPosts from './ContainerPosts/BlockPost';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    let postsData = [
        {id: 1, post: 'Hi, how are you ?', likesCount: 10},
        {id: 2, post: 'I okey !', likesCount: 12},
        {id: 3, post: 'Hello Wourld', likesCount: 129},
        {id: 4, post: 'Hello Planet', likesCount: 56},
        {id: 5, post: 'i love Js', likesCount: 56}
    ];

    return(
        <section className="profile">
            <ProfileInfo />
            <BlockPosts posts={postsData}/>
        </section>
    );
}

export default Profile;