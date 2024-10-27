import { useState } from 'react';
import axios from 'axios';
import "../post/Addpost.css";
import { Field, Form, Formik } from "formik";

export function Addpost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/posts', { title, content, status, type });
      console.log('Post created:', response.data);
      // Thực hiện các hành động khác sau khi tạo bài viết thành công, như điều hướng hoặc thông báo
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div>
      <h1>Tạo Bài Viết Mới</h1>
      <Formik
                initialValues={{
                    title: "",
                    content: "",
                    status: "",
                    type: ""
                }}
                onSubmit={handleSubmit}
            >
      <Form >
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        <input type="text" placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} />
        <input type="text" placeholder="Type" value={type} onChange={(e) => setType(e.target.value)} />
        <button type="submit">Đăng Bài</button>
      </Form>
      </Formik>
    </div>
  );
}
