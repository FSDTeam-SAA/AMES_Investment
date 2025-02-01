import React from "react";
import { Briefcase } from "lucide-react";
const PortfolioDashboard = ({
    portfolioValue = 0,
    growth = 0,
    riskLevel = "Unknown",
    status = "Unknown",
}) => {
    return (
        <div className="flex items-center space-x-4 bg-transparent backdrop-blur-lg  text-white p-4 rounded-xl shadow-lg">
            <div className="flex flex-col items-start  p-4 rounded-lg w-1/4">
                <span className="text-sm text-gray-400 flex justify-between mb-[10px]">
                    <Briefcase className="mr-2" /> Portfolio Value
                </span>

                <span className="text-2xl font-bold">
                    ${portfolioValue.toLocaleString()}{" "}
                    <span className="text-sm">USD</span>
                </span>
            </div>
            <div>
                <button className="w-[130px]  py-[8px]  mb-[10px] px-[24px] bg-gradient-to-r from-green-400 to-blue-500 rounded-lg">
                    Configure
                </button>
                <button className=" w-[130px] py-[8px] px-[24px] rounded-[6px] shadow-[inset_0px_7.4px_18.5px_0px_rgba(255,255,255,0.11)] p-6 bg-gray-800">
                    More
                </button>
            </div>

            <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg w-1/4">
                <span className="text-sm text-gray-400">Overall Growth</span>
                <span className="text-green-400 font-bold">$ {growth}%</span>
            </div>

            <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg w-1/4">
                <span className="text-sm text-gray-400">Risk Level</span>
                <span className="text-green-300 font-bold">{riskLevel}</span>
            </div>

            <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg w-1/4">
                <span className="text-sm text-gray-400">Status</span>
                <span
                    className={`font-bold ${
                        status === "Not Ready"
                            ? "text-red-500"
                            : "text-green-500"
                    }`}
                >
                    {status}
                </span>
            </div>
        </div>
    );
};

export default PortfolioDashboard;
