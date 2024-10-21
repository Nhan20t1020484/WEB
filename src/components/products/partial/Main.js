import { useEffect, useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import "../partial/Main.css";

export function Main() {
    // Mảng chứa URL ảnh từ mạng
    const images = [
        "https://png.pngtree.com/thumb_back/fh260/background/20190124/pngtree-brown-simple-texture-coffee-background-image_1555.jpg",
        "https://png.pngtree.com/background/20210709/original/pngtree-coffee-background-for-simple-coffee-restaurant-picture-image_905317.jpg",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhCe2YGfT0GcAd-HsnbjfS1DOA8b8yEGmRvK94CixgizXAXmk-kHFJhyphenhyphentjR3aBihkepmQZaoiX8mhE4a6sYcnxJe-LqFAaJTYRiDxkatHDNBlyblUgWRzYJ1Tw5FGlXK8SK6FhLpai6V3-/s1600/anh-bia-facebook-cafe-ngot-ngao.jpg"
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Tự động chuyển ảnh mỗi 3 giây
    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 5000); // 5 giây

        return () => clearInterval(interval); // Cleanup khi component bị hủy
    }, [currentImageIndex]);

    // Chuyển đến ảnh tiếp theo
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }

    // Chuyển về ảnh trước
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }

    return (
        <>
            <Header />
            <div className="container-list">
                <div className="slider">
                    <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />

                    {/* Nút điều khiển Previous */}
                    <button className="prev-btn" onClick={prevImage}>&#10094;</button>

                    {/* Nút điều khiển Next */}
                    <button className="next-btn" onClick={nextImage}>&#10095;</button>
                </div>
            </div>
            <Footer />
        </>
    );
}
