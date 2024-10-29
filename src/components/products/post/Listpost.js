import { useEffect, useState } from "react";
import "../post/Listpost.css";

export function Listpost() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Temporary sample posts with a "likes" property
        const samplePosts = [
            {
                id: 1,
                title: "Sample Post 1",
                content: "This is the content of sample post 1.",
                author: "User1",
                likes: 10
            },
            {
                id: 2,
                title: "Sample Post 2",
                content: "This is the content of sample post 2.",
                author: "User2",
                likes: 25
            },
            {
                id: 3,
                title: "Sample Post 3",
                content: "This is the content of sample post 3.",
                author: "User3",
                likes: 8
            }
        ];

        // Set sample posts as the initial data for testing
        setPosts(samplePosts);
    }, []);

    return (
        <div className="post-list">
            {posts.length > 0 ? (
                posts.map(post => (
                    <div key={post.id} className="post-item">
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <p className="author">Posted by {post.author}</p>
                        <p className="likes">Likes: {post.likes}</p> {/* Like count display */}
                    </div>
                ))
            ) : (
                <p>Chưa có bài viết nào</p>
            )}
        </div>
    );
}
