import MainLayout from "@/Layouts/MainLayout";
import React from "react";
import "./DashBoard.css";
import DashboardLayoutAndContent from "./Home/DashboardLayoutAndContent";
// import TestComponent from "./Home/Test";
const Dashboard = () => {
    return (
        <MainLayout>
            {/* <TestComponent onItemClick={handleItemClick} /> */}
            <DashboardLayoutAndContent />
        </MainLayout>
    );
};

export default Dashboard;
