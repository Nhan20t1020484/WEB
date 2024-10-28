import { useEffect, useState } from "react";
import "../post/Listpost.css";

export function Listpost() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch posts from the API endpoint
        fetch("/api/posts")
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error("Error fetching posts:", error));
    }, []);

    return (
        <div className="post-list">
            {posts.length > 0 ? (
                posts.map(post => (
                    <div key={post.id} className="post-item">
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <p className="author">Posted by {post.author}</p>
                    </div>
                ))
            ) : (
                <p>Chưa có bài viết nào </p>
            )}
        </div>
    );
}
