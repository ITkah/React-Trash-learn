import React from 'react';
import './MessageItem.css';

const MessageItem = (props) => {
    return(
        <div className="dialogs-messages_user">
            <div className="dialogs-profile-img">
                <img src={props.photo} alt="profile-dialog" className="dialogs-img" />
            </div>
            <div className="dialogs-profile-mes">
                <p>{props.message}</p>
            </div>
        </div>
    );
}

export default MessageItem;