import React from 'react';
import './BlockPost.css';
import UserPost from './Post/UserPost';

const BlockPost = (props) => {

    let postsData = [
        {id: 1, post: 'Hi, how are you ?', likesCount: 10},
        {id: 2, post: 'I okey !', likesCount: 12},
        {id: 3, post: 'Hello Wourld', likesCount: 129},
        {id: 4, post: 'Hello Planet', likesCount: 56},
        {id: 5, post: 'i love Js', likesCount: 56}
    ];

    let postsElements = postsData
        .map(Post => <UserPost message={Post.post} like={Post.likesCount} />);

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
                { postsElements }
            </div>
        </div>
    );
}

export default BlockPost; 