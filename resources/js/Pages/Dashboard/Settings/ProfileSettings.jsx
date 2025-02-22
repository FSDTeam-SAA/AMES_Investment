import React, { useState } from "react";
import { Button } from "@/Components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { MessageSquareText, X } from "lucide-react";
import ChangeEmail from "./ChangeEmail";
import ChangePhoneNumber from "./ChangePhoneNumber";
import ChangeApiKeyForm from "./ChangeApiKeyForm";
import { router } from "@inertiajs/react";
import { ChangePriceingModal } from "./ChngePriceModal";

const ProfileSettings = () => {
    const [openModal, setOpenModal] = useState(null);

    const openForm = (formType) => setOpenModal(formType);
    const closeForm = () => setOpenModal(null);

    const handlePauseOrderSubmit = (e) => {
        e.preventDefault();
        
        
        console.log("Paused orders");

        router.get(route("pause.orders"));

        // onClose();
    };

    const handleStopSubmit = (e) => {
        e.preventDefault();
        
        
        console.log("Stopped orders");

        router.get(route("status.stop"));

        // onClose();
    };



    return (
        <div className="flex gap-5 items-start mt-5">
            <div className="w-2/3 bg-transparent backdrop-blur-lg border-[0.75px] border-[#2C2C30] px-5 pt-5 pb-20 rounded-[10px]">
                <h4 className="text-[18px] font-bold text-[#FFFFFF]">
                    Settings
                </h4>
                <div className="flex flex-col gap-3">
                    <Button
                        variant="custom"
                        onClick={() => openForm("email")}
                        className="bg-[#2C2C30] hover:bg-[#2C2C30]/80 text-[16px] text-[#FFFFFF] py-[25px] px-[12px]"
                    >
                        Change Email
                    </Button>
                    <Button
                        variant="custom"
                        onClick={() => openForm("phone")}
                        className="bg-[#2C2C30] hover:bg-[#2C2C30]/80 text-[16px] text-[#FFFFFF] py-[25px] px-[12px]"
                    >
                        Change Phone Number
                    </Button>
                    <Button
                        variant="custom"
                        onClick={() => openForm("apiKeys")}
                        className="bg-[#2C2C30] hover:bg-[#2C2C30]/80 text-[16px] text-[#FFFFFF] py-[25px] px-[12px]"
                    >
                        Update Or Change API Keys
                    </Button>
                    <div>


                    </div>
                    <Button
                        variant="custom"
                        className="bg-[#2C2C30] hover:bg-[#2C2C30]/80 text-[16px] text-[#FFFFFF] py-[25px] px-[12px]"
                        onClick={() => openForm("paymentPlan")}

                    >
                        Update Or Change Payment Plan
                    </Button>

                    <Button
                        variant="ghost"
                        onClick={() =>
                            window.open(
                                "https://chatgpt.com/g/g-679d833f491881919fa835966956ba7c-ais-customer-support",
                                "_blank",
                                "noopener,noreferrer"
                            )
                        }
                    >
                        <MessageSquareText />
                        Need Help? Talk to Our Chat Bot
                    </Button>
                </div>
            </div>

            <div className="flex gap-4 w-1/3 justify-start items-center">
                <Button
                    variant="custom"
                    className="bg-[#D15F0E] py-[13px] px-[24px] w-[124px] h-[38px] rounded-[6px] text-[#FFFFFF] text-[14px] hover:bg-[#D15F0E]/90"
                    onClick={handlePauseOrderSubmit}
                >
                    Pause Orders
                </Button>
                <Button
                    variant="custom"
                    className="bg-red-600 py-[13px] px-[24px] w-[124px] h-[38px] rounded-[6px] text-[#FFFFFF] text-[14px] hover:bg-red-600/90"
                    onClick={handleStopSubmit}
                >
                    STOP
                </Button>
            </div>

            {/* Modal */}
            <Dialog open={!!openModal} onOpenChange={closeForm}>
                <DialogContent className="sm:max-w-[407px] bg-black boarder-none">
                    <DialogClose className="absolute right-4 top-4 text-white hover:text-gray-400">
                        <X className="w-5 h-5" />
                    </DialogClose>
                    {openModal === "email" && (
                        <ChangeEmail closeForm={closeForm} />
                    )}
                    {openModal === "phone" && (
                        <ChangePhoneNumber closeForm={closeForm} />
                    )}
                    {openModal === "apiKeys" && (
                        <ChangeApiKeyForm closeForm={closeForm} />
                    )}

                    {openModal === "paymentPlan" && <ChangePriceingModal />}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ProfileSettings;
