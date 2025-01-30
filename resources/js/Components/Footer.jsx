import { Link } from "@inertiajs/react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import logo from "../../../public/img/logo.png";
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#111] text-gray-300 py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Logo and Nav Section */}
        <div className="flex flex-col items-center space-y-6 mb-8">
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="AMES Investment Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-white text-xl font-semibold">AMES Investment</span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              ["Home", "/"],
              ["Features", "/features"],
              ["About Us", "/about"],
              ["FAQ", "/faq"],
              ["Blog", "/blog"],
              ["Contact Us", "/contact"],
            ].map(([title, url]) => (
              <Link key={title} href={url} className="hover:text-white transition-colors">
                {title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800">
          <p className="text-sm mb-4 md:mb-0">© {currentYear} AMES Investment. All rights reserved.</p>

          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Social Icons */}
            <div className="flex space-x-4 mb-4 md:mb-0 md:mr-6">
              <Link href="#" className="hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>

            {/* Legal Links */}
            <div className="flex space-x-4 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

