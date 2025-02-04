import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import innovation from "../../../../public/img/Code Monitor.png";
import transparency from "../../../../public/img/Customer Support.png";
import excellence from "../../../../public/img/Trophy.png";

export default function MissionAndValue() {
    return (
        <section className="relative min-h-screen lg:h-[700px] w-full overflow-hidden  px-4 py-20">
            <div className="mx-auto max-w-6xl text-center ">
                <Badge className="mb-6 border-[#44444A] text-white pr-[16px] py-1 pl-[8px] shadow-[inset_0px_7.4px_18.5px_0px_rgba(255,255,255,0.11)] bg-gray-800 rounded-lg">
                    Process
                </Badge>

                <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                    How It Works
                </h2>

                <p className="mb-16 text-lg text-gray-400 sm:text-xl">
                    Start investing smarter in just three easy steps.
                </p>

                <div className="grid gap-8 md:grid-cols-3 md:gap-12">
                    <div className="group flex flex-col items-center">
                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border  bg-black/50 transition-all duration-200 border-gray-700 sm:h-20 sm:w-20 shadow-[inset_0px_7.4px_18.5px_0px_rgba(255,255,255,0.11)] p-6 bg-gray-800 ">
                            <img src={innovation} />
                        </div>
                        <h3 className="mb-3 text-xl font-semibold text-white sm:text-2xl">
                            Innovation
                        </h3>
                        <p className="text-gray-400">
                            Create an account in minutes.
                        </p>
                    </div>

                    <div className="group flex flex-col items-center">
                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border  bg-black/50 transition-all duration-200 border-gray-700 sm:h-20 sm:w-20 shadow-[inset_0px_7.4px_18.5px_0px_rgba(255,255,255,0.11)] p-6 bg-gray-800 ">
                            <img src={transparency} />
                        </div>
                        <h3 className="mb-3 text-xl font-semibold text-white sm:text-2xl">
                            Custom AI Strategies
                        </h3>
                        <p className="text-gray-400">
                            Set preferences to match your goals.
                        </p>
                    </div>

                    <div className="group flex flex-col items-center s">
                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border  bg-black/50 transition-all duration-200 border-gray-700 sm:h-20 sm:w-20  shadow-[inset_0px_7.4px_18.5px_0px_rgba(255,255,255,0.11)] p-6 bg-gray-800 ">
                            <img src={excellence} />
                        </div>
                        <h3 className="mb-3 text-xl font-semibold text-white sm:text-2xl">
                            Track Performance
                        </h3>
                        <p className="text-gray-400">
                            Monitor real-time results on your dashboard.
                        </p>
                    </div>
                </div>

                <Button
                    size="lg"
                    className="mt-16  bg-gradient-to-r from-emerald-500 to-blue-500 text-white hover:from-emerald-600 hover:to-blue-600"
                >
                    Get Started
                </Button>
            </div>
        </section>
    );
}
