import { Card } from "@/Components/ui/card";
import { Star } from "lucide-react";
import basic from "../../../../public/img/pp-basic.png";
import React from "react";

const BasicPlan = () => {
    return (
        <Card className="bg-zinc-900/50 max-h-[520px] border-zinc-800 p-6 rounded-xl z-10">
            <div className="space-y-6">
                <div className="flex flex-col items-center gap-6">
                    <div className="p-3 bg-[#161618] rounded-lg w-fit shadow-[inset_0px_7.4px_18.5px_0px_rgba(255,255,255,0.11)] border border-[#44444A]">
                        <img className="h-6 w-6" src={basic} alt="basic" />
                    </div>
                    <div className="text-center">
                        <h2 className="text-xl font-semibold text-white mb-2">
                            Basic Plan
                        </h2>
                        <p className="text-white/90">$5 Per Month</p>
                    </div>
                </div>
                <div className="border-t border-[#FFFFFF]" />

                <ul className="space-y-3 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        Best for Accounts between $100-$5,000
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
                        Refresh Rate (Every Day)
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        GPT Powered Chat-bot
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        First available Customer Support
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        Long Term Models
                    </li>
                </ul>
            </div>
        </Card>
    );
};

export default BasicPlan;
