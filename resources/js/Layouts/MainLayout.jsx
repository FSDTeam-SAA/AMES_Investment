import Footer from "@/Components/Footer";
import { NavBar } from "@/Components/NavBar";
import React from "react";

const MainLayout = ({ children }) => {
    return (
        <div className="bg-[#111113] relative">
            <div className=" bg-[#111113]  top-0 max-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <NavBar />
                <div className="   bg-[#111113]  mt-[-20px]   ">{children}</div>
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;
