"use client";

import { useUser } from "@clerk/nextjs";
import Greetings from "./greeting";

export const WelcomeMsg = () => {
    const { user, isLoaded } = useUser();
    return (
        <div className="space-y-2 mb-4">
            <h2 className="text-2xl lg:text-4xl text-white font-medium">
                <Greetings />{isLoaded ? ", " : " "}{user?.firstName}
            </h2>
            <p className="text-sm lg:text-base text-red-200">
                This is your Financial Report buddy!
            </p>
        </div>
    )
}