import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogClose,
} from "@/components/ui/dialog";
import { Link, usePage } from "@inertiajs/react";

const PaymentSuccess = ({ open }) => {

    const [isOpen, setIsOpen] = useState(open);
    console.log("payment-success component: ",isOpen)

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="max-w-md h-[250px] bg-gray-900">
                <DialogHeader>
                    <div className="flex justify-between items-center">
                        <div className="flex-1 flex justify-center">
                            <div className="p-4 rounded-lg bg-gray-600 inline-block">
                                <Check className="w-8 h-8 text-white" />
                            </div>
                        </div>
                        <DialogClose
                            onClick={() => setIsOpen(false)}
                            className="bg-black mt-[-50px] rounded-full p-1"
                        >
                            <X className="w-5 h-5 text-white" />
                        </DialogClose>
                    </div>
                    <DialogTitle className="text-2xl text-white font-semibold text-center">
                        {"Payment Successful"}
                    </DialogTitle>
                </DialogHeader>
                <Link href="/dashboard">
                    <Button
                        onClick={() => setIsOpen(false)}
                        className="w-full py-4 border-none text-white"
                    >
                        Go Back to Dashboard
                    </Button>
                </Link>
            </DialogContent>
        </Dialog>
    );
};

export default PaymentSuccess;
