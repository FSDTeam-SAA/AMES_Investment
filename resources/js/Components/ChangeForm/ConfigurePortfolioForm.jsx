import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Brain } from "lucide-react";

export function PortfolioConfigForm() {
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
    setRiskLevel(value);
    setFormData((prev) => ({ ...prev, riskLevel: value[0] }));
  };

  const handleRequirementsChange = (e) => {
    setRequirements(e.target.value);
    setFormData((prev) => ({ ...prev, requirements: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setOpen(false);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-semibold">Terms and Conditions</h3>
              <Button variant="secondary" className="w-full justify-start" onClick={() => console.log("Download T&C")}>
                Download Terms and Conditions
              </Button>
              <h3 className="font-semibold">Disclosures</h3>
              <Button variant="secondary" className="w-full justify-start" onClick={() => console.log("Download Disclosures")}>
                Download Disclosures
              </Button>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" checked={agreed} onCheckedChange={handleAgreementChange} />
                <label htmlFor="terms" className="text-sm leading-none">
                  I agree to the terms and conditions
                </label>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="font-semibold">Risk Adjustment</h3>
            <Slider value={riskLevel} onValueChange={handleRiskChange} max={100} step={1} className="w-full" />
            <div className="flex justify-between text-sm">
              <p>Low Returns - Low Volatility</p>
              <p>High Returns - High Volatility</p>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="font-semibold">Please add any other requirements for the model.</h3>
            <Textarea placeholder="Tell us how you would like to train your model." value={requirements} onChange={handleRequirementsChange} className="h-32" />
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <div className="flex justify-center">
              <Brain className="h-12 w-12 text-yellow-400" />
            </div>
            <h2 className="text-xl text-center">Are you sure you want this configuration?</h2>
            <Button type="submit" className="w-full bg-green-500 hover:bg-green-600">
              Save/Train/Deploy Model
            </Button>
            <Button variant="destructive" className="w-full" onClick={() => setOpen(false)}>
              Exit and Delete Prompt
            </Button>
          </div>
        );
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="text-xl text-center">Configure Portfolio</DialogTitle>
            <div className="text-center text-sm text-muted-foreground">
              {step} of {totalSteps}
            </div>
          </DialogHeader>
          {renderStep()}
          <div className="flex flex-col gap-2">
            {step < totalSteps && (
              <Button type="button" onClick={handleNext} disabled={step === 1 && !agreed} className="bg-green-500 hover:bg-green-600">
                Next
              </Button>
            )}
            <Button type="button" variant="secondary" className="bg-gray-700 text-white hover:bg-gray-600">
              Need Help? Contact Us
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
