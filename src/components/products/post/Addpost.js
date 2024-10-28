import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../post/Addpost.css"
import React from 'react';

export function Addpost() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [status, setStatus] = useState("public"); // Default to public status
    const [type, setType] = useState("general"); // Default to general type
    const navigate = useNavigate();

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Construct new post data
        const newPost = {
            title,
            content,
            status,
            type,
        };

        try {
            // Send post request to backend
            const response = await fetch("/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newPost),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Post created:", data);
                navigate("/"); 
            } else {
                console.error("Failed to create post");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="add-post-container">
            <h2>Create a New Post</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Content</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Status</label>
                    <select value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Type</label>
                    <select value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="general">General</option>
                        <option value="announcement">Announcement</option>
                        <option value="event">Event</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
