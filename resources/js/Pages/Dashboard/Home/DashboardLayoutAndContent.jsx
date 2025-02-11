import { use, useEffect, useState } from "react";
import { ChevronRightIcon, IdCard } from "lucide-react";
import dashboardlogo from "../../../../../public/img/dashboardlogo.png";

import {
    LayoutDashboard,
    CalendarIcon,
    ArrowLeftRight,
    UsersIcon,
    ChevronLeftIcon,
    Settings,
    Info,
} from "lucide-react";
import { CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import DashboadHeader from "../DashboadHeader";
import TradingTable from "../TradingTable";
import Investment from "../Investment/Investment";
import DashboardHome from "./DashboardHome";
import ProfileSettings from "../Settings/ProfileSettings";
import MarketInsightWidget from "../Market-Insight/MarketInsightWidget";
import { usePage } from "@inertiajs/react";

export default function DashboardLayoutAndContent() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard");
    const { adminData, adminmainAccountInfo } = usePage().props;
    const [cleanName, setCleanName] = useState("");

    useEffect(() => {
        setCleanName(adminData.Name.replace(/[_\d]/g, " "));
        console.log(cleanName);
    });

    const menuItems = [
        { name: "Dashboard", icon: LayoutDashboard },
        { name: "Investments", icon: CalendarIcon },
        { name: "Transaction", icon: ArrowLeftRight },
        { name: "Market Insights", icon: UsersIcon },
    ];
    const menuItems2 = [
        { name: "Settings", icon: Settings },
        { name: "Help & Center", icon: Info },
    ];

    // Right Side Content Show
    const renderContent = () => {
        switch (selectedMenuItem) {
            case "Dashboard":
                return (
                    <>
                        <DashboadHeader
                            portfolioValue={
                                adminmainAccountInfo.portfolio_value
                            }
                            growth={25.2}
                            riskLevel="Low"
                            status="Not Ready"
                            overallGrowth={2575065}
                        />
                        <DashboardHome />
                    </>
                );
            case "Investments":
                return (
                    <div>
                        <DashboadHeader
                            portfolioValue={
                                adminmainAccountInfo.portfolio_value
                            }
                            growth={2455.2}
                            riskLevel="Moderate"
                            status="Running"
                            overallGrowth={25065}
                        />

                        <Investment />
                    </div>
                );
            case "Transaction":
                return (
                    <div className="gradient-bg">
                        <DashboadHeader
                            portfolioValue={
                                adminmainAccountInfo.portfolio_value
                            }
                            growth={2535.2}
                            riskLevel="Moderate"
                            status="Running"
                            overallGrowth={5065}
                        />
                        <TradingTable />
                    </div>
                );
            case "Market Insights":
                return (
                    <div>
                        <DashboadHeader
                            portfolioValue={
                                adminmainAccountInfo.portfolio_value
                            }
                        />
                        <div className="h-[400px] w-full mt-5 rounded-[20px] overflow-hidden">
                            <MarketInsightWidget />
                        </div>
                    </div>
                );
            case "Settings":
                return (
                    <div>
                        <DashboadHeader />
                        <div>
                            <ProfileSettings />
                        </div>
                    </div>
                );
            case "Help & Center":
                return (
                    <h>
                        <DashboadHeader />
                        Help HElp HElp HElp
                    </h>
                );
            default:
                return (
                    <h2 className="text-2xl text-white font-bold">
                        Select a menu item
                    </h2>
                );
        }
    };

    return (
        <div className="grid min-h-[682px] mt-[60px] border border-gray-800 rounded-t-lg p-5 w-full grid-cols-[auto_1fr] overflow-hidden">
            <div
                className={`flex flex-col bg-transparent   text-white dark:bg-gray-800 transition-all duration-300 ${
                    isSidebarOpen ? "w-64" : "w-16"
                }`}
            >
                <div className="flex h-16 items-center justify-between px-4">
                    <div className="flex items-center gap-2 font-semibold">
                        <img
                            src={dashboardlogo}
                            alt="AMES Investment Logo"
                            className="h-6 w-6"
                        />
                        <span
                            className={`${isSidebarOpen ? "block" : "hidden"}`}
                        >
                            AMES Investment
                        </span>
                    </div>
                    <button
                        // variant="ghost"
                        size="icon"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        {isSidebarOpen ? (
                            <ChevronLeftIcon className="h-5 w-5" />
                        ) : (
                            <ChevronRightIcon className="h-5 w-5" />
                        )}

                        <span className="sr-only">Toggle sidebar</span>
                    </button>
                </div>

                <nav className="flex-1    max-h-[600px]  space-y-2 px-2 py-4  z-50  ">
                    <div className="flex  flex-col justify-between h-full">
                        {/* top menu  */}
                        <div>
                            {menuItems.map((item) => (
                                <button
                                    key={item.name}
                                    className={`flex align-center w-full space-y-3 text-white items-center cursor-pointer gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-[#FFFFFF33] dark:hover:bg-gray-700 ${
                                        isSidebarOpen
                                            ? "justify-start text-gray-700 dark:text-gray-300"
                                            : "justify-center text-gray-500 dark:text-gray-400"
                                    } ${
                                        selectedMenuItem === item.name
                                            ? "bg-[#FFFFFF33] dark:bg-gray-700"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        setSelectedMenuItem(item.name)
                                    }
                                >
                                    <item.icon className="h-5 w-5" />
                                    <span
                                        className={`${
                                            isSidebarOpen ? "block" : "hidden"
                                        }`}
                                    >
                                        {item.name}
                                    </span>
                                </button>
                            ))}
                        </div>
                        {/* dawon menu  */}
                        <div>
                            {menuItems2.map((item) => (
                                <button
                                    key={item.name}
                                    className={`flex w-full text-white items-center cursor-pointer gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-[#FFFFFF33] dark:hover:bg-gray-700 ${
                                        isSidebarOpen
                                            ? "justify-start text-gray-700 dark:text-gray-300"
                                            : "justify-center text-gray-500 dark:text-gray-400"
                                    } ${
                                        selectedMenuItem === item.name
                                            ? "bg-[#FFFFFF33] dark:bg-gray-700"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        setSelectedMenuItem(item.name)
                                    }
                                >
                                    <item.icon className="h-5 w-5" />
                                    <span
                                        className={`${
                                            isSidebarOpen ? "block" : "hidden"
                                        }`}
                                    >
                                        {item.name}
                                    </span>
                                </button>
                            ))}

                            {/* profile card  */}
                            <CardHeader className="bg-[#2C2C30] my-2 p-2 rounded-[7px]">
                                <div className="flex items-center space-x-4">
                                    <Avatar className="h-[24px] w-[24px]">
                                        <AvatarImage
                                            src="/placeholder-user.jpg"
                                            alt="@shadcn"
                                        />
                                        <AvatarFallback>u</AvatarFallback>
                                    </Avatar>
                                    <div
                                        // className="space-y-1 "
                                        className={`space-y-1 ${
                                            isSidebarOpen ? "block" : "hidden"
                                        }`}
                                    >
                                        <h4 className="text-[14px] font-semibold">
                                            User
                                        </h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            {adminData.Client_Email}
                                        </p>
                                    </div>
                                </div>
                            </CardHeader>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="flex  flex-col ml-5">
                <header className="flex h-16 items-center justify-between  bg-transparent border border-gray-800 rounded-t-[20px] text-white px-6 dark:border-gray-800 dark:bg-gray-800">
                    <h1 className="text-lg font-semibold">
                        {" "}
                        Hello, {cleanName}
                    </h1>
                    <div className="flex items-center gap-4">
                        {/* <Button variant="ghost" size="icon">
                            <SearchIcon className="h-5 w-5" />
                            <span className="sr-only">Search</span>
                        </Button>  */}
                        <button className="text-white flex hover:text-white/80 border-0 py-[8px] px-[24px] rounded-[6px] shadow-[inset_0px_7.4px_18.5px_0px_rgba(255,255,255,0.11)] p-6 bg-gray-800">
                            <IdCard className="mr-2" />
                            AIS #: {adminData.API_KEY}
                        </button>
                        {/* <Button variant="ghost" size="icon">
                            <img
                                src="/placeholder.svg"
                                width="32"
                                height="32"
                                className="rounded-full"
                                alt="Avatar"
                                style={{
                                    aspectRatio: "32/32",
                                    objectFit: "cover",
                                }}
                            />
                            <span className="sr-only">User menu</span>
                        </Button> */}
                    </div>
                </header>
                <main className="flex-1 border  border-gray-800 overflow-y-auto p-6 ">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
}
