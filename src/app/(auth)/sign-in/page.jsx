
"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import {
    Button,
    Form,
    Input,
    Label,
    TextField,
    FieldError,
} from "@heroui/react";

export default function SignInPage() {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        const { error } = await authClient.signIn.email({
            email: formData.get("email"),
            password: formData.get("password"),
            callbackURL: "/",
        });

        if (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    const socialLogin = async (provider) => {
        await authClient.signIn.social({
            provider,
            callbackURL: "/",
        });
    };

    return (
        <div className="flex min-h-[calc(100vh-68px)] flex-col items-center bg-[#F0F5F0] px-4 py-7">

            {/* Heading */}
            <div className="mb-5 text-center">
                <h1 className="text-2xl font-bold text-[#26352C]">
                    সাইন ইন
                </h1>

                <p className="mt-1.5 text-sm text-gray-500">
                    বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
                </p>
            </div>

            {/* Login Card */}
            <div className="w-full max-w-[440px] rounded-2xl border border-[#E0E8E0] bg-[#FAFCFA] p-5 sm:p-6">

                <Form
                    className="flex flex-col gap-3"
                    onSubmit={onSubmit}
                >

                    {/* Email */}
                    <TextField isRequired name="email" type="email">
                        <Label className="text-sm text-[#26352C]">
                            ইমেইল
                        </Label>

                        <Input
                            placeholder="you@example.com"
                            className="h-10"
                        />

                        <FieldError />
                    </TextField>

                    {/* Password */}
                    <TextField isRequired name="password" type="password">
                        <Label className="text-sm text-[#26352C]">
                            পাসওয়ার্ড
                        </Label>

                        <Input
                            placeholder="কমপক্ষে ৮ অক্ষর"
                            className="h-10"
                        />

                        <FieldError />
                    </TextField>

                    {error && (
                        <p className="text-xs text-red-500">
                            {error}
                        </p>
                    )}

                    {/* Sign In Button */}
                    <Button
                        type="submit"
                        isDisabled={loading}
                        className="h-10 w-full rounded-lg bg-[#078B48] text-sm font-semibold text-white shadow-sm hover:bg-[#056F3A]"
                    >
                        {loading ? "অপেক্ষা করুন..." : "সাইন ইন"}
                    </Button>

                </Form>

                {/* Divider */}
                <div className="my-4 flex items-center gap-3">
                    <div className="h-px flex-1 bg-gray-200" />
                    <span className="text-xs text-gray-500">অথবা</span>
                    <div className="h-px flex-1 bg-gray-200" />
                </div>

                {/* Social Login */}
                
                <div className="grid grid-cols-2 gap-2">

                    <Button
                        variant="bordered"
                        onPress={() => socialLogin("google")}
                        className="h-10 border border-black text-xs font-semibold text-[#26352C]"
                    >
                        <FcGoogle size={17} />
                        Google দিয়ে চালিয়ে যান
                    </Button>

                    <Button
                        variant="bordered"
                        onPress={() => socialLogin("github")}
                        className="h-10 border border-black text-xs font-semibold text-[#26352C]"
                    >
                        <FaGithub size={17} />
                        GitHub দিয়ে চালিয়ে যান
                    </Button>

                </div>

                {/* Sign Up Link */}
                <p className="mt-4 text-center text-xs text-gray-500">
                    অ্যাকাউন্ট নেই?{" "}
                    <Link
                        href="/sign-up"
                        className="font-semibold text-[#078B48] underline"
                    >
                        সাইন আপ করুন
                    </Link>
                </p>

            </div>

            {/* Home Link */}
            <Link
                href="/"
                className="mt-5 text-xs text-gray-500 underline hover:text-[#078B48]"
            >
                ← হোম পেজে ফিরে যান
            </Link>

        </div>
    );
}
