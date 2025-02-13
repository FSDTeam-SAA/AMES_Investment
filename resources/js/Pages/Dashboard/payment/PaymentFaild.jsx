import React from "react";
import { Button } from "@/components/ui/button";
import { ShieldX, X } from "lucide-react";
import { Link } from "@inertiajs/react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogClose,
} from "@/components/ui/dialog";

const PaymentFaild = ({ open, onOpenChange }) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-md h-[250px] bg-gray-900">
                <DialogHeader>
                    <div className="flex justify-between items-center">
                        <div className="flex-1 flex justify-center ">
                            <div className="p-2 rounded-lg bg-white  inline-block">
                                <ShieldX className="w-12 h-12 text-red-600" />
                            </div>
                        </div>
                    </div>
                    <DialogTitle className="text-2xl text-white font-semibold text-center">
                        Payment Faild
                    </DialogTitle>
                </DialogHeader>

                <Link href="/dashboard">
                    <Button
                        onClick={() => onOpenChange(false)}
                        className="w-full py-4 border-none text-white"
                    >
                        Go Back to Dashboard
                    </Button>
                </Link>
            </DialogContent>
        </Dialog>
    );
};

export default PaymentFaild;
