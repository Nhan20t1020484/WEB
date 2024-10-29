import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Tiny from "../Tiny";
import baseAxios, { METHOD_HTTP } from "../../../configs/baseAxios";
import "../post/Addpost.css";

export function Addpost() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const PostSchema = Yup.object().shape({
        title: Yup.string().required("Title is required"),
        content: Yup.string().required("Content is required"),
        type: Yup.string().required("Type is required"),
        status: Yup.string().required("Status is required"),
    });

    const submit = async (values) => {
        setLoading(true);
        setErrorMessage("");
        try {
            const data = await baseAxios(METHOD_HTTP.POST, "/posts", values);
            navigate("/addpost");
        } catch (e) {
            if (e.response && e.response.data && e.response.data.message) {
                setErrorMessage(e.response.data.message);
            } else {
                setErrorMessage("An unexpected error occurred.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <Formik
            initialValues={{
                title: "",
                content: "",
                type: "general",
                status: "public",
            }}
            validationSchema={PostSchema}
            onSubmit={submit}
        >
            {({ setFieldValue, setFieldTouched }) => (
                <Form className="add-post-container">
                    <h2>Tạo Bài Viết Mới</h2>

                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <Field
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Enter your title"
                        />
                        <span style={{ color: "red" }}>
                            <ErrorMessage name="title" />
                        </span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <Tiny
                            onChange={(content) => {
                                setFieldValue("content", content);
                                setFieldTouched("content", true);
                            }}
                        />
                        <span style={{ color: "red" }}>
                            <ErrorMessage name="content" />
                        </span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="type">Type</label>
                        <Field as="select" name="type">
                            <option value="general">General</option>
                            <option value="announcement">Announcement</option>
                            <option value="event">Event</option>
                        </Field>
                        <span style={{ color: "red" }}>
                            <ErrorMessage name="type" />
                        </span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="status">Status</label>
                        <Field as="select" name="status">
                            <option value="public">Public</option>
                            <option value="private">Private</option>
                        </Field>
                        <span style={{ color: "red" }}>
                            <ErrorMessage name="status" />
                        </span>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                    {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                </Form>
            )}
        </Formik>
    );
}
