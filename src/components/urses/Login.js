import { Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom"
import baseAxios, { METHOD_HTTP } from "../../configs/baseAxios";
import React, { useContext } from 'react';
import { InfoContext } from "../context/InfoContext";
import "../css/Login.css";

export function Login() {
    const navigate = useNavigate();
    const { setUser } = useContext(InfoContext);

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
    
    const getInfo = async () => {
        let data = await baseAxios(METHOD_HTTP.GET, "get-info");
        setUser(data);
    }

    return (
        <div className="form-login">
            <Formik
                initialValues={
                    {
                        username: '',
                        password: ''
                    }
                }
                onSubmit={submit}
            >
                
                <Form>
                <div className="login">
                    <h1>Chào Mừng Các Bạn </h1>
                    <h3>Tên Đăng Nhập</h3>
                    <Field type="text" placeholder="Username" name="username"></Field>
                    <br />
                    <h3>Mật Khẩu</h3>
                    <Field type="password" placeholder="Password" name="password"></Field>
                    <br />
                    <Link to={"/register"}>Bạn chưa có tài khoản ? Đăng ký Ngay</Link>
                    <br />
                    <br />
                    <button className="button-login">Submit</button>
                    </div>
                </Form>
            </Formik>

            </div>
            
    )
}