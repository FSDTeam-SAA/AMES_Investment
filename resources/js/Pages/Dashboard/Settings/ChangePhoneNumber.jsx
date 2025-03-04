"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useForm } from "@inertiajs/react";

export default function ChangePhoneNumber({ closeForm }) {
    const [step, setStep] = useState(1);

    const { data, setData, patch, processing, errors, reset } = useForm({
        phoneNumber: "",
    });

    const handleInputChange = (e) => {
        setData("phoneNumber", e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        patch(route("user-phone.updatePhoneNumber"), {
            onSuccess: () => setStep(2),
        });
    };

    return (
        <Card className="bg-black text-white border-none">
            <CardContent className="pt-6">
                {step === 1 ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            <CardHeader className="p-0 space-y-2">
                                <CardTitle className="text-2xl font-semibold text-center">
                                    Change Phone Number
                                </CardTitle>
                                <p className="text-sm text-center text-gray-400">
                                    1 of 1
                                </p>
                            </CardHeader>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">
                                    Phone Number
                                </label>
                                <Input
                                    type="tel"
                                    name="phoneNumber"
                                    placeholder="Your Phone Number"
                                    value={data.phoneNumber}
                                    onChange={handleInputChange}
                                    required
                                    className={`bg-[#2a2a2a] border-none text-white ${
                                        errors.phoneNumber
                                            ? "border-red-500"
                                            : ""
                                    }`}
                                />
                                {errors.phoneNumber && (
                                    <p className="text-red-500 text-sm">
                                        {errors.phoneNumber}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <Button type="submit" className="w-full text-white">
                                {processing ? "Submitting..." : "Submit"}
                            </Button>
                            <Button
                                type="button"
                                variant="secondary"
                                className="w-full bg-[#2a2a2a] hover:bg-[#3a3a3a] text-gray-300"
                            >
                                Need Help? Contact Us
                            </Button>
                        </div>
                    </form>
                ) : (
                    <div className="space-y-6">
                        <div className="space-y-4 text-center">
                            <div className="flex justify-center">
                                <div className="p-4 rounded-lg bg-white inline-block">
                                    <Check className="w-8 h-8 text-black" />
                                </div>
                            </div>
                            <CardTitle className="text-2xl font-semibold">
                                Phone Number Updated
                            </CardTitle>
                        </div>
                        <Button
                            onClick={closeForm}
                            className="w-full py-6 text-white"
                        >
                            Go Back to Dashboard
                        </Button>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
