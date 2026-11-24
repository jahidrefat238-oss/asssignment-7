
"use client";

import { updateUser } from "@/lib/auth-client";
import { Card, Button } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function UpdateProfile({ name }) {
   

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const resData = await updateUser({
            name: data.name,
        });

        console.log(resData);

        alert("Profile updated successfully!");
        
    };

    return (
        <Card className="rounded-2xl border border-[#DFE7E0] bg-[#FAFCFA] p-5 shadow-none sm:p-6">

            <h2 className="mb-10 text-lg font-semibold text-[#26332B]">
                তথ্য
            </h2>

            <form onSubmit={onSubmit} className="mx-auto w-full max-w-[665px]">

                <label className="mb-2 block text-sm">
                    নাম
                </label>

                <input
                    type="text"
                    name="name"
                    defaultValue={name}
                    required
                    minLength={3}
                    className="h-10 w-full rounded-lg border border-[#DFE7E0] bg-transparent px-3 text-sm outline-none focus:border-[#078B48]"
                />

                <Link href={"/profile"}>
                    <Button
                        type="submit"
                        className="mt-4 h-11 w-full rounded-lg bg-[#078B48] font-semibold text-white"
                    >
                        আপডেট
                    </Button>
                </Link>

            </form>

        </Card>
    );
}
