import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router';
import { closeMenu } from '../utils/appSlice';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);


  return (
    <div className="flex flex-col w-full">
      <div className="px-5 flex w-full">
        <div className="">
          <iframe
            width="1050"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer videoID={searchParams.get('v')} />
    </div>
  )
}

export default WatchPage;
