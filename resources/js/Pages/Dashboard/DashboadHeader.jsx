import React, { useState } from "react";
import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/Components/ui/button";
import { set } from "react-hook-form";
import ConfigurePortfolio from "./Configure/ConfigurePortfolio";
import { usePage } from "@inertiajs/react";

const DashboadHeader = ({
    portfolioValue = 0,
    overallGrowth = 0,
    growth = 0,
    status = "Unknown",
    openSetting,
}) => {

    const [showConfigureModal, setShowConfigureModal] = useState(false);
    const { riskLevel,grow,sta } = usePage().props;

    console.log("riskLevel: ", riskLevel);
    console.log("growth: ", grow);
    console.log("status: ", sta);


    return (
        <div className="flex items-center space-x-4 bg-transparent backdrop-blur-lg  text-white p-4 rounded-xl border-[0.75px] border-[#2C2C30] shadow-lg mt-0 ">
            {showConfigureModal && (
                <ConfigurePortfolio
                    onClose={() => setShowConfigureModal(false)}
                />
            )}

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
                <Button
                    className="w-[110px] mb-[10px] px-[18px] py-[9px] "
                    onClick={() => setShowConfigureModal(true)}
                >
                    Configure
                </Button>

                <Button
                    variant="secondary"
                    className=" w-[110px] px-[18px] py-[9px] rounded-[6px] "
                    onClick={openSetting}
                >
                    More
                </Button>
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
                            ${(overallGrowth)}
                        </div>
                        <div className="text-emerald-400">+{grow}%</div>
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
                            className={`font-bold text-center w-[168px] ${riskLevel === "Low"
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
                            className={`font-bold text-center  w-[168px] ${status === "Not Ready"
                                    ? "text-red-500"
                                    : status === "Running"
                                        ? "text-[#4EBE8A]"
                                        : status === "Moderate"
                                            ? "text-[#CCB116]"
                                            : "text-[#4EBE8A]"
                                }`}
                        >
                            {sta}
                        </h1>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default DashboadHeader;
