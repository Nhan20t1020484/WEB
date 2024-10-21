import "../partial/Footer.css";

export function Footer() {
    return (
        <div className="footer">
            <div className="footer-section">
                <h3>Coffe NTN</h3>
                <p>Địa chỉ: H30 Đức Bưu 6, Thành Phố Huế, Tỉnh Thừa Thiên Huế</p>
                <p>Email: thanhnhannguyen190502@gmail.com</p>
                <p>FaceBook: facebook.com/snskct12345</p>
                <p>Intagram : n_boyyyyyy</p>
            </div>
            <div className="footer-section">
                <h3>Liên Kết Công Ty</h3>
                <ul>
                    <li><a href="/about">Giới Thiệu</a></li>
                    <li><a href="/contact">Liên Hệ</a></li>
                    <li><a href="/privacy-policy">Chính Sách Bảo Mật</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Thông Tin Bản Quyền</h3>
                <p>&copy; Cà Phê VIP của Nguyễn Thành Nhân</p>
            </div>
        </div>
    )
}
