// import PrimaryButton from '@/Components/PrimaryButton';
// import GuestLayout from '@/Layouts/GuestLayout';
// import { Head, Link, useForm } from '@inertiajs/react';

// export default function VerifyEmail({ status }) {
//     const { post, processing } = useForm({});

//     const submit = (e) => {
//         e.preventDefault();

//         post(route('verification.send'));
//     };

//     return (
//         <GuestLayout>
//             <Head title="Email Verification" />

//             <div className="mb-4 text-sm text-gray-600">
//                 Thanks for signing up! Before getting started, could you verify
//                 your email address by clicking on the link we just emailed to
//                 you? If you didn't receive the email, we will gladly send you
//                 another.
//             </div>

//             {status === 'verification-link-sent' && (
//                 <div className="mb-4 text-sm font-medium text-green-600">
//                     A new verification link has been sent to the email address
//                     you provided during registration.
//                 </div>
//             )}

//             <form onSubmit={submit}>
//                 <div className="mt-4 flex items-center justify-between">
//                     <PrimaryButton disabled={processing}>
//                         Resend Verification Email
//                     </PrimaryButton>

//                     <Link
//                         href={route('logout')}
//                         method="post"
//                         as="button"
//                         className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                     >
//                         Log Out
//                     </Link>
//                 </div>
//             </form>
//         </GuestLayout>
//     );
// }

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
