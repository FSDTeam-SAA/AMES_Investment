import React from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import bgLines from "../../../public/img/BgLines.png";

const GetStartedCard = ({ title, buttonText = "Sign Up Now" }) => {
    return (
        <div className="flex items-center justify-center p-6 md:my-[60px] ">
            <div
                className="w-full max-w-6xl rounded-[2rem] p-16 relative overflow-hidden"
                style={{
                    background: "linear-gradient(to right, #4ADE80, #3B82F6)",
                }}
            >
                {/* noise background */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url(${bgLines})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />

                <div className="flex justify-center mb-4 relative">
                    <Button
                        variant="primary"
                        className="bg-white/20 hover:bg-white/30 text-white rounded-full px-4 py-2"
                    >
                        <Star className="w-4 h-4 mr-2" />
                        Get Started
                    </Button>
                </div>

                <div className="relative space-y-6 text-center">
                    <h1 className="text-2xl md:text-4xl font-semibold text-white mx-auto">
                        {title}
                    </h1>

                    <p className="text-[13px] md:text-[16px] text-white/90 max-w-2xl mx-auto">
                        Join thousands of users who trust Ames Investment
                        Systems to grow their wealth.
                    </p>

                    <div className="mt-12">
                        <Button
                            variant="secondary"
                            size="lg"
                            className="bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg px-8 py-6 text-lg"
                        >
                            {buttonText}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStartedCard;
