import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import baseAxios, { METHOD_HTTP } from "../../configs/baseAxios";
import * as Yup from "yup";
import "../css/Register.css";

const UserSchema = Yup.object().shape({
    username: Yup.string()
        // .min(2, 'Phai lon hon 2 ky tu!')
        // .max(50, 'Too Long!')
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "khong dung dinh dang")
        .required('Required'),
    password: Yup.string().required('Required')
});

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
        <div className="form-register">
            <Formik
                initialValues={
                    {
                        username: '',
                        password: ''
                    }
                }
                validationSchema={UserSchema}
                onSubmit={submit}
            >
                <Form>
                    <div className="register">
                        <h1>Đăng Kí Tài Khoản</h1>
                        <h3>Tên Đăng Nhập</h3>
                    <Field type="text" placeholder="Username" name="username"></Field>
                    <br />
                    <span style={{color: "red"}}><ErrorMessage name={"username"}/></span><br/>
                    <h3>Mật Khẩu</h3>
                    <Field type="password" placeholder="Password" name="password"></Field>
                    <br />
                    <span style={{color: "red"}}><ErrorMessage name={"password"}/></span><br/>
                    <h3>Xác Nhận Lại Mật Khẩu</h3>
                    <Field type="password" placeholder="Password" name="confine-password"></Field>
                    <br />
                    <span style={{color: "red"}}><ErrorMessage name={"password"}/></span><br/>
                    <h3>Số Điện Thoại</h3>
                    <Field type="text" placeholder="Số Điện Thoại" name="phone"></Field>
                    <br />
                    <span style={{color: "red"}}><ErrorMessage name={"password"}/></span><br/>
                    <h3>Địa Chỉ</h3>
                    <Field type="text" placeholder="Địa Chỉ" name="address"></Field>
                    <br />
                    <span style={{color: "red"}}><ErrorMessage name={"password"}/></span><br/>
                    <Link to={"/login"}>Đăng Nhập Ngay</Link>
                    <br />
                    <br />
                    <button className="button-register">Submit</button>
                    </div>
                </Form>
                
            </Formik>

            </div>
    )
}