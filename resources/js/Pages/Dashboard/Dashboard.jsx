import MainLayout from "@/Layouts/MainLayout";
import React from "react";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import "./DashBoard.css";
const Dashboard = () => {
    const [activeItem, setActiveItem] = useState("home");

    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    return (
        <MainLayout>
            <div className="app bg-gray-400">
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
