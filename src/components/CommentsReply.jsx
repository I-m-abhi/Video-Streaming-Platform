import { useEffect, useState } from "react";
import { YOUTUBE_REPLY_COMMENT_API } from "../utils/constants";

const CommentsReply = ({ commentId }) => {
  const [commentReply, setCommentReply] = useState([]);

  useEffect(() => {
    const fetchCommentReply = async () => {
      const res = await fetch(YOUTUBE_REPLY_COMMENT_API + commentId);
      const data = await res.json();
      setCommentReply(data.items);
    }

    fetchCommentReply();
  }, []);

  return (
    commentReply.map((reply, index) => (
      <div key={index} className="pl-5 border border-l-black ml-5">
        <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
          <img
            className="w-12 h-12"
            alt="user"
            src={reply.snippet.authorProfileImageUrl}
          />
          <div className="px-3">
            <p className="font-bold">{reply.snippet.authorDisplayName}</p>
            <p>{reply.snippet.textOriginal}</p>
          </div>
        </div>
      </div>
    ))
  )
};

export default CommentsReply;
