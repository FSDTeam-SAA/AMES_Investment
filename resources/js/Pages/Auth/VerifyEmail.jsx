import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { MailOpenIcon } from "lucide-react";

import { useForm, usePage } from "@inertiajs/react";
import { useEffect } from "react";

export default function VerifyEmail() {
    const [isResending, setIsResending] = useState(false);

    const { flash, auth } = usePage().props;
    const { post, processing } = useForm();

    useEffect(() => {
        if (auth.user.email_verified_at) {
            window.location.href = "/login";
        }
    }, [auth.user.email_verified_at]);

    const resendVerificationEmail = () => {
        post(route("verification.send"));
    };

    const handleResendInvite = async () => {
        setIsResending(true);
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating API call
        setIsResending(false);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4">
            <Card className="w-full max-w-md overflow-hidden">
                <CardHeader className="text-center space-y-1 pb-8 pt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                    <MailOpenIcon className="w-16 h-16 mx-auto mb-4 text-white/90" />
                    <CardTitle className="text-2xl font-bold">
                        Verify Your Email
                    </CardTitle>
                    <CardDescription className="text-blue-100">
                        We've sent you a verification email
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 p-6">
                    <p className="text-center text-gray-600">
                        Please check your inbox and click on the verification
                        link to continue.
                    </p>
                    <Button
                        className="w-full transition-all duration-200 ease-in-out transform hover:scale-105"
                        variant="default"
                        onClick={handleResendInvite}
                        disabled={isResending}
                    >
                        {isResending ? "Sending..." : "Re-Send Invite"}
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
