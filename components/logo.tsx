// import { Poppins } from "next/font/google"
import Image from "next/image";
// import { cn } from "@/lib/utils";

// const font = Poppins({
//     subsets: ["latin"],
//     weight: ["400", "600"]
// });

export const Logo = () => {
    return (
        <div className=" md:flex items-center gap-x-2 ">
            <Image 
                src="/Logo-dark.png"
                alt="Logo"
                height="60"
                width="60"
                className="dark:hidden"
            />
            <Image 
                src="/Logo.png"
                alt="Logo"
                height="60"
                width="60"
                className="hidden dark:block"
            />
            {/* <p className={cn("font-semibold", font.className)}>
                UniHelp
            </p> */}
        </div>
    )
}
;