"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const handleSignOut = async () => {
    await authClient.signOut();
  };
  const userData = authClient.useSession();
  const user = userData.data?.user;
  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">pixgen.</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-photos"}>All Photos</Link>
          </li>
          <li>
            <Link href={"/pricing"}>Pricing</Link>
          </li>
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>

        <div className="flex gap-4">
          {user ? (
            <div className="flex gap-4 items-center">
              <p>Welcome {user.name}!</p>
              <Avatar>
                <Avatar.Image
                  alt={user?.name}
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <Button variant="danger" onClick={handleSignOut}>
                <Link href={"/"}>Sign Out</Link>
              </Button>
            </div>
          ) : (
            <ul className="flex items-center gap-5 text-sm">
              <li>
                <Button variant="outline">
                  <Link href={"/signup"}>SignUp</Link>
                </Button>
              </li>
              <li>
                <Button variant="secondary">
                  <Link href={"/signin"}>SignIn</Link>
                </Button>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
