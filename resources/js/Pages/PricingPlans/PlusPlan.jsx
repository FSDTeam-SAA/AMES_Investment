import { Card } from "@/Components/ui/card";
import { Sparkles } from "lucide-react";
import React from "react";
import basic from "../../../../public/img/pp-plus.png";

const PlusPlan = () => {
    return (
        <Card
            className="bg-[#161618] z-50  max-h-[598px]
        0px] border-zinc-800 p-6 rounded-xl relative before:absolute before:inset-0 z-10"
        >
            <div className="space-y-6 relative">
                <div className="flex flex-col items-center gap-6">
                    <div className="p-3 bg-[#161618] rounded-lg w-fit shadow-[inset_0px_7.4px_18.5px_0px_rgba(255,255,255,0.11)] border border-[#44444A]">
                        <img className="h-6 w-6" src={basic} alt="basic" />
                    </div>
                    <div className="text-center">
                        <h2 className="text-xl font-semibold text-white mb-2">
                            Plus
                        </h2>
                        <p className="text-white/90">$20 Per Month</p>
                    </div>
                </div>
                <div className="border-t border-[#FFFFFF]" />
                <ul className="space-y-5 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        Best for Accounts between $5k-$50k
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        30 Day Free Trial
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        No Lockup
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        Portfolio balancing
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        Auto Invest New Deposits
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        Refresh Rate (15 Min)
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        GPT Powered Chat-bot
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        Direct Line Customer Support (No Hold)
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        Long Term Models
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        Swing Trading Models
                    </li>
                </ul>
            </div>
        </Card>
    );
};

export default PlusPlan;
