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

    let newMessageSend = React.createRef();

    let message = () => {
        let mess = newMessageSend.current.value;
        alert(mess);
    }

    return(
        <section className="dialogs">
            <div className="dialogs-user">
                { dialogsElemensts }
            </div>
            <div className="dialogs-messages">
                { MessagesElements }
                <div className="sendMessage">
                    <textarea ref={newMessageSend}></textarea>
                    <button onClick={message}>Send</button>
                </div>
            </div>
        </section>
    );
}

export default Dialogs;