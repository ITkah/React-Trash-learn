import React from 'react';
import './Dialogs.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import Avatar from '../.././img/avatar.jpg';

let dialogsData = [
    {id: 1, name: 'Andrew'},
    {id: 2, name: 'Dima'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Ilya'},
    {id: 5, name: 'Den'}
];

let messagesData = [
    {id: 1, message: 'hello'},
    {id: 2, message: 'how are you?'},
    {id: 3, message: 'Fine'}
];

let dialogsElemensts = dialogsData
    .map(Dialog => <DialogItem name={Dialog.name} id={Dialog.id} /> );


let MessagesElements = messagesData
    .map(Message => <MessageItem message={Message.message} photo={Avatar}/>);



const Dialogs = (props) => {
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