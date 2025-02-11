"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";
import { useForm } from "@inertiajs/react";

export default function ChangeEmail({ closeForm }) {
    const [step, setStep] = useState(1);

    const { data, setData, patch, processing, errors, reset } = useForm({
        email: "",
    });

    const handleInputChange = (e) => {
        setData("email", e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        patch(route("user-email.updateEmail"), {
            onSuccess: () => setStep(2),
        });
    };

    return (
        <div className="p-5">
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
                                type="email"
                                name="email"
                                value={data.email}
                                onChange={handleInputChange}
                                placeholder="Your Email"
                                className={`bg-gray-800 border-gray-700 text-white ${
                                    errors.email ? "border-red-500" : ""
                                }`}
                                required
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        <Button
                            type="submit"
                            className="w-full text-white"
                            disabled={processing}
                        >
                            {processing ? "Submitting..." : "Submit"}
                        </Button>
                    </form>

                    <Button
                        variant="secondary"
                        className="w-full bg-[#2a2a2a] hover:bg-[#3a3a3a] text-gray-300"
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

                    <Button onClick={closeForm} className="w-full text-white">
                        Go Back to Dashboard
                    </Button>
                </div>
            )}
        </div>
    );
}
