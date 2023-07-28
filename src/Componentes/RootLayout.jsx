import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function OutletReact() {
    return(
        <>
        <Header/> 
        <section>
        <Outlet/>
        </section>
        </>
    );   
}