import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);  // Trạng thái mở/đóng dropdown

    const toggleDropdown = () => {
        setIsOpen(!isOpen);  // Toggle trạng thái dropdown
    };

    return (
        <>
            <div className="header">
                <img
                    src="https://student.husc.edu.vn/images/logo.png"
                    alt="Example Image"
                    style={{ width: '300px', height: '60px', marginTop: '10px' }}
                />
            </div>

            <div className="header-2">
                <h2 className="text-header"> Hỗ Trợ Hoạt Động Học Tập 🔽</h2>

                {/* Dropdown div bên trong header-2 */}
                <div className="dropdown-container">
                    <div onClick={toggleDropdown} className="dropdown-toggle">
                    </div>

                    {isOpen && (
                        <div className="dropdown-menu">
                            <h3 className="drowdown-plant">Kế Hoạch Học Tập</h3>
                            <Link to="/option1">Đăng Kí Học Tập</Link>
                            <Link to="/option2">Lớp Học Phần Đã Đăng Kí</Link>
                            <Link to="/option3">Lịch Trình Học Tập</Link>
                            <Link to="/option3">Lịch Thi Kết Thúc Học Phần</Link>
                            <h3 className="drowdown-plant">Hỗ Trợ - Tra Cứu Thông Tin</h3>
                            <Link to="/option1">Chương Trình Đào Tạo</Link>
                            <h3 className="drowdown-plant">Số Liệu - Tổng Hợp</h3>
                            <Link to="/option1">Lịch Sử Quá Trình Học Tập</Link>
                            <Link to="/option2">Kết Quả Học Tập</Link>
                            <Link to="/option3">Kết Quả Rèn Luyện</Link>
                            <Link to="/option3">Bằng Và Chứng Chỉ Điều Kiện</Link>
                            <Link to="/option3">Hồ Sơ Tốt Nghiệp</Link>
                            <h3 className="drowdown-plant">Đảm Bảo Chất Lượng Giáo Dục</h3>
                            <Link to="/option3">Khảo Sát Hoạt Động Giảng Dạy</Link>              
                        </div>
                    )}
                </div>
            </div>

            <div className="header-3">
                <h1 className="text-header"> LOGO</h1>
            </div>
            <div className="header-4">
                <h1 className="text-header"> LOGO</h1>
            </div>
        </>
    );
}
