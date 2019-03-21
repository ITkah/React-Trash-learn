import React from 'react';
import {NavLink} from 'react-router-dom';
import './Dialogs.css';
import Avatar from '../.././img/avatar.jpg';

const DialogUser = (props) => {
    let path = "/Dialogs/" + props.id;
    return(
        <div className="dialogs-user_block">
            <h3><NavLink to={path}>{props.name}</NavLink></h3>
        </div>
    );
}

const DialogMessage = (props) => {
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



let dialogsData = [
    {id: 1, name: 'Andrew'},
    {id: 2, name: 'Dima'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Ilya'},
    {id: 5, name: 'Den'}
];

let dialogsElemensts = [
    <DialogUser name={dialogsData[0].name} id={dialogsData[0].id}/>,
    <DialogUser name={dialogsData[1].name} id={dialogsData[1].id}/>,
    <DialogUser name={dialogsData[2].name} id={dialogsData[2].id}/>,
    <DialogUser name={dialogsData[3].name} id={dialogsData[3].id}/>,
    <DialogUser name={dialogsData[4].name} id={dialogsData[4].id}/>
];

let MessagesData = [
    {id: 1, message: 'hello'},
    {id: 2, message: 'how are you ?'},
];

const Dialogs = (props) => {
    return(
        <section className="dialogs">
            <div className="dialogs-user">
                { dialogsElemensts }
            </div>
            <div className="dialogs-messages">
                <DialogMessage message={MessagesData[0].message} photo={Avatar}/>
                <DialogMessage message={MessagesData[1].message} photo={Avatar}/>
            </div>
        </section>
    );
}

export default Dialogs;