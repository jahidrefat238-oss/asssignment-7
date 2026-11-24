
"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const confirmPassword = form.get("confirmPassword");

    if (password !== confirmPassword) {
      alert("পাসওয়ার্ড দুটি মিলছে না!");
      return;
    }

    const { error } = await authClient.signUp.email({
      name,
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("অ্যাকাউন্ট তৈরি সফল হয়েছে!");
      router.push("/sign-in");
    }
  };

  const socialLogin = (provider) => {
    authClient.signIn.social({
      provider,
      callbackURL: "/",
    });
  };

  return (
    <div className="min-h-[calc(100vh-68px)] bg-[#F0F5F1] px-4 py-6">
      <div className="mx-auto w-full max-w-[420px]">

        {/* Heading */}
        <div className="mb-5 text-center">
          <h1 className="text-2xl font-bold text-[#17251D]">
            অ্যাকাউন্ট তৈরি করুন
          </h1>
          <p className="mt-1 text-xs text-gray-500">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
          </p>
        </div>

        {/* Sign Up Card */}
        <div className="rounded-2xl border border-[#DFE7E0] bg-[#FAFCFA] p-5">

          <form onSubmit={handleSubmit} className="space-y-3">

            {/* Name */}
            <div>
              <label className="mb-1 block text-sm">নাম</label>
              <input
                name="name"
                type="text"
                placeholder="যেমন: রহিম উদ্দিন"
                required
                className="h-9 w-full rounded-lg border border-gray-300 bg-transparent px-3 text-sm outline-none focus:border-[#078B48]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-1 block text-sm">ইমেইল</label>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="h-9 w-full rounded-lg border border-gray-300 bg-transparent px-3 text-sm outline-none focus:border-[#078B48]"
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-1 block text-sm">পাসওয়ার্ড</label>
              <input
                name="password"
                type="password"
                placeholder="কমপক্ষে ৮ অক্ষর"
                minLength={8}
                required
                className="h-9 w-full rounded-lg border border-gray-300 bg-transparent px-3 text-sm outline-none focus:border-[#078B48]"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="mb-1 block text-sm">
                পাসওয়ার্ড নিশ্চিত করুন
              </label>
              <input
                name="confirmPassword"
                type="password"
                placeholder="আবার লিখুন"
                required
                className="h-9 w-full rounded-lg border border-gray-300 bg-transparent px-3 text-sm outline-none focus:border-[#078B48]"
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="h-10 w-full bg-[#078B48] text-sm font-bold text-white"
            >
              অ্যাকাউন্ট তৈরি করুন
            </Button>

          </form>

          {/* Divider */}
          <div className="my-4 flex items-center gap-3 text-xs text-gray-600">
            <div className="h-[2px] flex-1 bg-gray-200" />
            অথবা
            <div className="h-[2px] flex-1 bg-gray-200" />
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-2">

            <Button
              variant="bordered"
              onPress={() => socialLogin("google")}
              className="h-9 border border-black text-xs font-semibold text-black"
            >
              <FcGoogle size={17} />
              Google দিয়ে চালিয়ে যান
            </Button>

            <Button
              variant="bordered"
              onPress={() => socialLogin("github")}
              className="h-9 border border-black text-xs font-semibold text-black"
            >
              <FaGithub size={17} />
              GitHub দিয়ে চালিয়ে যান
            </Button>

          </div>

          {/* Sign In Link */}
          <p className="mt-4 text-center text-xs text-gray-600">
            অ্যাকাউন্ট আছে?{" "}
            <Link
              href="/sign-in"
              className="font-semibold text-[#078B48] hover:underline"
            >
              সাইন ইন করুন
            </Link>
          </p>

        </div>

        {/* Home Link */}
        <Link
          href="/"
          className="mt-4 flex items-center justify-center gap-1 text-xs text-gray-500 hover:text-[#078B48]"
        >
          <ArrowLeft size={13} />
          হোম পেজে ফিরে যান
        </Link>

      </div>
    </div>
  );
}
