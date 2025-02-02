import MainLayout from "@/Layouts/MainLayout";
import React from "react";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import "./DashBoard.css";
import DashboardLayoutAndContent from "./Home/DashboardLayoutAndContent";
// import TestComponent from "./Home/Test";
const Dashboard = () => {
    const [activeItem, setActiveItem] = useState("home");

    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    return (
        <MainLayout>
            {/* <TestComponent onItemClick={handleItemClick} /> */}
            <DashboardLayoutAndContent />
            <div className="app bg-gray-400 mt-[56px]">
                <Sidebar
                    activeItem={activeItem}
                    onItemClick={handleItemClick}
                />
                <Content activeItem={activeItem} />
            </div>
        </MainLayout>
    );
};

export default Dashboard;
