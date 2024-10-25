import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InfoContext } from "../../context/InfoContext";
import "../partial/Header.css";

export function Header() {
    const { user, setUser } = useContext(InfoContext);
    const navigate = useNavigate();

    // Trạng thái để kiểm soát việc hiển thị dropdown
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    // Hàm xử lý đăng xuất
    const handleLogout = () => {
        localStorage.removeItem("token"); 
        setUser(null); 
        navigate("/login"); 
    }

    // Hàm để thay đổi trạng thái khi nhấn vào nút dropdown
    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
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

            {/* Thông tin username và dropdown */}
            <div className="user-info">
                <button onClick={toggleDropdown} className="dropdown-btn">
                    {user ? user.username : "Guest"}
                </button>
                {isDropdownVisible && (
                    <div className="dropdown-menu">
                        {user ? (
                            <>
                                <div className="dropdown-item">{user.username}</div>
                                <div className="dropdown-item" onClick={handleLogout}>Logout</div>
                            </>
                        ) : (
                            <Link to="/login" className="dropdown-item">Login</Link>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}
