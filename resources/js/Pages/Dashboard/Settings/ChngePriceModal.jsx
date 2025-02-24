import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { router } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

const pricingPlans = {
    basic: { name: "Basic", price: 5, details: "Basic Plan for individuals" },
    plus: { name: "Plus", price: 20, details: "Plus Plan for individuals" },
    pro: {
        name: "Pro",
        price: 20,
        details: "Professionals Plan for individuals",
    },
};

export function ChangePriceingModal() {
  const { userPricingPlan } = usePage().props;

    const [selectedPlan, setSelectedPlan] = useState("basic");

    useEffect(() => {
      if (userPricingPlan && pricingPlans[userPricingPlan]) {
          setSelectedPlan(userPricingPlan);
      }
  }, [userPricingPlan]);

    console.log("pricing plan: ", selectedPlan);

    const handleCheckout = () => {
        const planName = pricingPlans[selectedPlan].name.toLowerCase(); // Convert to lowercase
        console.log(pricingPlans[selectedPlan].name);
        // alert(`Redirecting to Stripe checkout for ${planName} plan`);
        // setSelectedPlan(auth.choose_payment_plan)

        // Uncomment the below line to send the plan name to your backend
        router.post("stripe/payment", { plan: planName });
    };

    return (
        <DialogContent className="sm:max-w-[425px] bg-black text-white">
            <DialogHeader>
                <DialogTitle>Change Pricing Plan</DialogTitle>
                <DialogDescription>
                    Choose a plan that best fits your needs.
                </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Select
                   
                        onValueChange={setSelectedPlan}
                        value={selectedPlan}
                    >
                        <SelectTrigger className="col-span-4 bg-gray-300 text-black">
                            <SelectValue  placeholder="Select a plan" />
                        </SelectTrigger>
                        <SelectContent >
                            <SelectItem value="basic">Basic</SelectItem>
                            <SelectItem value="plus">Plus</SelectItem>
                            <SelectItem value="pro">Pro</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <div className="col-span-4">
                        <h3 className="text-lg font-semibold">
                        {pricingPlans[selectedPlan]?.name || "Unknown Plan"}
                        </h3>
                        <p className="text-sm text-gray-500">
                        {pricingPlans[selectedPlan]?.details || "No details available"}
                        </p>
                        <p className="text-2xl font-bold mt-2">
                            ${pricingPlans[selectedPlan]?.price ?? "0"}/month
                        </p>
                    </div>
                </div>
            </div>
            <DialogFooter>
                <Button type="submit" onClick={handleCheckout}>
                    Get Started
                </Button>
            </DialogFooter>
        </DialogContent>
    );
}
