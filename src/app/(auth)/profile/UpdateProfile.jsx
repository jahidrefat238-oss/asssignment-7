
"use client";

import { useState } from "react";
import { updateUser } from "@/lib/auth-client";
import { Card, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function UpdateProfile({ name }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const newName = formData.get("name").trim();

        if (newName.length < 3) {
            toast.error("নাম কমপক্ষে ৩ অক্ষরের হতে হবে!");
            return;
        }

        if (newName === name) {
            toast.error("নতুন কোনো পরিবর্তন করা হয়নি!");
            return;
        }

        try {
            setLoading(true);

            const { error } = await updateUser({
                name: newName,
            });

            if (error) {
                toast.error(error.message || "তথ্য আপডেট করা যায়নি!");
                return;
            }

            toast.success("প্রোফাইল সফলভাবে আপডেট হয়েছে!");

            router.refresh();
            router.push("/profile");

        } catch (error) {
            console.log("Profile update error:", error);
            toast.error("কিছু সমস্যা হয়েছে। আবার চেষ্টা করুন!");

        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className="rounded-2xl border border-[#DFE7E0] bg-[#FAFCFA] p-5 shadow-none sm:p-6">

            <h2 className="mb-10 text-lg font-semibold text-[#26332B]">
                তথ্য
            </h2>

            <form
                onSubmit={onSubmit}
                className="mx-auto w-full max-w-[665px]"
            >

                <label className="mb-2 block text-sm">
                    নাম
                </label>

                <input
                    type="text"
                    name="name"
                    defaultValue={name}
                    required
                    minLength={3}
                    disabled={loading}
                    className="h-10 w-full rounded-lg border border-[#DFE7E0] bg-transparent px-3 text-sm outline-none focus:border-[#078B48] disabled:opacity-60"
                />

                <Button
                    type="submit"
                    isDisabled={loading}
                    className="mt-4 h-11 w-full rounded-lg bg-[#078B48] font-semibold text-white"
                >
                    {loading ? "আপডেট হচ্ছে..." : "আপডেট"}
                </Button>

            </form>

        </Card>
    );
}
