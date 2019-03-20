import React from 'react';
import './BlockPost.css';
import UserPost from './Post/UserPost';

const BlockPost = (props) => {

    let postsData = [
        {id: 1, post: 'Hi, how are you ?', likesCount: 10},
        {id: 2, post: 'I okey !', likesCount: 12},
        {id: 3, post: 'Hello Wourld', likesCount: 129}
    ];

    return( 
        <div>
            <div className="area-post">
                <div className="area-post_text">
                    <textarea></textarea>
                </div>
                <div className="area-post_button">
                    <button>Add Post</button>
                </div>
            </div>
            <div className="post-container">
                <UserPost message={postsData[0].post} like={postsData[0].likesCount} />
                <UserPost message={postsData[1].post} like={postsData[1].likesCount} />
                <UserPost message={postsData[2].post} like={postsData[2].likesCount} />
            </div>
        </div>
    );
}

export default BlockPost; 