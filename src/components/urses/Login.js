import { Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import baseAxios, { METHOD_HTTP } from "../../configs/baseAxios";
import React, { useContext } from 'react';
import { InfoContext } from "../context/InfoContext";
import "../css/Login.css";

export function Login() {
    const navigate = useNavigate();
    const { setUser } = useContext(InfoContext);

    const getInfo = async () => {
        let data = await baseAxios(METHOD_HTTP.GET, "get-info");
        setUser(data);
    }


    const submit = async (values) => {
        try {
            let data = await baseAxios(METHOD_HTTP.POST, "/login", values);
            localStorage.setItem("token", data.token);
            await getInfo();
            navigate("/home");
        } catch (e) {
            alert(e.message);
        }
    }
    
    
    return (
        <div className="login-container">
            <div className="login-intro">
                <h1 className="title">Facebook</h1>
                <p className="subtitle">Facebook helps you connect and share with the people in your life.</p>
            </div>
            <div className="login-form">
                <Formik
                    initialValues={{
                        username: '',
                        password: ''
                    }}
                    onSubmit={submit}
                >
                    <center>
                    <Form>
                        <Field type="text" name="username" placeholder="Nhập địa chỉ Email" className="input-field" />
                        <Field type="password" name="password" placeholder="Mật Khẩu" className="input-field" />
                        <button type="submit" className="login-button">Đăng Nhập</button>
                    </Form>
                    </center>
                </Formik>
                <Link to="/forgot-password" className="forgot-password-link">Quên Mật Khẩu</Link>
                <hr className="separator" />
                <Link to="/register" className="create-account-link">
                    <button className="create-account-button">Đăng kí ngay</button>
                </Link>
            </div>
            <div className="create-page">
                <p>Create a Page for a celebrity, brand, or business.</p>
            </div>
        </div>
    );
}
