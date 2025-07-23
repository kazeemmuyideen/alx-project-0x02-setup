// pages/home.tsx

import React from "react";
import Card from "@/components/common/Card";
import { useState } from "react";
import PostModal from "@/components/common/PostModal";

interface Post {
  title: string;
  content: string;
}

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([
    { title: "Card One", content: "This is the first card" },
    { title: "Card Two", content: "This is the second card" },
  ]);

  const handleAddPost = (title: string, content: string) => {
    setPosts((prev) => [...prev, { title, content }]);
  };

  return (
      <div className="p-6">
          
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>

      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-6 hover:bg-blue-700"
      >
        Add Post
      </button>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />

      {posts.map((post, index) => (
        <Card key={index} title={post.title} content={post.content} />
      ))}
    </div>
  );
}
