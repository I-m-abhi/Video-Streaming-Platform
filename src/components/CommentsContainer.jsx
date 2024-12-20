// import React from 'react';
import { commentsData } from '../utils/constants';
import CommentsList from './CommentsList';

const CommentsContainer = () => {
  return (
    <div className="-mt-[120px] ml-5 p-2 w-[1000px]">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
