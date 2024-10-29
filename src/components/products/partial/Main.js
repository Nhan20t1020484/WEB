import { useEffect, useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import "../partial/Main.css";
import { Link, useNavigate } from "react-router-dom";
import { Listpost } from "../post/Listpost";

export function Main() {
    const navigate = useNavigate();

    const handleAddPost = () => {
        navigate("/addpost");
    };
    const handleSearchpost = () => {
        navigate("/searchpost");
    };

    return (
        <>
            <Header />
            <div className="main-buttons">
                <button className="btn btn-primary" onClick={handleAddPost}>
                    Add Post
                </button>
                <Link to="/searchpost">
                    <button className="btn btn-primary" onClick={handleSearchpost}>
                        Search Post
                    </button>
                </Link>
                
            </div>
            <Listpost />
            <Footer />
        </>
    );
}
