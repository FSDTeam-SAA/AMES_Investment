import { Link, usePage } from "@inertiajs/react";
import logo from "../../../public/img/logo.png";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { auth } = usePage().props; // Accessing the authenticated user

    console.log("user data :", auth.user);

    return (
        <header className="sticky  top-0 z-50  py-[15px]  bg-transparent backdrop-blur-lg">
            <div className="max-w-[1490px] mx-auto flex h-16 items-center   ">
                <div>
                    <Link href="/" className="flex items-center ">
                        <img
                            src={logo}
                            alt="AMES Investment Logo"
                            className=""
                        />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <Button
                    variant="ghost"
                    className="ml-auto md:hidden bg-gradient-to-t from-[#5350F2] to-[#5350F2] bg-gradient-to-r from-[#3FBC79] to-[#1B6DFA] hover:bg-emerald-600"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <X className="h-6 w-6 text-black" />
                    ) : (
                        <Menu className="h-6 w-6 text-white" />
                    )}
                    <span className="sr-only">Toggle menu</span>
                </Button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex md:flex-1 md:items-center md:justify-center ml-[-10%] ">
                    <ul className="flex space-x-8">
                        <li>
                            <Link
                                href="/"
                                className="text-[16px] font-medium text-white hover:text-white/80"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/pricing-plans"
                                className="text-[16px] font-medium text-white hover:text-white/80"
                            >
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about-us"
                                className="text-[16px] font-medium text-white hover:text-white/80"
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="text-[16px] font-medium text-white hover:text-white/80"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Desktop Buttons */}
                <div className="hidden md:flex md:items-center md:space-x-4">
                    {!auth.user ? (
                        <>
                            <Link
                                href={route("login")}
                                className="text-white bg-[#44444A] hover:text-white/80 border-0 py-[8px] px-[24px] rounded-[6px] shadow-[inset_0px_7.4px_18.5px_0px_rgba(255,255,255,0.11)] p-6 bg-gray-800"
                            >
                                Login
                            </Link>
                            <Link href={route("register")}>
                                <Button>Sign Up</Button>
                            </Link>
                        </>
                    ) : (

                        <div className="hidden md:flex md:items-center md:space-x-4">

                            <Link
                                href={route("dashboard")}
                                method="get"
                                as="button"
                                className="bg-[#141B1D]  text-white py-2 px-4 rounded"
                            >
                                Dashboard
                            </Link>

                            <Link
                                href={route("logout")}
                                method="post"
                                as="button"
                                className="bg-red-600 hover:bg-red-600/90 text-white py-2 px-4 rounded"
                            >
                                Logout
                            </Link>



                        </div>


                    )}
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="absolute left-0 right-0 top-16 bg-black p-4 md:hidden">
                        <nav className="flex flex-col space-y-4">
                            <Link
                                href="/"
                                className="text-[16px] font-medium text-white hover:text-white/80"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/features"
                                className="text-[16px] font-medium text-white hover:text-white/80"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Features
                            </Link>
                            <Link
                                href="/about-us"
                                className="text-[16px] font-medium text-white hover:text-white/80"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About Us
                            </Link>
                            <Link
                                href="/contact"
                                className="text-[16px] font-medium text-white hover:text-white/80"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>

                            <div className="flex flex-col space-y-2 pt-2">
                                {!auth.user ? (
                                    <>
                                        <Link
                                            href={route("login")}
                                            className="text-white bg-[#44444A] hover:text-white/80 border-0 py-2 px-4 rounded bg-gray-800 text-center"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Login
                                        </Link>
                                        <Button className="bg-gradient-to-r from-[#3FBC79] to-[#1B6DFA] hover:bg-emerald-600">
                                            Get Started
                                        </Button>
                                    </>
                                ) : (
                                    <Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded text-center"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Logout
                                    </Link>
                                )}
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
