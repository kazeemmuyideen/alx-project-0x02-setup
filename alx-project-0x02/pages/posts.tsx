import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

const PostsPage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data: PostProps[] = await res.json();
      setPosts(data.slice(0, 10)); // Limit to 10 posts for demo
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            userId={post.userId}
            title={post.title}
            body={post.body}
            id={post.id}
          />
        ))}
      </main>
    </div>
  );
};

export default PostsPage;
