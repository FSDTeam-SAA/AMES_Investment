import React, { forwardRef } from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

const RiskSlider = forwardRef(({ className, ...props }, ref) => (
    <div className="space-y-6">
        <h3 className="font-semibold text-white">Risk Adjustment</h3>
        <SliderPrimitive.Root
            ref={ref}
            className={cn(
                "relative flex w-full touch-none select-none items-center",
                className
            )}
            {...props}
        >
            <SliderPrimitive.Track className="relative h-[15px] w-full grow overflow-hidden rounded-full bg-neutral-800">
                <SliderPrimitive.Range className="absolute h-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400" />
            </SliderPrimitive.Track>
            <SliderPrimitive.Thumb className="block h-[28px] w-5   border-2 border-white bg-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
        </SliderPrimitive.Root>
        <div className="relative w-full">
            <div className="absolute left-0 top-0 h-4 w-[1px] bg-neutral-700" />
            <div className="absolute left-1/3 top-0 h-4 w-[1px] bg-neutral-700" />
            <div className="absolute left-2/3 top-0 h-4 w-[1px] bg-neutral-700" />
            <div className="absolute right-0 top-0 h-4 w-[1px] bg-neutral-700" />
            <div className="mt-6 flex justify-between text-sm text-neutral-400">
                <div className="flex flex-col items-start">
                    <span>Low Returns</span>
                    <span>Low Volatility</span>
                </div>
                <div className="flex flex-col items-end">
                    <span>High Returns</span>
                    <span>High Volatility</span>
                </div>
            </div>
        </div>
    </div>
));

RiskSlider.displayName = SliderPrimitive.Root.displayName;

export { RiskSlider };
