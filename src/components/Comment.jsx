import CommentsReply from "./CommentsReply";

const Comment = ({ data }) => {
  
  const { authorDisplayName, textOriginal, authorProfileImageUrl } = data.snippet.topLevelComment.snippet;
  const { id } = data.snippet.topLevelComment;
  const { totalReplyCount } = data.snippet;

  return (
    <>
      <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
        <img
          className="w-12 h-12"
          alt="user"
          src={authorProfileImageUrl}
        />
        <div className="px-3">
          <p className="font-bold">{authorDisplayName}</p>
          <p>{textOriginal}</p>
        </div>
      </div>
      {totalReplyCount !== 0 ? <CommentsReply commentId={id} /> : ""}
    </>
  );
};

export default Comment;


// Use below method for n-level comment API

// const Comment = ({ data }) => {
//   const { name, text } = data;
//   return (
//     <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
//       <img
//         className="w-12 h-12"
//         alt="user"
//         src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
//       />
//       <div className="px-3">
//         <p className="font-bold">{name}</p>
//         <p>{text}</p>
//       </div>
//     </div>
//   );
// };

// export default Comment;
