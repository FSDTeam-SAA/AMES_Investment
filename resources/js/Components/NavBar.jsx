import { Link } from "@inertiajs/react";
import logo from "../../../public/img/logo.png";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = ["Home", "Features", "About us", "Contact"];

    return (
        <header className="sticky top-0 z-50 max-w-[1440px] px-[10px] lg:px-[80px] py-[15px] mx-auto  bg-black">
            <div className="container flex h-16 items-center">
                <div className="flex items-center space-x-2">
                    <Link href="/" className="flex items-center space-x-2">
                        <img
                            src={logo}
                            alt="AMES Investment Logo"
                            className="h-[42px] w-[42px]"
                        />
                    </Link>
                    <h1 className="text-lg lg:text-[24px] text-white font-extrabold">Ames Investment Systems</h1>
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
                        <Menu className="h-6 w-6 text-whites" />
                    )}
                    <span className="sr-only">Toggle menu</span>
                </Button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex md:flex-1 md:items-center md:justify-center">
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
                                href="/"
                                className="text-[16px] font-medium text-white hover:text-white/80"
                            >
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/"
                                className="text-[16px] font-medium text-white hover:text-white/80"
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/"
                                className="text-[16px] font-medium text-white hover:text-white/80"
                            >
                                Contacts
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Desktop Buttons */}
                <div className="hidden md:flex md:items-center md:space-x-4">
                    <Link
                     href="login"
                        variant="ghost"
                        className="text-white bg-[#44444A] hover:text-white/80 border-0 py-[8px] px-[24px] rounded-[6px]"
                    >
                        Login
                    </Link>
                    <Button className="bg-gradient-to-t from-[#5350F2] to-[#5350F2] bg-gradient-to-r from-[#3FBC79] to-[#1B6DFA] hover:bg-emerald-600">
                        Get Started
                    </Button>
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
                                href="/"
                                className="text-[16px] font-medium text-white hover:text-white/80"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Features
                            </Link>
                            <Link
                                href="/"
                                className="text-[16px] font-medium text-white hover:text-white/80"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About us
                            </Link>
                            <Link
                                href="/"
                                className="text-[16px] font-medium text-white hover:text-white/80"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>

                            <div className="flex flex-col space-y-2 pt-2">
                                <Button
                                    variant="ghost"
                                    className="text-white hover:text-white/80 hover:text-black"
                                >
                                    Login
                                </Button>
                                <Button className="bg-gradient-to-t from-[#5350F2] to-[#5350F2] bg-gradient-to-r from-[#3FBC79] to-[#1B6DFA] hover:bg-emerald-600">
                                    Get Started
                                </Button>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
