import React from "react";
import { type PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, body, userId }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white mb-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{body}</p>
      <p className="text-gray-400 text-sm">User ID: {userId}</p>
    </div>
  );
};

export default PostCard;
// This component can be used to display individual posts
// It can be imported and used in other components or pages