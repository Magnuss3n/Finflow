
import { useNewAccounts } from "@/features/accounts/hooks/use-new-account";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { AccountForm } from "@/features/accounts/components/account-form";
import { insertAccountSchema } from "@/db/schema";
import { z } from "zod";

const formSchema = insertAccountSchema.pick({
    name: true,
});

type FormValues = z.input<typeof formSchema>;


export const NewAccountSheet = () => {
    const { isOpen, onClose } = useNewAccounts();
    const onSubmit = (values: FormValues) => {
        console.log({ values })
    }
    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className="space-y-5">
                <SheetHeader>
                    <SheetTitle >
                        New Account
                    </SheetTitle>
                    <SheetDescription>
                        Create an account to track your transactions
                    </SheetDescription>
                </SheetHeader>
                <AccountForm onSubmit={onSubmit} disabled={false} />
            </SheetContent>
        </Sheet>
    )
}