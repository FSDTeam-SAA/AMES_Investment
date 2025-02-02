import { Button } from "@/Components/ui/button";
import React from "react";
import msgIcon from "../../../../public/img/message-text.png";

const ExternalButtons = () => {
    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                    We'd Love to Hear <br /> from You!
                </h1>
                <p className="text-gray-400">
                    Whether you have a question, need assistance, or just want
                    to say hello, our team is here for you.
                </p>
            </div>
            <div className="space-y-4 flex flex-col max-w-[252px]">
                <Button className="px-5  flex justify-start rounded-full shadow-[inset_0px_7.4px_18.5px_0px_rgba(255,255,255,0.11)] p-6 bg-gray-800">
                    <img src={msgIcon} alt="message" /> Schedule a Meeting
                </Button>
                <Button className="px-10 flex justify-start rounded-full shadow-[inset_0px_7.4px_18.5px_0px_rgba(255,255,255,0.11)] p-6 bg-gray-800">
                    <img src={msgIcon} alt="message" /> Join our Discord
                </Button>
                <Button className="px-10 flex justify-start rounded-full shadow-[inset_0px_7.4px_18.5px_0px_rgba(255,255,255,0.11)] p-6 bg-gray-800">
                    <img src={msgIcon} alt="message" /> Visit our FAQ
                </Button>
                <Button className="px-10 flex justify-start rounded-full shadow-[inset_0px_7.4px_18.5px_0px_rgba(255,255,255,0.11)] p-6 bg-gray-800">
                    <img src={msgIcon} alt="message" /> Talk To Our Chat Bot
                </Button>
            </div>
        </div>
    );
};

export default ExternalButtons;
