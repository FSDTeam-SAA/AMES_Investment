"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MainLayout from "@/Layouts/MainLayout";
import ExternalButtons from "./ExternalButtons";
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
            console.log("Form submitted:", {
                name: formData.get("name"),
                email: formData.get("email"),
                question: formData.get("question"),
            });
            setMessage(response.message);
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
            <div className=" w-full bg-gradient-to-br from-black to-slate-900 relative overflow-hidden">
                {/* <div
        className="absolute inset-0 w-full h-full opacity-30"
        style={{

          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.12'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      /> */}

                <div className=" mx-auto px-4 py-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <ExternalButtons />
                        <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 space-y-6">
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
                                    className="w-full"
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
