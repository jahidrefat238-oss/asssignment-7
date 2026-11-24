
import { Card } from "@heroui/react";
import Image from "next/image";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import UpdateProfile from "./UpdateProfile";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const { user } = await auth.api.getSession({
    headers: await headers(),
  });

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-[calc(100vh-68px)] bg-[#F0F5F1] px-4 py-5">
      <div className="mx-auto max-w-[760px]">

        <div className="mb-7">
          <h1 className="text-2xl font-bold text-[#202B24]">
            আমার প্রোফাইল
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        {/* Profile Card */}
        <Card className="mb-6 flex flex-col items-center gap-4 rounded-2xl border border-[#DFE7E0] bg-[#FAFCFA] p-5 shadow-none sm:flex-row">

          <div className="h-[80px] w-[80px] shrink-0 overflow-hidden rounded-2xl">
            <Image
              src={user.image}
              height={200}
              width={200}
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex-1 text-center sm:text-left">
            <Card.Title className="text-xl">
              {user.name}
            </Card.Title>

            <Card.Description className="mt-1">
              {user.email}
            </Card.Description>
          </div>

        </Card>

        {/* Update Form */}
        <UpdateProfile name={user.name} />

      </div>
    </div>
  );
};

export default ProfilePage;
