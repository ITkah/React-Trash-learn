import React from 'react';
import './Profile.css';
import BlockPosts from './ContainerPosts/BlockPost';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return(
        <section className="profile">
            <ProfileInfo />
            <BlockPosts 
                postsData={props.profilePage.postsData} 
                newPostText={props.profilePage.newPostText}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText} 
            />
        </section>
    );
}

export default Profile;