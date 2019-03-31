import React from 'react';
import './BlockPost.css';
import UserPost from './Post/UserPost';
import {addPostActionCreater, updateNewPostTextCreater} from '../../../redux/profile-reduser';

const BlockPost = (props) => {

    let postsElements = 
        props.postsData.map((Post,index) => <UserPost key={index} message={Post.post} like={Post.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreater());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextCreater(text);
        props.dispatch(action);
    }

    return(
        <div>
            <div className="area-post">
                <div className="area-post_text">
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
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