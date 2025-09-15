import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "@/components/ui/sidebar"
import Image from "next/image"
import Link from "next/link"

export const HomeNavbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50 border-b-2">
            <div className="flex items-center gap-4 w-full">
                <div className="flex items-center flex-shrink-0">
                    <Link prefetch href="/" className="hidden md:block">
                        <div className="p-4 flex items-center gap-1">
                            <Image src="/logo.svg" alt="Logo" width={32} height={32} />
                            <p className="text-xl font-semibold tracking-tight">NewTube</p>
                        </div>
                    </Link>
                    <SidebarTrigger />


                </div>
                {/* {search bar} */}
                <div className="flex-1 flex justify-center max-w-[720px] mx-auto">
                    <Input type="text" placeholder="Search..." />
                </div>
                <div className="flex-shrink-0  items-center flex gap-4">
                    <Button variant={"ghost"} className="bg-amber-500">
                        Profile
                    </Button>
                </div>

            </div>
        </nav>
    )
}