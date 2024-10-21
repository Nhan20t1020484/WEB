import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InfoContext } from "../../context/InfoContext";
import "../partial/Header.css";

export function Header() {
    const { user, setUser } = useContext(InfoContext);
    const navigate = useNavigate();

    // Hàm xử lý đăng xuất
    const handleLogout = () => {
        localStorage.removeItem("token"); // Xóa token khỏi localStorage
        setUser(null); // Đặt user về null
        navigate("/login"); // Điều hướng về trang đăng nhập
    }

    return (
        <div className="form-header">
            {/* Logo bên trái */}
            <div className="logo">
                <img src="/path-to-your-logo.png" alt="Logo" />
            </div>

            {/* Menu ở giữa */}
            <nav className="menu">
                <Link to="/home"><button>Cà Phê</button></Link>
                <Link to="/about"><button>Về Chúng Tôi</button></Link>
                <Link to="/services"><button>Thực Đơn</button></Link>
                <Link to="/contact"><button>Ưu Đãi</button></Link>
            </nav>

            {/* Thông tin username và nút Logout */}
            <div className="user-info">
                <span>{user ? user.username : "Guest"}</span>
                {user && (
                    <button onClick={handleLogout} className="logout-btn">Logout</button>
                )}
            </div>
        </div>
    )
}
