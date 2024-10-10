import { Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom"
import baseAxios, { METHOD_HTTP } from "../../configs/baseAxios";
import "../css/Login.css"

export function Login() {
    const navigate = useNavigate();

    const submit = async (values) => {
        try {
            console.log("Data login", values)
            let data = await baseAxios(METHOD_HTTP.POST, "/login", values);
            console.log("Data", data);
            localStorage.setItem("token", data.token)
            navigate("/home");
        } catch(e) {
            alert(e.message);
        }
       
    }
    return (
        <>
        <center>
            <div className="form-login">
            <h1>Chào Mừng Bạn Đến Cửa Hàng Chúng Tôi</h1>           
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
                    <h3>Tên Đăng Nhập</h3>
                    <Field type="text" placeholder="Username" class="username"></Field>
                    <br />
                    <h3>Mật Khẩu</h3>
                    <Field type="password" placeholder="Password" class="password"></Field>
                    <br />
                    <Link to={"/register"}>Đăng Kí Ngay</Link>
                    <br />
                    <br />
                    <button className="button-login">Đăng Nhập</button>
                </Form>
            </Formik>
            </div> </center>
        </>
    )
}