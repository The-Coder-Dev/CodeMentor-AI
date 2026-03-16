import { BackgroundBeams } from "@/components/BackgroundBeams"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { LucideArrowLeft } from "lucide-react"

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="w-full h-screen flex  ">
            <div className=" w-[40%] p-10 bg-black text-accent flex items-center justify-center ">
                <BackgroundBeams />
                {children}
            </div>

            <div className="hidden lg:flex text-accent w-[60%] h-full bg-amber-600 p-10 bg-auth relative flex-col justify-between">
                <div className="bg-black/40 w-full h-full absolute top-0 left-0 pointer-events-none" />
                <Button asChild className="w-fit bg-black/40"  variant="default">
                    <Link href="/">
                        Back to Home
                    </Link>
                    
                </Button>
                <h2 className="text-2xl font-bold z-1">
                    Connect with every application
                </h2>
            </div>
        </section>
    )
}