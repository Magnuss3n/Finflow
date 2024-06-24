import { Fullscreen, Loader2 } from "lucide-react";
import Image from "next/image";
import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
            <div className="h-full lg:flex flex-col items-center justify-center px-4">
                <div className="text-center space-y-4 pt-16">
                    <h1 className="font-bold text-3xl text-muted-foreground">
                        WAGWAN Buddy!
                    </h1>
                    <p className="text-base text-[#7E8CA0]">
                        Log in or create account to get back to your dashboard !
                    </p>
                </div>
                <div className="flex items-center justify-center mt-9">
                    <ClerkLoaded>
                        <SignIn path="/sign-in" />
                    </ClerkLoaded>
                    <ClerkLoading>
                        <Loader2 className="animate-spin text-muted-foreground" />
                    </ClerkLoading>
                </div>
            </div>
            <div className=" relative h-full bg-blue-500 hidden lg:flex items-center justify-center">
                <Image src="/logo.jpeg" objectFit="cover" className="absolute inset-0" layout="fill" alt="logo" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h1 className="text-9xl font-bold text-yellow-400">FinFlow</h1>
                    <p className="text - lg mt-2 font-bold text-blue-300">Your Finance journey starts from here! Manage everything seamlessly </p>
                </div>
            </div>
        </div >
    )
}