import Link from "next/link";

import { Button } from "./ui/button";
import { cn } from "@/lib/utils";


type Props = {
    href: string;
    label: string;
    isActive?: boolean;
}



export const NavButton = ({
    href,
    label,
    isActive,
}: Props) => {

    return (
        <Button asChild
            size='sm'
            variant='outline'
            className={cn(                   //done for scalability purposes as in long term if just ternary is used directly that may cause some issues.
                "w-full lg:w-auto text-md justify-between font-medium hover:bg-white/30 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition",
                isActive ? "bg-blue/20 text-white" : "bg-transparent",
            )}>
            <Link href={href}>
                {label}
            </Link>
        </Button >
    )
}