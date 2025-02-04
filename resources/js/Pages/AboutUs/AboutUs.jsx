import { Button } from "@/Components/ui/button";
import MainLayout from "@/Layouts/MainLayout";
import React from "react";
import img from "../../../../public/img/aboutS2.png";
import img2 from "../../../../public/img/about-s3.png";
import dashboard from "../../../../public/img/Dashboad.png";
import MissionAndValue from "./MissionAndValue";
import GetStartedCard from "@/Components/GetStartedCard";

import bgLines from "../../../../public/img/BgLines.png";
import vector2 from "../../../../public/img//Vector 2.png";

const AboutUs = () => {
    return (
        <MainLayout>
            <section>
                <div className="min-h-[600px] w-full flex flex-col items-center justify-center px-4 py-16  from-gray-950 to-teal-950/30 relative">
                    {/* gradient-bg-lighting */}
                    <div className="absolute top-0 ">
                        <div className="flex justify-center items-center  blur-[130px]">
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

                    <div className="max-w-3xl mx-auto text-center space-y-6 mb-[56px] z-10 mt-[60px]">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#FFFFFF]">
                            About Ames Investment Systems
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                            Transforming investing with advanced AI solutions.
                            Our mission is to make smart, data-driven investing
                            accessible for everyone.
                        </p>

                        <Button
                            variant="secondary"
                            className="text-[14px] bg-[#161618] text-white mt-4 "
                        >
                            Download Our Vision Paper
                        </Button>
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
            <section className="flex flex-wrap w-full justify-center items-center md:flex-row flex-col mb-[40px] lg:mb-[80px] mt-[40px] lg:mt-[80px]">
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src={img}
                        alt="our-journey"
                        className="w-full max-w-[500px]"
                    />
                </div>
                <div className="w-full md:w-1/2 p-4 md:p-8 text-center md:text-left">
                    <h2 className="text-[24px] leading-[36px] text-white">
                        Our Journey
                    </h2>
                    <p className="text-[16px] leading-[24px] text-[#ACB5BB]">
                        For over six years, Ames Investment Systems has been
                        meticulously developed and refined through multiple beta
                        programs, ensuring a robust and reliable platform. Our
                        dedication to innovation and rigorous testing gives us
                        the confidence to deliver tools that empower investors
                        to optimize their portfolios, manage risks, and achieve
                        financial success with ease.
                    </p>
                </div>
            </section>
            <section className="flex flex-wrap w-full justify-center items-center md:flex-row flex-col-reverse">
                <div className="w-full md:w-1/2 p-4 md:p-8 text-center md:text-left">
                    <h2 className="text-[24px] leading-[36px] text-white">
                        Our Story
                    </h2>
                    <p className="text-[16px] leading-[24px] text-[#ACB5BB]">
                        Ames Investment Systems was born from a collaborative
                        effort. We started by consulting professionals to shape
                        our vision, generating proprietary models and software
                        for investing. Through rigorous beta testing and
                        continuous refinement, we crafted a platform that’s as
                        reliable as it is innovative. Now, with years of
                        development behind us, we’re proud to launch a solution
                        designed to empower investors at every level—delivering
                        cutting-edge tools to simplify investing and drive
                        consistent performance.
                    </p>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src={img2}
                        alt="aboutS2"
                        className="w-full max-w-[500px]"
                    />
                </div>
            </section>

            <MissionAndValue />

            {/* sign up now card */}
            <div className="lg:mt-[-300px]">
                <GetStartedCard title="Take the First Step to Smarter Investment Choices" />
            </div>
        </MainLayout>
    );
};

export default AboutUs;
