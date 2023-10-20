import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'
import avatar2 from './avatar2.png'

/*
* 1 - описать тип MessageType +
* 2 - описать тип MessagePropsType в файле Message.tsx  +
* 3 - в файле Message.tsx отобразить приходящие данные +
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном https://www.figma.com/file/9L5iRbECtW4vAnlUklpgcp/Home-Task-%231?node-id=6%3A65&mode=dev
* */

// нужно создать правильный тип вместо any
export type MessageType = {
    id: number
    user: UserType
    message: CurrentMessageType
}

export type UserType = {
    avatar: string
    name: string
}

export type CurrentMessageType = {
    text: string
    time: string
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar, // можно менять
        name: 'Brad Pitt',  // можно менять
    },
    message: {
        text: 'Hello, she didn’t do anything and rested all day, how are you?', // можно менять
        time: '22:00', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar2, // можно менять
        name: 'Friend Name', // можно менять
    },
    message: {
        text: 'Hello, how are you, what did you do yesterday?', // можно менять
        time: '22:01', // можно менять
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hw}>
                <div className={s2.hwTitle}>Homework #1</div>
                {/*<hr className={s2.hr}/>*/}
                {/*проверка отображения (не менять)*/}
                <div className={s2.dialogs}>
                    <FriendMessage message={friendMessage0}/>
                    <Message message={message0}/>

                    {/*для автоматической проверки дз (не менять)*/}
                    <MessageSender M={Message}/>
                </div>
                <div className={s2.sendSection}>
                    <input className={s2.messageInput} placeholder={"Type a message"} />
                    <button className={s2.sendButton} type={"submit"}>Send</button>
                </div>

            </div>
        </div>
    )
}

export default HW1
