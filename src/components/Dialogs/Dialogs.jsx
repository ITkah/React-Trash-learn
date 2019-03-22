import React from 'react';
import './Dialogs.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import Avatar from '../.././img/avatar.jpg';

const Dialogs = (props) => {
    let dialogsElemensts = 
    props.dialogsData.map(Dialog => <DialogItem name={Dialog.name} id={Dialog.id} /> );

    let MessagesElements = 
    props.messagesData.map(Message => <MessageItem message={Message.message} photo={Avatar} />);

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