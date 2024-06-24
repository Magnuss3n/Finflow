import { Navigation } from "@/components/navigation"
import { HeaderLogo } from "./header-logo"
import { Loader2 } from "lucide-react";
import { UserButton, ClerkLoading, ClerkLoaded } from "@clerk/nextjs"
import { WelcomeMsg } from "./welcome-mg";
import TimeDisplay from "./time";

export const Header = () => {
    return (
        <header className="bg-gradient-to-b px-4 py-8 lg:px-14 pb-36">
            <div className="max-w-screen-2xl mx-auto">
                <div className="w-full flex items-center justify-between mb-14">
                    <div className="flex items-center lg:gap-x-16">
                        <HeaderLogo />
                        <Navigation />
                    </div>
                    <div className="flex items-center gap-x-4">
                        <TimeDisplay />
                        <ClerkLoaded>
                            <UserButton afterMultiSessionSingleSignOutUrl="/" />
                        </ClerkLoaded>
                        <ClerkLoading>
                            <Loader2 className="size-8 animate-spin text-slate-400" />
                        </ClerkLoading>
                    </div>
                </div>
                <WelcomeMsg />
            </div>
        </header>
    )
}