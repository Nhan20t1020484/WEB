import { Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import baseAxios, { METHOD_HTTP } from "../../configs/baseAxios";
import "../css/Register.css";

export function Register() {
    const navigate = useNavigate();

    const submit = async (values) => {
        try {
            console.log("Data register", values)
            let data = await baseAxios(METHOD_HTTP.POST, "/register", values);
            console.log("Data", data);
            alert(data.message);
            navigate("/login");
        } catch(e) {
            alert(e.message);
        }
       
    }
    return (
        <>
        <center>
        <div className="fomr-Register">
            <h1>Đăng Kí Tài Khoản Ngay</h1>
            

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
                    <h3>
                        Tên Đăng Nhập
                    </h3>
                    <Field type="text" placeholder="Tên Đăng Nhập" name="username"></Field>
                    <br />
                    <h3>
                        Mật Khẩu
                    </h3>
                    <Field type="password" placeholder="Mật Khẩu" name="password"></Field>
                    <br />
                    <Link to={"/login"}>Login now?</Link>
                    <br />
                    <br />
                    <center><button className="button-register">Submit</button></center>
                </Form>
            </Formik>
            </div>
            </center>

        </>
    )
}