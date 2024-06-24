import Link from "next/link";
import Image from "next/image";
import logo from "../public/FIN.png"

export const HeaderLogo = () => {
    return (
        <Link href='/'>
            <div className=" items-center  hidden lg:flex">
                <Image src={logo} alt="Logo" height={70} width={70} />
                <p className="font-semibold text-white text-2xl ml-2.5">
                    FINFLOW
                </p>
            </div>
        </Link>
    );
};
