import React from 'react'
import {useAuthContext} from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utils/extractTime';

const Message = ( {message} ) => {
const {authUser} = useAuthContext();
const {selectedConversation} = useConversation();

const fromMe= message.senderId === authUser._id;

const chatClassName = fromMe ? 'chat-end' : 'chat-start';
const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
const bubbleColor = fromMe ? 'bg-pink-600' : 'bg-pink-400';
const formattedTime = extractTime(message.createdAt);

  return (
    <div className={`chat ${chatClassName}`}>
    <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
            <img src={profilePic} alt="lol" />
        </div>
    </div>
    <div className={`chat-bubble text-white ${bubbleColor}`}>{message.message}</div>
    <div className='chat-footer opacity-50 text-xs flex gap-1 items-center text-white'>{formattedTime}</div>
    </div>
  )
}

export default Message
