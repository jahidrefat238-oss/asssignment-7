'use client';
import { useState } from "react";
import {Button } from "@heroui/react";
import Link from "next/link";
import { authClient,useSession } from "@/lib/auth-client";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const Authlinks = <>
        <Link href="/sign-in">Login</Link>
        <Link href="/sign-up"><Button>Sign Up</Button></Link>
        </>
    const {data,isPending} = useSession();
    console.log(data?.user);
    
    const Navlinks = <>
        <li>
            <Link href={"/profile"}>Profile</Link>
        </li>
        <li>
            <Link href="#" className="font-medium text-accent" aria-current="page">
                Dashboard
            </Link>
        </li>
        <li>
            <Link href="#">Pricing</Link>
        </li></>
    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
                <div className="flex items-center gap-4">
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                    <div className="flex items-center gap-3">

                        <p className="font-bold">ACME</p>
                    </div>
                </div>
                <ul className="hidden items-center gap-4 md:flex">
                    {Navlinks}
                </ul>
                <div className="hidden items-center gap-4 md:flex">
                     {isPending?<p>Loading....:</p>:data?.user?<Button onClick={async()=>await authClient.signOut()}>Log out</Button>:Authlinks}
                </div>
            </header>
            {isMenuOpen && (
                <div className="border-t border-separator md:hidden">
                    <ul className="flex flex-col gap-2 p-4">
                        {Navlinks}
                    </ul>
                </div>
            )}
        </nav>
    );
}