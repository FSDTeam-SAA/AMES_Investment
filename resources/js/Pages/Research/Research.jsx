import GetStartedCard from "@/Components/GetStartedCard";
import { Button } from "@/Components/ui/button";
import MainLayout from "@/Layouts/MainLayout";
import React from "react";

import bgLines from "../../../../public/img/BgLines.png";
import vector2 from "../../../../public/img/Vector 2.png";

const Research = () => {
    return (
        <MainLayout>
            <section>
                <div className=" w-full flex flex-col items-center justify-center px-4 py-16 relative">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 flex justify-center items-center">
                            <img
                                src={vector2 || "/placeholder.svg"}
                                alt="vector2"
                                className="w-full h-full object-cover blur-[130px]"
                            />
                        </div>
                        <div className="absolute inset-0 flex justify-center items-center opacity-80 translate-y-[-250px]">
                            <img
                                src={bgLines || "/placeholder.svg"}
                                alt=""
                                className="w-[80%] h-[40%] object-contain"
                            />
                        </div>
                    </div>
                    <div className="z-20">
                        <div className="flex justify-center items-center">
                            <Button
                                variant="ghost"
                                className="hover:bg-transparent mb-5"
                            >
                                About Us →
                            </Button>
                        </div>

                        <div className="max-w-3xl mx-auto text-center space-y-6 ">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#FFFFFF]">
                                AIS Research
                            </h1>

                            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                                Transforming investing with advanced AI
                                solutions. Our mission is to make smart,
                                data-driven investing accessible for everyone.
                            </p>

                            <Button
                                variant="secondary"
                                className="text-[14px] bg-[#161618] text-white mt-4 px-20"
                            >
                                Download Our Research Paper
                            </Button>
                        </div>
                    </div>
                    <div className="">
                        <GetStartedCard title="Begin Your Journey to Smarter Investing" />
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default Research;
