"use client"

import { useNewAccounts } from "@/features/accounts/hooks/use-new-account"
import { Button } from "@/components/ui/button";
import { IoIosAddCircle } from "react-icons/io";

export default function Home() {
  const { onOpen } = useNewAccounts();
  return (
    <div>
      <Button onClick={onOpen} className="p-2 text-1xl w-32 bg-black flex items-center justify-center">
        <IoIosAddCircle className="text-2xl mr-2" />Account
      </Button>
    </div>
  )
}


// const { data: accounts, isLoading } = useGetAccounts();

//   if (isLoading) {
//     return (
//       <div>
//         Loading...
//       </div>
//     )
//   }
//   return (
//     <div>
//       {accounts?.map((account) => (
//         <div key={account.id}>
//           {account.name}
//         </div>
//       ))}
//     </div>
//   )