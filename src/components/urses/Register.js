import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import baseAxios, { METHOD_HTTP } from "../../configs/baseAxios";
import * as Yup from "yup";
import "../css/Register.css";

const UserSchema = Yup.object().shape({
    username: Yup.string()
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Vui lòng nhập email")
        .required('Không được để trống'),
    password: Yup.string().required('Không được để trống'),
    gender: Yup.string().required('Vui lòng chọn giới tính'),
    phone: Yup.string()
        .matches(/^[0-9]+$/, "Số điện thoại chỉ được nhập số")
        .required("Không được để trống"), 
    address: Yup.string().required("Không được để trống"),
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
        } catch (e) {
            alert(e.message);
        }
    }

    return (
        <div className="form-register">
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                    gender: '',
                    phone: '',
                    address: '',
                }}
                validationSchema={UserSchema}
                onSubmit={submit}
            >
                <Form>
                    <div className="register">
                        <h1>Đăng Kí Tài Khoản</h1>
                        <h3>Tên Đăng Nhập</h3>
                        <Field type="text" placeholder="Username" name="username" />
                        <span style={{ color: "red" }}>
                            <ErrorMessage name="username" />
                        </span>

                        <h3>Mật Khẩu</h3>
                        <Field type="password" placeholder="Password" name="password" />
                        <span style={{ color: "red" }}>
                            <ErrorMessage name="password" />
                        </span>
                        <h3>Giới Tính</h3>
                        <div role="group" aria-labelledby="gender">
                            <label className="gender-option">
                                <Field type="radio" name="gender" value="male" />
                                <label>Nam</label>
                            </label>
                            <label className="gender-option">
                                <Field type="radio" name="gender" value="female" />
                                <label>Nữ</label>
                            </label>
                        </div>
                        <span style={{ color: "red" }}>
                            <ErrorMessage name="gender" />
                        </span>

                        <h3>Số Điện Thoại</h3>
                        <Field type="text" placeholder="Số Điện Thoại" name="phone" />
                        <span style={{ color: "red" }}>
                            <ErrorMessage name="phone" />
                        </span>

                        <h3>Địa Chỉ</h3>
                        <Field type="text" placeholder="Địa Chỉ" name="address" />
                        <span style={{ color: "red" }}>
                            <ErrorMessage name="address" />
                        </span>

                        <br />
                        <Link to={"/login"}>Đăng Nhập Ngay</Link>
                        <br />
                        <center><button className="button-register" type="submit">Đăng Kí Ngay</button></center>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}
