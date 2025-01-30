import { useState } from "react";
import { Link, useForm } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import MainLayout from "@/Layouts/MainLayout";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });
    const [showPassword, setShowPassword] = useState(false);

    const redirectToGoogle = () => {
        window.location.href = "/auth/google/redirect"; // This triggers the server-side OAuth flow
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <>
            <MainLayout>
                <div className="min-h-screen flex items-center justify-center bg-black">
                    <Card className=" w-[407px] lg:w-[470px] bg-zinc-900 border-zinc-800">
                        <CardHeader className="space-y-1">
                            <CardTitle className="text-2xl text-center font-bold text-white">
                                Login
                            </CardTitle>
                            <CardDescription className="text-center text-zinc-400">
                                Let's login into your account first
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            {status && (
                                <div className="text-green-500 text-center">
                                    {status}
                                </div>
                            )}
                            <form onSubmit={submit} className="space-y-4">
                                <div className="space-y-2">
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="yourname@gmail.com"
                                        className="bg-zinc-800 border-zinc-700 text-white"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                    />
                                    {errors.email && (
                                        <div className="text-red-500 text-sm">
                                            {errors.email}
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <div className="relative">
                                        <Input
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            name="password"
                                            placeholder="********"
                                            className="bg-zinc-800 border-zinc-700 text-white"
                                            value={data.password}
                                            onChange={(e) =>
                                                setData(
                                                    "password",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                            className="absolute right-3 top-2.5 text-zinc-400 hover:text-zinc-300"
                                        >
                                            {showPassword ? (
                                                <EyeOffIcon size={16} />
                                            ) : (
                                                <EyeIcon size={16} />
                                            )}
                                        </button>
                                    </div>
                                    {errors.password && (
                                        <div className="text-red-500 text-sm">
                                            {errors.password}
                                        </div>
                                    )}
                                    <div className="text-right">
                                        {canResetPassword && (
                                            <a
                                                href={route("password.request")}
                                                className="text-sm text-blue-400 hover:text-blue-300"
                                            >
                                                Forgot Password?
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white"
                                    disabled={processing}
                                >
                                    {processing ? "Logging in..." : "Login"}
                                </Button>
                                <div className="relative my-4">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-zinc-700"></div>
                                    </div>
                                    <div className="relative flex justify-center text-xs uppercase">
                                        <span className="bg-zinc-900 px-2 text-zinc-400">
                                            Or
                                        </span>
                                    </div>
                                </div>
                                {/* <Link
                                    href="/auth/google/redirect"
                                    className="flex items-center justify-center w-full bg-zinc-800 border border-zinc-700 text-white hover:bg-zinc-700 px-4 py-2 rounded-md"
                                >
                                    <svg
                                        className="mr-2 h-4 w-4"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                            fill="#4285F4"
                                        />
                                        <path
                                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                            fill="#34A853"
                                        />
                                        <path
                                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                            fill="#FBBC05"
                                        />
                                        <path
                                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                            fill="#EA4335"
                                        />
                                    </svg>
                                    Login with Google
                                </Link> */}
                                <button
                                    onClick={redirectToGoogle}
                                    className="flex items-center justify-center w-full bg-zinc-800 border border-zinc-700 text-white hover:bg-zinc-700 px-4 py-2 rounded-md"
                                >
                                    <svg
                                        className="mr-2 h-4 w-4"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                            fill="#4285F4"
                                        />
                                        <path
                                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                            fill="#34A853"
                                        />
                                        <path
                                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                            fill="#FBBC05"
                                        />
                                        <path
                                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                            fill="#EA4335"
                                        />
                                    </svg>
                                    Login with Google
                                </button>

                                <div className="text-center text-sm">
                                    <span className="text-zinc-400">
                                        Don't have an account?{" "}
                                    </span>
                                    <a
                                        href="/register"
                                        className="text-blue-400 hover:text-blue-300"
                                    >
                                        Register Here
                                    </a>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </MainLayout>
        </>
    );
}
