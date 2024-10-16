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
            alert(data.message);
            navigate("/home");
        } catch(e) {
            alert(e.message);
        }
       
    }
    return (
        <>
            <div className="form-login">
                <img className="img-login" src="https://student.husc.edu.vn/Themes/Login/images/Logo-ko-nen.png" alt="" 
                />
                <img className="img-login-2" src="https://student.husc.edu.vn/Themes/Login/images/image1.png" alt="" 
                />       
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
                    <h1 className="text-form-admin">Tài Khoản Admin</h1>      
                    <h3>Tên Đăng Nhập</h3>
                    <Field type="text" placeholder="Username" name="username"></Field>
                    <br />
                    <h3>Mật Khẩu</h3>
                    <Field type="password" placeholder="Password" name="password"></Field>
                    <br />
                    <Link to={"/register"}>Đăng Kí Ngay</Link>
                    <br />
                    <br />
                    <button className="button-login">Đăng Nhập</button>
                    </div>
                </Form>
            </Formik>
            </div> 
        </>
    )
}