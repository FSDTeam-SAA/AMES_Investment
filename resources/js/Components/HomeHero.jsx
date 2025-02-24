import React from "react";
import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";

import dashboard from "../../../public/img/Dashboad.png";
import bgLines from "../../../public/img/BgLines.png";
import vector2 from "../../../public/img/Vector 2.png";

const HomeHero = () => {
    return (
        <div>
            <section>
                <div className=" min-h-[600px] w-full flex flex-col items-center justify-center lg:pt-[120px] px-4 py-16 from-gray-950 to-teal-950/30 relative ">
                    {/* gradient-bg-lighting */}
                    <div className="absolute top-0 ">
                        <div className="flex justify-center items-center blur-[130px]">
                            <img src={vector2} alt="vector2" />
                        </div>
                        {/* bg-bars */}
                        <div className="absolute inset-0 w-[80%] mx-auto h-[40%] z-0 opacity-80">
                            <img
                                src={bgLines}
                                alt=""
                                className="w-full h-full "
                            />
                        </div>
                    </div>

                    <div className="max-w-3xl mx-auto text-center space-y-6 mb-[56px] z-10">
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
                            <Link href={route("register.form")}>
                                <Button className="px-[24px] w-[124px]">
                                    Sign Up
                                </Button>
                            </Link>
                            <Button
                                variant="secondary"
                                className="text-white bg-[#161618] hover:text-white/80 border-0 py-[8px] px-[24px] rounded-[6px] shadow-[inset_0px_7.4px_18.5px_0px_rgba(255,255,255,0.11)] "
                            >
                                Learn More
                            </Button>
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
