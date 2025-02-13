import React from "react";
import { usePage, Inertia } from "@inertiajs/react";

export default function VerifyEmail() {
    const { status } = usePage().props;

    const resendVerificationLink = () => {
        Inertia.post("/email/verification-notification");
    };

    return (
        <div className="p-6">
            <h1 className="text-xl font-semibold mb-4">
                Verify Your Email Address
            </h1>
            <p className="mb-4">
                Please check your email for a verification link. If you didn't
                receive the email, click below to request another.
            </p>
            {status === "verification-link-sent" && (
                <p className="text-green-600">
                    A new verification link has been sent to your email.
                </p>
            )}
            <button
                onClick={resendVerificationLink}
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
                Resend Verification Email
            </button>
        </div>
    );
}
