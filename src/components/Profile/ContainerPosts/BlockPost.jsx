import React from 'react';
import './BlockPost.css';
import UserPost from './Post/UserPost';

const BlockPost = (props) => {

    let postsElements = 
        props.posts.map(Post => <UserPost message={Post.post} like={Post.likesCount} />);

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