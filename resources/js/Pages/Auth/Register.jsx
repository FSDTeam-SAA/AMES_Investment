"use client";

import { useState } from "react";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        phoneNumber: "",
        password: "",
        password_confirmation: "",
        termsAccepted: false,
        apiKey: "",
        secretKey: "",
    });

    const [step, setStep] = useState(1);
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (checked) => {
        setData((prev) => ({ ...prev, termsAccepted: checked }));
    };

    const submit = (e) => {
        e.preventDefault();
        if (step < 3) {
            setStep(step + 1);
        } else {
            post(route("register.submit"), {
                onFinish: () => reset("password", "password_confirmation"),
            });
        }
    };

    return (
        <MainLayout>
            <Head title="Register" />

            <div className="min-h-screen flex items-center justify-center bg-black p-4">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-white">
                            Register
                        </h2>
                        {step > 1 && (
                            <p className="text-gray-400 mt-2">{step} of 3</p>
                        )}
                    </div>

                    <form onSubmit={submit} className="space-y-6">
                        {step === 1 && (
                            <div className="space-y-4">
                                <div>
                                    <Label
                                        htmlFor="name"
                                        className="text-gray-400"
                                    >
                                        Full name
                                    </Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={data.name}
                                        onChange={handleInputChange}
                                        placeholder="Your Name"
                                        className="bg-gray-800 border-gray-700 text-white"
                                        required
                                    />
                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <Label
                                        htmlFor="email"
                                        className="text-gray-400"
                                    >
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={data.email}
                                        onChange={handleInputChange}
                                        placeholder="youremail@example.com"
                                        className="bg-gray-800 border-gray-700 text-white"
                                        required
                                    />
                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <Label
                                        htmlFor="phoneNumber"
                                        className="text-gray-400"
                                    >
                                        Phone Number
                                    </Label>
                                    <Input
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        type="tel"
                                        value={data.phoneNumber}
                                        onChange={handleInputChange}
                                        placeholder="(+12) 345-678-910"
                                        className="bg-gray-800 border-gray-700 text-white"
                                        required
                                    />
                                </div>

                                <div className="relative">
                                    <Label
                                        htmlFor="password"
                                        className="text-gray-400"
                                    >
                                        Password
                                    </Label>
                                    <Input
                                        id="password"
                                        name="password"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        value={data.password}
                                        onChange={handleInputChange}
                                        className="bg-gray-800 border-gray-700 text-white pr-10"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        className="absolute right-3 top-8 text-gray-400"
                                    >
                                        {showPassword ? (
                                            <EyeOff size={20} />
                                        ) : (
                                            <Eye size={20} />
                                        )}
                                    </button>
                                </div>

                                <div className="relative">
                                    <Label
                                        htmlFor="password_confirmation"
                                        className="text-gray-400"
                                    >
                                        Repeat Password
                                    </Label>
                                    <Input
                                        id="password_confirmation"
                                        name="password_confirmation"
                                        type={
                                            showRepeatPassword
                                                ? "text"
                                                : "password"
                                        }
                                        value={data.password_confirmation}
                                        onChange={handleInputChange}
                                        className="bg-gray-800 border-gray-700 text-white pr-10"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowRepeatPassword(
                                                !showRepeatPassword
                                            )
                                        }
                                        className="absolute right-3 top-8 text-gray-400"
                                    >
                                        {showRepeatPassword ? (
                                            <EyeOff size={20} />
                                        ) : (
                                            <Eye size={20} />
                                        )}
                                    </button>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-4">
                                <div>
                                    <Label
                                        htmlFor="terms"
                                        className="text-gray-400"
                                    >
                                        Terms and Conditions
                                    </Label>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="w-full bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                                        onClick={() =>
                                            console.log("Download Terms")
                                        }
                                    >
                                        Download Terms and Conditions
                                    </Button>
                                </div>
                                <div>
                                    <Label
                                        htmlFor="disclosures"
                                        className="text-gray-400"
                                    >
                                        Disclosures
                                    </Label>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="w-full bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                                        onClick={() =>
                                            console.log("Download Disclosures")
                                        }
                                    >
                                        Download Disclosures
                                    </Button>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="terms"
                                        checked={data.termsAccepted}
                                        onCheckedChange={handleCheckboxChange}
                                        className="border-gray-400"
                                        required
                                    />
                                    <label
                                        htmlFor="terms"
                                        className="text-sm text-gray-400"
                                    >
                                        I agree to the terms and conditions
                                    </label>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="space-y-4">
                                <div>
                                    <Label
                                        htmlFor="apiKey"
                                        className="text-gray-400"
                                    >
                                        Alpaca API Key
                                    </Label>
                                    <Input
                                        id="apiKey"
                                        name="apiKey"
                                        value={data.apiKey}
                                        onChange={handleInputChange}
                                        placeholder="Your API Key"
                                        className="bg-gray-800 border-gray-700 text-white"
                                        required
                                    />
                                </div>

                                <div>
                                    <Label
                                        htmlFor="secretKey"
                                        className="text-gray-400"
                                    >
                                        Alpaca Secret Key
                                    </Label>
                                    <Input
                                        id="secretKey"
                                        name="secretKey"
                                        value={data.secretKey}
                                        onChange={handleInputChange}
                                        placeholder="Your Secret Key"
                                        className="bg-gray-800 border-gray-700 text-white"
                                        required
                                    />
                                </div>
                            </div>
                        )}

                        <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white"
                        >
                            {step === 3 ? "Submit" : "Next"}
                        </Button>

                        <p className="text-center text-gray-400 text-sm">
                            Already have an account?{" "}
                            <Link
                                href={route('login')}
                                className="text-blue-500 hover:text-blue-400"
                            >
                                Login Here
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </MainLayout>
    );
}
