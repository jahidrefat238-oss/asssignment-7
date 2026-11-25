
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import UpdateProfile from "../profile/UpdateProfile";

export default async function UpdateProfilePage() {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect("/sign-in");
    }

    return (
        <main className="min-h-screen bg-[#F0F5F1] px-4 py-10">
            <div className="mx-auto w-full max-w-[1084px]">

                <h1 className="mb-6 text-2xl font-bold text-[#26352C]">
                    প্রোফাইল আপডেট
                </h1>

                <UpdateProfile name={session.user.name || ""} />

            </div>
        </main>
    );
}
