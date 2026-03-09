"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "nav-glass shadow-lg" : "bg-transparent"
                }`}
        >
            {/* Top Info Bar */}
            <div className="bg-accent/10 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-1.5 text-xs sm:text-sm">
                    <a
                        href="tel:3137290005"
                        className="flex items-center gap-1.5 text-white/70 hover:text-accent transition-colors"
                    >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        (313) 729-0005
                    </a>
                    <div className="flex items-center gap-4">
                        <a
                            href="mailto:MidwestTintandDetail@gmail.com"
                            className="hidden sm:flex items-center gap-1.5 text-white/70 hover:text-accent transition-colors"
                        >
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            MidwestTintandDetail@gmail.com
                        </a>
                        <a
                            href="https://instagram.com/MidwestTintDetail"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70 hover:text-accent transition-colors"
                            aria-label="Instagram"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Nav */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 sm:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        <Image
                            src="/logo.png"
                            alt="Midwest Tint & Detail"
                            width={320}
                            height={100}
                            className="h-20 sm:h-24 w-auto"
                            priority
                        />
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link
                            href="/"
                            className="text-sm font-medium text-white/80 hover:text-accent transition-colors uppercase tracking-wider"
                        >
                            Home
                        </Link>
                        <Link
                            href="/services"
                            className="text-sm font-medium text-white/80 hover:text-accent transition-colors uppercase tracking-wider"
                        >
                            Services
                        </Link>
                        <Link
                            href="/contact"
                            className="text-sm font-medium text-white/80 hover:text-accent transition-colors uppercase tracking-wider"
                        >
                            Contact
                        </Link>
                        <Link href="/booking" className="btn-primary text-sm !py-2.5 !px-5">
                            Get a Free Quote
                        </Link>
                    </div>

                    {/* Mobile Burger */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileOpen ? (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="bg-black/95 backdrop-blur-xl border-t border-white/5 px-4 py-6 space-y-4">
                    <Link
                        href="/"
                        className="block text-sm font-medium text-white/80 hover:text-accent transition-colors uppercase tracking-wider"
                        onClick={() => setIsMobileOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href="/services"
                        className="block text-sm font-medium text-white/80 hover:text-accent transition-colors uppercase tracking-wider"
                        onClick={() => setIsMobileOpen(false)}
                    >
                        Services
                    </Link>
                    <Link
                        href="/contact"
                        className="block text-sm font-medium text-white/80 hover:text-accent transition-colors uppercase tracking-wider"
                        onClick={() => setIsMobileOpen(false)}
                    >
                        Contact
                    </Link>
                    <Link
                        href="/booking"
                        className="btn-primary text-sm w-full justify-center"
                        onClick={() => setIsMobileOpen(false)}
                    >
                        Get a Free Quote
                    </Link>
                </div>
            </div>
        </nav>
    );
}
