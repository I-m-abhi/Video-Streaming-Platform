import React, { useEffect, useState } from 'react';
import LiveChatMsg from './LiveChatMsg';
import { generateRandomName, makeRandomMessage } from '../utils/helper';
import { useDispatch, useSelector } from 'react-redux';
import { addLiveChat } from '../utils/chatSlice';

const LiveChat = () => {
  const [liveMsg, setLiveMsg] = useState('');
  const dispatch = useDispatch();
  const liveComment = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(addLiveChat({
        name: generateRandomName(),
        msg: makeRandomMessage(12),
      }))
    }, 2000);

    return () => {
      clearInterval(timer);
    }
  }, []);

  return (
    <div className='p-2 border border-black bg-slate-100 rounded-lg'>
      <div
        className='w-full h-[600px] rounded-lg overflow-y-scroll flex flex-col-reverse'>
        {liveComment.map((comment, id) => (
          <LiveChatMsg key={id} name={comment.name} message={comment.msg} />
        ))}
      </div>
      <form
        className='w-full'
        onSubmit={(e)=> {
          e.preventDefault();
          liveMsg && dispatch(addLiveChat({
            name: 'Abhi',
            msg: liveMsg,
          }))
          setLiveMsg('');
        }}
      >
        <input
          className='border-2 border-black w-3/4 rounded-lg ml-4 mt-2 px-2 py-1'
          type="text"
          value={liveMsg}
          onChange={(e) => setLiveMsg(e.target.value)}
        />
        <button
          className='bg-black text-white ml-4 mt-2 px-2 rounded-lg py-1'>
          Send
        </button>
      </form>
    </div>
  )
}

export default LiveChat;
