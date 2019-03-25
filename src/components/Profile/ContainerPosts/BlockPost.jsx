import React from 'react';
import './BlockPost.css';
import UserPost from './Post/UserPost';

const BlockPost = (props) => {
    debugger;

    let postsElements = 
        props.postsData.map((Post,index) => <UserPost key={index} message={Post.post} like={Post.likesCount} />);

    let newPostElement = React.createRef();

    let hello = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    return(
        <div>
            <div className="area-post">
                <div className="area-post_text">
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div className="area-post_button">
                    <button onClick={hello}>Add Post</button>
                </div>
            </div>
            <div className="post-container">
                { postsElements }
            </div>
        </div>
    );
}

export default BlockPost; 