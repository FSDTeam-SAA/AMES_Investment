"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Check } from "lucide-react";

export default function ChangeApiKeyForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        agreedToTerms: false,
        apiKey: "",
        secretKey: "",
    });

    const handleNext = () => {
        if (formData.agreedToTerms) {
            setStep(2);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with data:", formData);
        setStep(3);
    };

    return (
        <div className="min-h-screen  flex items-center justify-center bg-black/95 p-4">
            <Card className="w-full max-w-md  bg-black/90 border-gray-800">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center text-white">
                        {step === 3 ? "API Keys Updated" : `Change API Key`}
                    </CardTitle>
                    {step !== 3 && (
                        <p className="text-center text-gray-400">{step} of 2</p>
                    )}
                </CardHeader>
                <CardContent>
                    {step === 1 && (
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-sm text-gray-300 mb-2">
                                        Terms and Conditions
                                    </h3>
                                    <Button
                                        variant="secondary"
                                        className="w-full bg-gray-800 hover:bg-gray-700 text-white"
                                    >
                                        Download Terms and Conditions
                                    </Button>
                                </div>
                                <div>
                                    <h3 className="text-sm text-gray-300 mb-2">
                                        Disclosures
                                    </h3>
                                    <Button
                                        variant="secondary"
                                        className="w-full bg-gray-800 hover:bg-gray-700 text-white"
                                    >
                                        Download Disclosures
                                    </Button>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        className="bg-white"
                                        id="terms"
                                        checked={formData.agreedToTerms}
                                        onCheckedChange={(checked) =>
                                            setFormData((prev) => ({
                                                ...prev,
                                                agreedToTerms: checked,
                                            }))
                                        }
                                    />
                                    <label
                                        htmlFor="terms"
                                        className="text-sm text-gray-300"
                                    >
                                        I agree to the terms and conditions
                                    </label>
                                </div>
                            </div>
                            <Button
                                onClick={handleNext}
                                disabled={!formData.agreedToTerms}
                                className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600"
                            >
                                Next
                            </Button>
                        </div>
                    )}

                    {step === 2 && (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm text-gray-300 mb-2 block">
                                        Alpaca API Key
                                    </label>
                                    <Input
                                        required
                                        type="text"
                                        value={formData.apiKey}
                                        onChange={(e) =>
                                            setFormData((prev) => ({
                                                ...prev,
                                                apiKey: e.target.value,
                                            }))
                                        }
                                        className="bg-gray-800 border-gray-700 text-white"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm text-gray-300 mb-2 block">
                                        Alpaca Secret Key
                                    </label>
                                    <Input
                                        required
                                        type="password"
                                        value={formData.secretKey}
                                        onChange={(e) =>
                                            setFormData((prev) => ({
                                                ...prev,
                                                secretKey: e.target.value,
                                            }))
                                        }
                                        className="bg-gray-800 border-gray-700 text-white"
                                    />
                                </div>
                            </div>
                            <Button
                                type="submit"
                                className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600"
                            >
                                Submit
                            </Button>
                        </form>
                    )}

                    {step === 3 && (
                        <div className="text-center space-y-6">
                            <div className="flex justify-center">
                                <div className="rounded-lg bg-white p-2 inline-block">
                                    <Check className="w-8 h-8 text-black" />
                                </div>
                            </div>
                            <Button
                                onClick={() => setStep(1)}
                                className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600"
                            >
                                Go Back to Menu
                            </Button>
                        </div>
                    )}

                    <Button
                        variant="link"
                        className="w-full mt-4 text-gray-400 hover:text-gray-300"
                    >
                        Need Help? Contact Us
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
