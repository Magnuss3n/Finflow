"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useMedia } from "react-use";
import { NavButton } from "@/components/nav-button";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

const routes = [
    {
        href: '/',
        label: "Dashboard",
    },
    {
        href: '/transactions',
        label: "Transactions",
    },
    {
        href: '/accounts',
        label: "Accounts",
    },
    {
        href: '/categories',
        label: 'Categories',
    },
    {
        href: '/settings',
        label: "Settings",
    }
];

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useMedia("(max-width: 1024px)", false);
    const router = useRouter();
    const pathname = usePathname();

    const onClick = (href: string) => {
        router.push(href);
        setIsOpen(false);
    }

    if (isMobile) {
        return (
            < Sheet open={isOpen} onOpenChange={setIsOpen} >
                <SheetTrigger>
                    <Button
                        variant="outline"
                        size="sm"
                        className="font-normal bg-white/`0 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent text-white focus:bg-white/30 transition">
                        <Menu className="size-4" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="px-2">
                    <nav className="flex flex-col gap-y-2 pt-6">
                        {routes.map((route) => (
                            <Button
                                variant={route.href === pathname ? "secondary" : "ghost"}
                                key={route.href}
                                onClick={() => onClick(route.href)}>
                                {route.label}
                            </Button>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet >
        )
    }

    return (
        <nav className="hidden text-white lg:flex items-center gap-x-2 overfflow-x-auto">
            {routes.map((route) => (
                <NavButton
                    key={route.href}
                    href={route.href} label={route.label}
                    isActive={pathname === route.href} />
            ))}
        </nav>
    )
}