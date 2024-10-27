import { useState, useContext } from "react"; // Import useState
import { Link, useNavigate } from "react-router-dom";
import { InfoContext } from "../../context/InfoContext";
import "../partial/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faHome, faUsers, faTv, faStore, faGamepad, faTh, faBell } from '@fortawesome/free-solid-svg-icons';

export function Header() {
    const { user, setUser } = useContext(InfoContext);
    const navigate = useNavigate();
    
    // Trạng thái để kiểm soát việc hiển thị dropdown
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    // Hàm xử lý đăng xuất
    const handleLogout = () => {
        localStorage.removeItem("token"); // Xóa token khỏi localStorage
        setUser(null); // Đặt user về null
        navigate("/login"); // Điều hướng về trang đăng nhập
    }

    // Hàm để thay đổi trạng thái khi nhấn vào nút dropdown
    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    }

    return (
        <div className="form-header">
            {/* Logo bên trái */}
            <div className="logo">
                    <FontAwesomeIcon icon={faFacebookF} />
                </div>

            <div className="navigation-icons">
                <div className="icon active">
                    <FontAwesomeIcon icon={faHome} />
                    <div className="active-bar"></div>
                </div>
                <FontAwesomeIcon icon={faUsers} className="icon" />
                <FontAwesomeIcon icon={faTv} className="icon" />
                <FontAwesomeIcon icon={faStore} className="icon" />
                <FontAwesomeIcon icon={faGamepad} className="icon" />
            </div>

            {/* Thông tin người dùng với hình ảnh và dropdown */}
            <div className="user-info">
                <div className="profile-picture" onClick={toggleDropdown}>
                    <img alt="Profile" src="https://storage.googleapis.com/a1aa/image/4TmpbeXpksXKRCjyp6eeVeuEWWaptOKGB1GcEv2n0EamPBpOB.jpg" />
                </div>
                {isDropdownVisible && (
                    <div className="dropdown-menu">
                        {user ? (
                            <>
                                <Link to="/profile" className="dropdown-item">Xem Hồ Sơ</Link>
                                <div className="dropdown-item" onClick={handleLogout}>Đăng Xuất</div>
                            </>
                        ) : (
                            <Link to="/login" className="dropdown-item">Đăng Nhập</Link>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
