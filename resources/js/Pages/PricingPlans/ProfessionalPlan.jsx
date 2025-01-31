import { Card } from "@/Components/ui/card";
import { Gem } from "lucide-react";
import React from "react";
import basic from "../../../../public/img/pp-professional.png";


const ProfessionalPlan = () => {
    return (
        <Card className="bg-zinc-900/50 border-zinc-800 p-6 rounded-xl">
            <div className="space-y-6">
              <div className="flex flex-col items-center gap-6">
              <div className="p-3 bg-[#161618] rounded-lg w-fit shadow-[inset_0px_7.4px_18.5px_0px_rgba(255,255,255,0.11)] border border-[#44444A]">
                    <img className="h-6 w-6" src={basic} alt="basic" />
                </div>
                <div className="text-center">
                    <h2 className="text-xl font-semibold text-white mb-2">
                        Professional
                    </h2>
                    <p className="text-white/90">2/20 Pricing</p>
                </div>
              </div>
                
                <ul className="space-y-3 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        Best for Accounts above $100k
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        30 Day Free Trial
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        Sophisticated/Accredited Investors Only
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
                        Refresh Rate (60 Sec)
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

export default ProfessionalPlan;
