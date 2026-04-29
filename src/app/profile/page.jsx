"use client";
import { UpdateUserPage } from "@/components/UpdateUser";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  return (
    <div className="flex justify-center flex-col gap-5 items-center">
      <Card className="flex w-96 flex-col justify-center items-center gap-3 py-5 border mt-5">
        <Avatar className="h-30 w-30">
          <Avatar.Image
            alt={user?.name}
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
        </Avatar>
        <p className="font-bold text-2xl">{user?.name}</p>
        <p>{user?.email}</p>
      </Card>
      <UpdateUserPage></UpdateUserPage>
    </div>
  );
};

export default ProfilePage;
