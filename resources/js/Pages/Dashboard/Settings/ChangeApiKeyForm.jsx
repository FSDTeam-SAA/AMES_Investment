// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Check } from "lucide-react";
// // import { usePage, useForm } from "@inertiajs/react";
// import { useForm } from "@inertiajs/react";

// export default function ChangeApiKeyForm({ closeForm }) {
//     const [step, setStep] = useState(1);
//     // const [formData, setFormData] = useState({
//     //     agreedToTerms: false,
//     //     apiKey: "",
//     //     secretKey: "",
//     // });
//     // const { user } = usePage().props;
//     // const { patch, processing } = useForm();

//     const { data, setData, patch, processing, errors, reset } = useForm({
//         apikey: "",
//         secretkey: "",
//     });

//     const handleInputChange = (e) => {
//         setData("apikey", e.target.value);
//         setData("secretkey", e.target.value);
//     };

//     // const handleNext = () => {
//     //     if (formData.agreedToTerms) {
//     //         setStep(2);
//     //     }
//     // };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // console.log("Form submitted with data:", formData);
//         setStep(3);

//         patch(
//             route("user-apikey-secretkey.updateapikeysecretkey", {
//                 onSuccess: () => setStep(3),
//             })
//         );
//     };

//     return (
//         <div className="">
//             <Card className="bg-black border-none w-full">
//                 <CardHeader>
//                     <CardTitle className="text-2xl font-bold text-center text-white">
//                         {step === 3 ? "API Keys Updated" : `Change API Key`}
//                     </CardTitle>
//                     {step !== 3 && (
//                         <p className="text-center text-gray-400">{step} of 2</p>
//                     )}
//                 </CardHeader>
//                 <CardContent>
//                     {step === 1 && (
//                         <div className="space-y-6">
//                             <div className="space-y-4">
//                                 <div>
//                                     <h3 className="text-sm text-gray-300 mb-2">
//                                         Terms and Conditions
//                                     </h3>
//                                     <Button
//                                         variant="secondary"
//                                         className="w-full bg-gray-800 hover:bg-gray-700 text-white"
//                                     >
//                                         Download Terms and Conditions
//                                     </Button>
//                                 </div>
//                                 <div>
//                                     <h3 className="text-sm text-gray-300 mb-2">
//                                         Disclosures
//                                     </h3>
//                                     <Button
//                                         variant="secondary"
//                                         className="w-full bg-gray-800 hover:bg-gray-700 text-white"
//                                     >
//                                         Download Disclosures
//                                     </Button>
//                                 </div>
//                                 <div className="flex items-center space-x-2">
//                                     <Checkbox
//                                         className="bg-white"
//                                         id="terms"
//                                         checked={formData.agreedToTerms}
//                                         onCheckedChange={(checked) =>
//                                             setFormData((prev) => ({
//                                                 ...prev,
//                                                 agreedToTerms: checked,
//                                             }))
//                                         }
//                                     />
//                                     <label
//                                         htmlFor="terms"
//                                         className="text-sm text-gray-300"
//                                     >
//                                         I agree to the terms and conditions
//                                     </label>
//                                 </div>
//                             </div>
//                             <Button
//                                 onClick={handleNext}
//                                 disabled={!formData.agreedToTerms}
//                                 className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600"
//                             >
//                                 Next
//                             </Button>
//                         </div>
//                     )}

//                     {step === 2 && (
//                         <form onSubmit={handleSubmit} className="space-y-6">
//                             <div className="space-y-4">
//                                 <div>
//                                     <label className="text-sm text-gray-300 mb-2 block">
//                                         Alpaca API Key
//                                     </label>
//                                     <Input
//                                         required
//                                         type="text"
//                                         name="apiKey"
//                                         value={formData.apiKey}
//                                         onChange={(e) =>
//                                             setFormData((prev) => ({
//                                                 ...prev,
//                                                 apiKey: e.target.value,
//                                             }))
//                                         }
//                                         className="bg-gray-800 border-gray-700 text-white"
//                                     />
//                                 </div>
//                                 <div>
//                                     <label className="text-sm text-gray-300 mb-2 block">
//                                         Alpaca Secret Key
//                                     </label>
//                                     <Input
//                                         required
//                                         type="text"
//                                         name="secretKey"
//                                         value={formData.secretKey}
//                                         onChange={(e) =>
//                                             setFormData((prev) => ({
//                                                 ...prev,
//                                                 secretKey: e.target.value,
//                                             }))
//                                         }
//                                         className="bg-gray-800 border-gray-700 text-white"
//                                     />
//                                 </div>
//                             </div>
//                             <Button
//                                 type="submit"
//                                 className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600"
//                             >
//                                 Submit
//                             </Button>
//                         </form>
//                     )}

//                     {step === 3 && (
//                         <div className="text-center space-y-6">
//                             <div className="flex justify-center">
//                                 <div className="rounded-lg bg-white p-2 inline-block">
//                                     <Check className="w-8 h-8 text-black" />
//                                 </div>
//                             </div>
//                             <Button onClick={closeForm} className="w-full">
//                                 Go Back to Dashboard
//                             </Button>
//                         </div>
//                     )}

//                     <Button
//                         variant="secondary"
//                         className="w-full bg-[#2a2a2a] hover:bg-[#3a3a3a] text-gray-300 mt-5"
//                     >
//                         Need Help? Contact Us
//                     </Button>
//                 </CardContent>
//             </Card>
//         </div>
//     );
// }

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Check } from "lucide-react";
import { useForm } from "@inertiajs/react";

export default function ChangeApiKeyForm({ closeForm }) {
    const [step, setStep] = useState(1);
    const { data, setData, patch, processing, errors, reset } = useForm({
        apikey: "",
        secretkey: "",
        agreedToTerms: false,
    });

    const handleInputChange = (field) => (e) => {
        setData(field, e.target.value);
    };

    const handleCheckboxChange = (checked) => {
        setData("agreedToTerms", checked);
    };

    const handleNext = () => {
        if (data.agreedToTerms) {
            setStep(2);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        patch(route("user-apikey-secretkey.updateapikeysecretkey"), {
            onSuccess: () => setStep(3),
        });
    };

    return (
        <div className="">
            <Card className="bg-black border-none w-full">
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
                                        checked={data.agreedToTerms}
                                        onCheckedChange={handleCheckboxChange}
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
                                disabled={!data.agreedToTerms}
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
                                        name="apiKey"
                                        value={data.apikey}
                                        onChange={handleInputChange("apikey")}
                                        className="bg-gray-800 border-gray-700 text-white"
                                    />
                                    {errors.apikey && (
                                        <p className="text-red-500 text-sm">
                                            {errors.apikey}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="text-sm text-gray-300 mb-2 block">
                                        Alpaca Secret Key
                                    </label>
                                    <Input
                                        required
                                        type="text"
                                        name="secretKey"
                                        value={data.secretkey}
                                        onChange={handleInputChange(
                                            "secretkey"
                                        )}
                                        className="bg-gray-800 border-gray-700 text-white"
                                    />
                                    {errors.secretkey && (
                                        <p className="text-red-500 text-sm">
                                            {errors.secretkey}
                                        </p>
                                    )}
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
                            <Button onClick={closeForm} className="w-full">
                                Go Back to Dashboard
                            </Button>
                        </div>
                    )}

                    <Button
                        variant="secondary"
                        className="w-full bg-[#2a2a2a] hover:bg-[#3a3a3a] text-gray-300 mt-5"
                    >
                        Need Help? Contact Us
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
