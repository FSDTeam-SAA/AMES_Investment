"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";

export default function EmailUpdateForm() {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted email:", email);
        setStep(2);
    };

    const handleGoBack = () => {
        setStep(1);
        setEmail("");
    };

    return (
        <div className="min-h-[400px] w-full max-w-sm bg-black p-6 rounded-lg">
            {step === 1 ? (
                <div className="space-y-6">
                    <div className="text-center space-y-2">
                        <h1 className="text-2xl font-semibold text-white">
                            Change Email
                        </h1>
                        <p className="text-sm text-gray-400">1 of 1</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label
                                htmlFor="email"
                                className="text-sm text-gray-200"
                            >
                                Email
                            </label>
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your Email"
                                className="bg-gray-800 border-gray-700 text-white"
                                required
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white"
                        >
                            Submit
                        </Button>
                    </form>

                    <Button
                        variant="ghost"
                        className="w-full text-gray-400 hover:text-white hover:bg-gray-800"
                    >
                        Need Help? Contact Us
                    </Button>
                </div>
            ) : (
                <div className="space-y-6 text-center">
                    <div className="flex justify-center">
                        <div className="h-12 w-12 rounded-lg bg-white flex items-center justify-center">
                            <Check className="h-6 w-6 text-black" />
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold text-white">
                        Email Updated
                    </h2>

                    <Button
                        onClick={handleGoBack}
                        className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white"
                    >
                        Go Back to Menu
                    </Button>
                </div>
            )}
        </div>
    );
}
