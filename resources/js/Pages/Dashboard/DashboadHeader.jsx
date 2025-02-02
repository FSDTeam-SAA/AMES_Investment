import React from "react";
import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const DashboadHeader = ({
    portfolioValue = 0,
    overallGrowth = 0,
    growth = 0,
    riskLevel = "Unknown",
    status = "Unknown",
}) => {
    return (
        <div className="flex items-center space-x-4 bg-transparent backdrop-blur-lg  text-white p-4 rounded-xl border border-gray-800 shadow-lg mt-0 ">
            <div className="flex flex-col items-start  p-4 rounded-lg w-1/4">
                <span className="text-sm text-gray-400 flex justify-between mb-[10px]">
                    <Briefcase className="mr-2" /> Portfolio Value
                </span>

                <span className="text-2xl font-bold">
                    ${portfolioValue.toLocaleString()}{" "}
                    <span className="text-sm">USD</span>
                </span>
            </div>
            <div className="flex flex-col">
                <button className="    mb-[10px] px-[18px] py-[9px] bg-gradient-to-r from-green-400 to-blue-500 rounded-lg">
                    Configure
                </button>

                <button className=" w-[110px] px-[18px] py-[9px] rounded-[6px] shadow-[inset_0px_7.4px_18.5px_0px_rgba(255,255,255,0.11)] p-6 bg-gray-800">
                    More
                </button>
            </div>

            {/* Overall Growth */}
            <Card className="bg-[#FFFFFF05]  border-gray-800">
                <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <div className="w-1 h-4 bg-yellow-500 rounded" />
                            <span className="text-sm text-gray-400">
                                Overall Growth
                            </span>
                        </div>
                    </div>
                    <div className="flex items-baseline gap-2 w-[168px]">
                        <div className="text-2xl text-white font-semibold">
                            ${overallGrowth}
                        </div>
                        <div className="text-emerald-400">+{growth}%</div>
                    </div>
                </CardContent>
            </Card>

            {/* Risk level  */}
            <Card className="bg-[#FFFFFF05] border-gray-800">
                <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <div className="w-1 h-4 bg-[#BBB9FD] rounded" />
                            <span className="text-sm text-gray-400">
                                Risk Level
                            </span>
                        </div>
                    </div>
                    <div className="flex items-baseline gap-2">
                        <h1
                            className={`font-bold text-center w-[168px] ${
                                riskLevel === "Low"
                                    ? "text-[#4CBD88]"
                                    : riskLevel === "High"
                                    ? "text-[#E15E00]"
                                    : riskLevel === "Moderate"
                                    ? "text-[#CCB116]"
                                    : "text-[#4EBE8A]"
                            }`}
                        >
                            {riskLevel}
                        </h1>
                    </div>
                </CardContent>
            </Card>
            {/* Status */}
            <Card className="bg-[#FFFFFF05] border-gray-800">
                <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <div className="w-1 h-4 bg-[#BBB9FD] rounded" />
                            <span className="text-sm text-gray-400">
                                Status
                            </span>
                        </div>
                    </div>
                    <div className="flex items-baseline gap-2">
                        <h1
                            className={`font-bold text-center  w-[168px] ${
                                status === "Not Ready"
                                    ? "text-red-500"
                                    : status === "Running"
                                    ? "text-[#4EBE8A]"
                                    : status === "Moderate"
                                    ? "text-[#CCB116]"
                                    : "text-[#4EBE8A]"
                            }`}
                        >
                            {status}
                        </h1>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default DashboadHeader;
