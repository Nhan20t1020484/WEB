import { useEffect, useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import "../partial/Main.css";
import image1 from '../partial/img/post.png';
import image2 from '../partial/img/searchpost.png';
import { Link} from "react-router-dom";

export function Main() {
    return (
        <>
            <Header />
            <div className="main">
                <div className="uppost">
                <Link to="/addpost">
                        <img src={image1} alt="post" />
                    </Link>
                </div>
           
                <div className="searchpost">
                <Link to="/searchpost">
                        <img src={image2} alt="searchpost" />
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}
