import MainLayout from "@/Layouts/MainLayout"
import React from 'react'
import { Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProfessionalPlan from "./ProfessionalPlan"
import PlusPlan from "./PlusPlan"
import BasicPlan from "./BasicPlan"
import GetStartedCard from "@/Components/GetStartedCard"

const pricingPlans = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-black/95 flex flex-col items-center px-4 py-16">
      <div className="w-full max-w-6xl mx-auto text-center space-y-4 mb-12 md:mt-[-10px]">
        <Button className="rounded-full h-[28px] scale-75 mb-5" variant="secondary">
          <Settings className="w-4 h-4" />
          Features
        </Button>
        <h1 className="text-4xl lg:text-[50px] leading-10 font-bold text-white mb-2">Pricing Plans</h1>
        <p className="text-gray-400">Choose a plan that fits your investing goals</p>
        <Button className="px-7 h-[38px]">
          Get Started
        </Button>
      </div>

      <div className="w-full max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        <BasicPlan/>
        <PlusPlan/>
        <ProfessionalPlan/>
      </div>
    </div>
    <GetStartedCard title="Start Your Path to Smarter Investing" />
    

    </MainLayout>
  )
}

export default pricingPlans