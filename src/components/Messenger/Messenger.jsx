import React from 'react';
import Message from './Message/Message';
import MessageForm from './MessageForm/MessageForm';
import style from './Messenger.module.css';
import MsrActor from './MsrActor/MsrActor';

const Messenger = (props) => {

    // console.log('RENDER Messenger');
    // console.log(props);

    let state = props.messengerPage;
    let mapMsrActors = state.messengerActors.map(actor => (<div key={actor.id}> 
        <MsrActor id={actor.id} name={actor.name} />
        </div>
    ));

    let mapMsrMessages = state.MsrMessages.map(message => (
        <div key={message.id}> 
        <Message id={message.id} message={message.message} />
        </div>
    ));

    return (
        <div className={style.messengerWrapper}>
            <div className={style.dialogConteiner}>
                {mapMsrActors}
            </div>
            <div className={style.dialogsItemConteiner}>
                <div>
                    {mapMsrMessages}
                </div>
                <div>
                    <MessageForm addMessage={props.sendMessage}/>
                </div>
            </div>
        </div>
    );
}

export default Messenger;