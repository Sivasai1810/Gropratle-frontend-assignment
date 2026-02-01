"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between font-sans">
                <Link href="/" className="text-xl font-extrabold tracking-tight text-gray-900 uppercase">
                    Event<span className="text-blue-600">Connect</span>
                </Link>

                <div className="flex items-center gap-10">
                    <Link
                        href="/"
                        className={`text-[13px] font-bold uppercase tracking-widest transition-colors hover:text-gray-900 ${pathname === "/" ? "text-gray-900" : "text-gray-600"}`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/post-requirement"
                        className={`text-[13px] font-bold uppercase tracking-widest transition-colors hover:text-gray-900 ${pathname === "/post-requirement" ? "text-gray-900" : "text-gray-600"}`}
                    >
                        Post Requirement
                    </Link>
                    <Link
                        href="/dashboard"
                        className={`text-[13px] font-bold uppercase tracking-widest transition-colors hover:text-gray-900 ${pathname === "/dashboard" ? "text-gray-900" : "text-gray-600"}`}
                    >
                        Dashboard
                    </Link>
                </div>
            </div>
        </nav>
    );
}
