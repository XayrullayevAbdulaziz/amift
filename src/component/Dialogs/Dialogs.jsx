import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);
    const addMessage = () => {
props.addMessage()
    }
    const onChangeMessage=(e)=>{
        props.onChangeMessage(e.target.value)
    }
    if (!props.isAuth) return <Redirect to={'/SignIn'}/>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}


            </div>
            <div>
                <textarea  onChange={onChangeMessage} value={props.state.newMessage}></textarea>

            </div>
            <div>
                <button type='button' onClick={addMessage}>add</button>
            </div>

        </div>
    )
}

export default Dialogs;