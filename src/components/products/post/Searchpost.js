import { useState } from 'react';
import axios from 'axios';
import "../post/Searchpost.css";

export function Searchpost() {
  const [postId, setPostId] = useState('');
  const [post, setPost] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/posts/${postId}`);
      setPost(response.data);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };

  return (
    <div>
      <h1>Search for a Post</h1>
      <input
        type="text"
        placeholder="Enter Post ID"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
      />
      <button onClick={handleSearch}>Search Post</button>
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>Status: {post.status}</p>
          <p>Type: {post.type}</p>
        </div>
      )}
    </div>
  );
}
