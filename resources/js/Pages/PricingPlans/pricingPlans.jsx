import MainLayout from "@/Layouts/MainLayout";
import React, { useState } from "react";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProfessionalPlan from "./ProfessionalPlan";
import PlusPlan from "./PlusPlan";
import BasicPlan from "./BasicPlan";
import GetStartedCard from "@/Components/GetStartedCard";

import bgLines from "../../../../public/img/BgLines.png";
import vector2 from "../../../../public/img/Vector 2.png";
const pricingPlans = () => {
    const [planType, setPlanType] = useState("");
    console.log(planType);

    return (
        <MainLayout>
            <div className="min-h-screen  flex flex-col items-center px-4 py-16 relative">
                {/* gradient-bg-lighting */}
                <div className="absolute top-0 ">
                    <div className="flex justify-center items-center blur-[130px]">
                        <img src={vector2} alt="vector2" />
                    </div>
                    {/* bg-bars */}
                    <div className="absolute inset-0 w-[80%] mx-auto h-[40%] z-0 opacity-60">
                        <img src={bgLines} alt="" className="w-full h-full " />
                    </div>
                </div>
                <div className="w-full max-w-6xl mx-auto text-center space-y-4 mb-12 md:mt-[-10px] z-10">
                    <Button
                        className="rounded-full h-[28px] scale-75 mb-5"
                        variant="secondary"
                    >
                        <Settings className="w-4 h-4" />
                        Features
                    </Button>
                    <h1 className="text-4xl lg:text-[50px] leading-10 font-bold text-white mb-2">
                        Pricing Plans
                    </h1>
                    <p className="text-gray-400">
                        Choose a plan that fits your investing goals
                    </p>
                    <Button className="px-7 h-[38px]">Get Started</Button>
                </div>

                <div className="w-full max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                    <BasicPlan setPlanType={setPlanType} />
                    <PlusPlan setPlanType={setPlanType} />
                    <ProfessionalPlan setPlanType={setPlanType} />
                </div>
            </div>
            <GetStartedCard title="Start Your Path to Smarter Investing" />
        </MainLayout>
    );
};

export default pricingPlans;
