"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff } from "lucide-react"

export default function RegisterMultiStepForm() {
  const [step, setStep] = useState(1)
  const [showPassword, setShowPassword] = useState(false)
  const [showRepeatPassword, setShowRepeatPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    repeatPassword: "",
    termsAccepted: false,
    apiKey: "",
    secretKey: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked) => {
    setFormData((prev) => ({ ...prev, termsAccepted: checked }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      console.log("Form submitted with data:", formData)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Register</h2>
          {step > 1 && <p className="text-gray-400 mt-2">{step} of 3</p>}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="fullName" className="text-gray-400">
                  Full name
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Yourname"
                  className="bg-gray-800 border-gray-700 text-white"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-400">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="yourname@gmail.com"
                  className="bg-gray-800 border-gray-700 text-white"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phoneNumber" className="text-gray-400">
                  Phone Number
                </Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="(+12)435-1213-232"
                  className="bg-gray-800 border-gray-700 text-white"
                  required
                />
              </div>

              <div className="relative">
                <Label htmlFor="password" className="text-gray-400">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleInputChange}
                  className="bg-gray-800 border-gray-700 text-white pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-8 text-gray-400"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <div className="relative">
                <Label htmlFor="repeatPassword" className="text-gray-400">
                  Repeat Password
                </Label>
                <Input
                  id="repeatPassword"
                  name="repeatPassword"
                  type={showRepeatPassword ? "text" : "password"}
                  value={formData.repeatPassword}
                  onChange={handleInputChange}
                  className="bg-gray-800 border-gray-700 text-white pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                  className="absolute right-3 top-8 text-gray-400"
                >
                  {showRepeatPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="terms" className="text-gray-400">
                  Terms and Conditions
                </Label>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                  onClick={() => console.log("Download Terms")}
                >
                  Download Terms and Conditions
                </Button>
              </div>

              <div>
                <Label htmlFor="disclosures" className="text-gray-400">
                  Disclosures
                </Label>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                  onClick={() => console.log("Download Disclosures")}
                >
                  Download Disclosures
                </Button>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.termsAccepted}
                  onCheckedChange={handleCheckboxChange}
                  className="border-gray-400"
                  required
                />
                <label htmlFor="terms" className="text-sm text-gray-400">
                  I agree to the terms and conditions
                </label>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="apiKey" className="text-gray-400">
                  Alpaca API Key
                </Label>
                <Input
                  id="apiKey"
                  name="apiKey"
                  value={formData.apiKey}
                  onChange={handleInputChange}
                  placeholder="Your API Key"
                  className="bg-gray-800 border-gray-700 text-white"
                  required
                />
              </div>

              <div>
                <Label htmlFor="secretKey" className="text-gray-400">
                  Alpaca Secret Key
                </Label>
                <Input
                  id="secretKey"
                  name="secretKey"
                  value={formData.secretKey}
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
            <a href="#" className="text-blue-500 hover:text-blue-400">
              Login Here
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}

