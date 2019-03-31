import React from 'react';
import './Dialogs.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import Avatar from '../.././img/avatar.jpg';
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/dialogs-reduser';

const Dialogs = (props) => {
    
    let state = props.store.getState().messagesPage;

    let dialogsElemensts = 
        state.dialogsData.map((Dialog,index) => <DialogItem  key={index} name={Dialog.name} id={Dialog.id} /> );

    let MessagesElements = 
        state.messagesData.map((Message,index) => <MessageItem key={index} message={Message.message} photo={Avatar} />);

    let newMessageBody = state.newMessageBody;

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    let sendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    return(
        <section className="dialogs">
            <div className="dialogs-user">
                { dialogsElemensts }
            </div>
            <div className="dialogs-messages">
                { MessagesElements }
                <div className="sendMessage">
                    <textarea onChange={onNewMessageChange} value={newMessageBody}></textarea>
                    <button onClick={sendMessageClick}>Send</button>
                </div>
            </div>
        </section>
    );
}

export default Dialogs;