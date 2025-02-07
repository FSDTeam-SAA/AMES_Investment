"use client";

import { useState } from "react";
import { router } from "@inertiajs/react";
import bgLines from "../../../../public/img/BgLines.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MainLayout from "@/Layouts/MainLayout";
import ExternalButtons from "./ExternalButtons";

import vector2 from "../../../../public/img/contactVector.png";
export default function ContactPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        setIsLoading(true);
        setMessage("");

        const formData = new FormData(event.target);

        try {
            const response = await submitContactForm(formData);
            // post(route("contact.store"));

            const data = {
                name: formData.get("name"),
                email: formData.get("email"),
                question: formData.get("question"),
            };
            setMessage(response.message);
            router.post(route("contact.store"), data, {
                onSuccess: () => {
                    setMessage("Message sent successfully!");
                    event.target.reset();
                    setIsLoading(false);
                },
                onError: (errors) => {
                    console.error(errors);
                    setIsLoading(false);
                },
            });
        } catch (error) {
            console.error("Submission error:", error);
            setMessage("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }

    async function submitContactForm(formData) {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        console.log("Form submission:", {
            name: formData.get("name"),
            email: formData.get("email"),
            question: formData.get("question"),
        });

        return {
            success: true,
            message: "Thank you for your message. We'll get back to you soon!",
        };
    }

    return (
        <MainLayout>
            <div className=" w-full  relative overflow-hidden ">
                {/* gradient-bg-lighting */}
                <div className="absolute top-0 ">
                    <div className="flex justify-center items-center blur-[100px]">
                        <img src={vector2} alt="vector2" />
                    </div>
                    {/* bg-bars */}
                    <div className="absolute bottom-[650px] w-[80%] mx-auto h-[40%] z-0 opacity-80">
                        <img src={bgLines} alt="" className="w-full h-full " />
                    </div>
                </div>
                <div className="flex flex-col items-center px-4 py-12  ">
                    <div className="grid  lg:grid-cols-2 gap-12 items-start">
                        <div className=" z-20">
                            <ExternalButtons />
                        </div>
                        <div className="bg-[#161618]  max-w-[619px]   backdrop-blur-sm rounded-lg p-6 space-y-6 z-10">
                            <h2 className="text-2xl font-bold text-white mb-8">
                                Contact Us
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="name"
                                        className="text-sm text-gray-400"
                                    >
                                        What's your name?
                                    </label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="yourname"
                                        className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className="text-sm text-gray-400"
                                    >
                                        Email Address
                                    </label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="yourname@gmail.com"
                                        className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="question"
                                        className="text-sm text-gray-400"
                                    >
                                        What's your question?
                                    </label>
                                    <Textarea
                                        id="question"
                                        name="question"
                                        placeholder="Describe your questions here..."
                                        className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 min-h-[120px]"
                                        required
                                    />
                                </div>
                                {message && (
                                    <div
                                        className={`text-sm ${
                                            message.includes("error")
                                                ? "text-red-400"
                                                : "text-green-400"
                                        }`}
                                    >
                                        {message}
                                    </div>
                                )}
                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-gradient-to-t from-[#5350F2] to-[#5350F2] bg-gradient-to-r from-[#3FBC79] to-[#1B6DFA] hover:bg-emerald-600"
                                >
                                    {isLoading ? "Submitting..." : "Submit"}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
