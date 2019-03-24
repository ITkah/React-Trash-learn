import React from 'react';
import './Dialogs.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import Avatar from '../.././img/avatar.jpg';

const Dialogs = (props) => {
    
    let dialogsElemensts = 
        props.state.dialogsData.map((Dialog,index) => <DialogItem  key={index} name={Dialog.name} id={Dialog.id} /> );

    let MessagesElements = 
        props.state.messagesData.map((Message,index) => <MessageItem key={index} message={Message.message} photo={Avatar} />);

    return(
        <section className="dialogs">
            <div className="dialogs-user">
                { dialogsElemensts }
            </div>
            <div className="dialogs-messages">
                { MessagesElements }
            </div>
        </section>
    );
}

export default Dialogs;