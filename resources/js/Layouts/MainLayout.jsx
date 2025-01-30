import Footer from "@/Components/Footer";
import { NavBar } from "@/Components/NavBar";
import React from "react";

const MainLayout = ({ children }) => {
    return (
        <div className="bg-[#111113]">
            <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8">
                <NavBar />
                <div className="content bg-black">{children}</div>
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;
