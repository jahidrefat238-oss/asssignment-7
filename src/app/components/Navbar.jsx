
"use client";

import { useState, useEffect } from "react";
import { Button } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import { authClient, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [today, setToday] = useState("");

    const { data, isPending } = useSession();
    const user = data?.user;
    const router=useRouter();
    // Bangla Date
    useEffect(() => {
        const date = new Intl.DateTimeFormat("bn-BD", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
        });

        setToday(date.format(new Date()));
    }, []);

    // Sign Out
    const handleSignOut = async () => {
        await authClient.signOut();
        setProfileOpen(false);
        setMenuOpen(false);
        router.push('/sign-up');
    };

    return (
        <nav className="sticky top-0 z-50 w-full border-t-[3px] border-[#263B32] bg-[#FAFCFA] shadow-sm">

            {/* Main Navbar */}
            <div className="mx-auto flex min-h-[68px] max-w-[1700px] items-center justify-between px-4 sm:px-8 lg:px-12">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#078B48] p-2">
                        <Image
                            src="/logo-icon.png"
                            alt="Bazar Dor Logo"
                            width={24}
                            height={24}
                            className="h-6 w-6 object-contain"
                        />
                    </div>

                    <div>
                        <h1 className="text-lg font-bold text-[#26352C] sm:text-[22px]">
                            বাজার দর
                        </h1>

                        <p className="text-[10px] text-[#858D87] sm:text-[11px]">
                            {today}
                        </p>
                    </div>

                </Link>

                {/* Desktop Auth Section */}
                <div className="hidden items-center gap-3 sm:flex">

                    {isPending ? (
                        <p className="text-xs text-gray-400">
                            Loading...
                        </p>
                    ) : user ? (

                        /* Logged In */
                        <div className="relative">

                            <button
                                onClick={() => setProfileOpen(!profileOpen)}
                                className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-gray-100"
                            >
                                <div className="flex h-7 w-8 items-center justify-center rounded-full bg-[#078B48] text-xs font-semibold text-white">
                                    {user.name?.charAt(0).toUpperCase() || "U"}
                                </div>

                                <span className="max-w-[150px] truncate text-[13px] font-medium text-[#26352C]">
                                    {user.name}
                                </span>

                                <span className="text-xs text-gray-500">
                                    ⌄
                                </span>
                            </button>

                            {/* Profile Dropdown */}
                            {profileOpen && (
                                <div className="absolute right-0 top-full mt-2 w-[260px] rounded-2xl border border-[#E2E9E3] bg-white p-4 shadow-lg">

                                    <div className="border-b border-gray-100 pb-3">
                                        <p className="text-sm font-semibold text-[#26352C]">
                                            {user.name}
                                        </p>

                                        <p className="mt-1 text-xs text-gray-400">
                                            {user.email}
                                        </p>
                                    </div>

                                    <Link
                                        href="/profile"
                                        onClick={() => setProfileOpen(false)}
                                        className="mt-2 block rounded-lg px-2 py-2 text-sm text-[#26352C] hover:bg-gray-50"
                                    >
                                        👤 আমার প্রোফাইল
                                    </Link>

                                    <button
                                        onClick={handleSignOut}
                                        className="block w-full rounded-lg px-2 py-2 text-left text-sm text-red-500 hover:bg-red-50"
                                    >
                                        ↪ সাইন আউট
                                    </button>

                                </div>
                            )}

                        </div>

                    ) : (

                        /* Logged Out */
                        <>
                            <Link
                                href="/sign-in"
                                className="text-[13px] font-semibold text-[#26352C] hover:text-[#078B48]"
                            >
                                সাইন ইন
                            </Link>

                            <Link href="/sign-up">
                            <Button
                                className="rounded-lg bg-[#078B48] px-4 py-1.5 text-[13px] font-semibold text-white shadow-sm hover:bg-[#056F3A]"
                            >
                                সাইন আপ
                            </Button></Link>
                        </>
                    )}

                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="rounded-lg p-2 text-xl text-[#26352C] hover:bg-gray-100 sm:hidden"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? "✕" : "☰"}
                </button>

            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="border-t border-gray-200 bg-white px-4 py-4 sm:hidden">

                    {isPending ? (
                        <p className="text-sm text-gray-400">
                            Loading...
                        </p>
                    ) : user ? (

                        <div className="space-y-2">

                            <div className="border-b border-gray-100 pb-3">
                                <p className="text-sm font-semibold text-[#26352C]">
                                    {user.name}
                                </p>

                                <p className="text-xs text-gray-400">
                                    {user.email}
                                </p>
                            </div>

                            <Link
                                href="/profile"
                                onClick={() => setMenuOpen(false)}
                                className="block rounded-lg py-2 text-sm text-[#26352C]"
                            >
                                👤 আমার প্রোফাইল
                            </Link>

                            <button
                                onClick={handleSignOut}
                                className="block py-2 text-sm text-red-500"
                            >
                                ↪ সাইন আউট
                            </button>

                        </div>

                    ) : (

                        <div className="flex gap-2">

                            <Button
                                as={Link}
                                href="/sign-in"
                                onPress={() => setMenuOpen(false)}
                                variant="bordered"
                                className="flex-1 border-[#078B48] text-sm text-[#078B48]"
                            >
                                সাইন ইন
                            </Button>

                            <Button
                                as={Link}
                                href="/sign-up"
                                onPress={() => setMenuOpen(false)}
                                className="flex-1 bg-[#078B48] text-sm text-white"
                            >
                                সাইন আপ
                            </Button>

                        </div>
                    )}

                </div>
            )}

        </nav>
    );
}
