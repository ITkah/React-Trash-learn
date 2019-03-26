import React from 'react';
import './BlockPost.css';
import UserPost from './Post/UserPost';

const BlockPost = (props) => {

    let postsElements = 
        props.postsData.map((Post,index) => <UserPost key={index} message={Post.post} like={Post.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }

    return(
        <div>
            <div className="area-post">
                <div className="area-post_text">
                    <textarea ref={newPostElement} />
                </div>
                <div className="area-post_button">
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className="post-container">
                { postsElements }
            </div>
        </div>
    );
}

export default BlockPost; 