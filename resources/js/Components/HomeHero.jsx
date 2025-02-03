import React from "react";
import { Button } from "@/Components/ui/button";
import dashboard from "../../../public/img/Dashboad.png";
import { ArrowRight } from "lucide-react";
import { Link } from "@inertiajs/react";
const HomeHero = () => {
    return (
        <div>
            <section>
                <div className=" min-h-[600px] w-full flex flex-col items-center justify-center lg:pt-[120px] px-4 py-16 bg-gradient-to-b from-gray-950 to-teal-950/30 relative ">
                    <div
                        className="absolute inset-0 w-[20%] mx-auto translate-y-[-50px]"
                        style={{
                            background: `radial-gradient(circle at top, 
        rgba(84, 255, 170, 0.3) 0%, 
        rgba(38, 239, 121, 0.2) 30%, 
        rgba(0, 0, 0, 0.8) 80%)`,
                            filter: "blur(80px)",
                            WebkitFilter: "blur(80px)",
                        }}
                    />

                    <div className="max-w-3xl mx-auto text-center space-y-6 mb-[56px]">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white">
                            Unlock Smarter Investments with Cutting-Edge AI
                            Solutions
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                            Transforming investing with advanced AI solutions.
                            Our mission is to make smart, data-driven investing
                            accessible for everyone.
                        </p>

                        <div className="hidden md:flex md:items-center justify-center md:space-x-4">
                            <Button >
                                Get Started
                            </Button>
                            <Link
                                href="#s"
                                variant="ghost"
                                className="text-white bg-[#44444A] hover:text-white/80 border-0 py-[8px] px-[24px] rounded-[6px] shadow-[inset_0px_7.4px_18.5px_0px_rgba(255,255,255,0.11)] p-6 bg-gray-800"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                    <div>
                        <img
                            src={dashboard}
                            alt="dashboard"
                            class="w-full h-full object-cover [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_10%,rgba(0,0,0,0)_100%)]"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeHero;
