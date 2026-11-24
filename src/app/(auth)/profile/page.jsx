
import { Button, Card, CloseButton } from "@heroui/react";
import Image from "next/image";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { Suspense } from "react";

const ProfileContent = async () => {
  const { user } = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <Card className="w-full items-stretch md:flex-row">
      <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
        <Image
          src={user.image}
          height={200}
          width={300}
          alt="image"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="pe-8">
            {user.name}
          </Card.Title>

          <Card.Description>
            {user.email}
          </Card.Description>

          <CloseButton
            aria-label="Close banner"
            className="absolute end-3 top-3"
          />
        </Card.Header>

        <Link href="../update-user">
          <Button className="w-full sm:w-auto">
            Update
          </Button>
        </Link>
      </div>
    </Card>
  );
};

const ProfilePage = () => {
  return (
    <Suspense fallback={<div>Loading profile...</div>}>
      <ProfileContent />
    </Suspense>
  );
};

export default ProfilePage;
