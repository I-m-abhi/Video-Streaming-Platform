// import React from 'react';
import { useEffect, useState } from 'react';
import { commentsData, YOUTUBE_COMMENT_API } from '../utils/constants';
import CommentsList from './CommentsList';

const CommentsContainer = ({videoID}) => {
  const [commentAPI, setCommentAPI] = useState([])
  useEffect(()=> {
    const fetchCommentData = async ()=> {
      const res = await fetch(YOUTUBE_COMMENT_API + videoID);
      const data = await res.json();
      setCommentAPI(data.items)
    }

    fetchCommentData();
  }, [])

  return (
    <div className="-mt-[120px] ml-5 p-2 w-[1000px]">
      <h1 className="text-2xl font-bold">Comments: </h1>
      {/* Use below method for n-level comment API */}
      {/* <CommentsList comments={commentsData} /> */}
      <CommentsList comments={commentAPI} />
    </div>
  );
};

export default CommentsContainer;
