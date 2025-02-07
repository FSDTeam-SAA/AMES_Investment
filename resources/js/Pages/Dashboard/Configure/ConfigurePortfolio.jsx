import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Brain } from "lucide-react";
import { RiskSlider } from "@/Components/ui/riskSlider";
import aiSparkle from "../../../../../public/img/ai-sparkle.png";

export default function ConfigurePortfolio({ onClose }) {
    const [step, setStep] = useState(1);
    const [open, setOpen] = useState(true);
    const [agreed, setAgreed] = useState(false);
    const [riskLevel, setRiskLevel] = useState([50]);
    const [requirements, setRequirements] = useState("");

    const [formData, setFormData] = useState({
        agreedToTerms: false,
        riskLevel: 50,
        requirements: "",
    });

    const totalSteps = 4;

    const handleNext = () => {
        if (step < totalSteps) {
            setStep(step + 1);
        }
    };

    const handleAgreementChange = (checked) => {
        setAgreed(checked);
        setFormData((prev) => ({ ...prev, agreedToTerms: checked }));
    };

    const handleRiskChange = (value) => {
        const newValue = value[0]; // Extract the number from the array
        setRiskLevel(newValue);
        setFormData((prev) => ({ ...prev, riskLevel: newValue }));
    };

    const handleRequirementsChange = (e) => {
        setRequirements(e.target.value);
        setFormData((prev) => ({ ...prev, requirements: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        onClose();
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h3 className="font-semibold text-[#FFFFFF] text-[14px]">
                                Terms and Conditions
                            </h3>
                            <Button
                                type="button"
                                variant="custom"
                                className="w-full justify-start bg-zinc-800 hover:bg-zinc-700 text-zinc-300"
                                onClick={() => console.log("Download T&C")}
                            >
                                Download Terms and Conditions
                            </Button>
                            <h3 className="font-semibold text-[#FFFFFF] text-[14px]">
                                Disclosures
                            </h3>
                            <Button
                                type="button"
                                variant="custom"
                                className="w-full justify-start bg-zinc-800 hover:bg-zinc-700 text-zinc-300"
                                onClick={() =>
                                    console.log("Download Disclosures")
                                }
                            >
                                Download Disclosures
                            </Button>
                            <div className="flex flex-col items-end space-x-2 pb-6 gap-2">
                                <label
                                    htmlFor="terms"
                                    className="text-sm  text-[#FFFFFF] "
                                >
                                    I agree to the terms and conditions
                                </label>
                                <Checkbox
                                    id="terms"
                                    checked={agreed}
                                    onCheckedChange={handleAgreementChange}
                                    className="h-[25px] w-[27px] border border-gray-500 bg-gray-200 
                                    data-[state=checked]:bg-[#594def] data-[state=checked]:border-blue-700 
                                    data-[state=checked]:text-white"
                                />
                            </div>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-6">
                        <h3 className="font-semibold">Risk Adjustment</h3>
                        <RiskSlider
                            value={[riskLevel]} // Radix Slider expects an array
                            onValueChange={handleRiskChange}
                            max={100}
                            step={1}
                            className="w-full"
                        />

                        <div className="flex justify-between text-sm">
                            <p>Low Returns - Low Volatility</p>
                            <p>High Returns - High Volatility</p>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-6 text-[12px] mb-10">
                        <div className="text-[#FFFFFF] ">
                            <h3 className="font-medium">
                                Please add any other requirements for the model.
                            </h3>
                            <ul className="list-disc pl-5">
                                <li>
                                    Symbols and Asset Classes To Not Invest In
                                    (SPY,AAPL)
                                </li>
                                <li>
                                    Target Specific Model Requirements
                                    (PF,Sharpe,SQN)
                                </li>
                                <li>Trade/Investment Frequency</li>
                            </ul>
                        </div>

                        <Textarea
                            placeholder="Tell us how you would like to train your model."
                            value={requirements}
                            onChange={handleRequirementsChange}
                            className="h-32 bg-[#2c2c30] text-[#FFFFFF]"
                        />
                    </div>
                );
            case 4:
                return (
                    <div className="space-y-6">
                        <div className="flex justify-center">
                            <img
                                src={aiSparkle}
                                alt="AI Sparkle"
                                className="h-[76px] w-[82px]"
                            />
                        </div>
                        <h2 className="text-[30px] text-center text-[#FFFFFF]">
                            Are you sure you want this configuration?
                        </h2>
                        <Button type="submit" className="w-full">
                            Save/Train/Deploy Model
                        </Button>
                        <div className="flex justify-center pb-2">
                            <Button
                                type="button"
                                variant="custom"
                                className="w-[228px] h-[37px] bg-gradient-to-r from-red-600 to-orange-400 text-white font-medium px-4 py-2 rounded-md shadow-md hover:opacity-90"
                                onClick={() => setOpen(false)}
                            >
                                Exit and Delete Prompt
                            </Button>
                        </div>
                    </div>
                );
        }
    };

    return (
        <Dialog
            open={open}
            onOpenChange={(isOpen) => {
                setOpen(isOpen);
                if (!isOpen) {
                    onClose();
                }
            }}
        >
            <DialogContent className="sm:max-w-[407px] bg-black boarder-none">
                <form onSubmit={handleSubmit}>
                    <DialogHeader className="mb-5">
                        <DialogTitle className="text-[32px] leading-[48px] text-center text-white">
                            Configure Portfolio
                        </DialogTitle>
                        <div className="text-center text-sm  text-[#ACB5BB] text-[20px]">
                            {step} of {totalSteps}
                        </div>
                    </DialogHeader>
                    {renderStep()}
                    <div className="flex flex-col gap-2">
                        {step < totalSteps && (
                            <Button
                                type="button"
                                onClick={handleNext}
                                disabled={step === 1 && !agreed}
                            >
                                Next
                            </Button>
                        )}
                        <div className="flex justify-center mt-3">
                            <Button
                                type="button"
                                variant="custom"
                                className="w-[206px] h-[36px] px-[24px] py-[13px] bg-gray-700 text-white hover:bg-gray-600 "
                            >
                                Need Help? Contact Us
                            </Button>
                        </div>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
