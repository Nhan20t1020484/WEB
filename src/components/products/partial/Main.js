import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import "../css/Main.css"
export function Main() {
    return (
        <div className="Main">
            <Header />       
            <Outlet/>        
            <Footer />
       </div>
    )
}