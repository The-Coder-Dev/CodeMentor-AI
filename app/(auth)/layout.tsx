import { BackgroundBeams } from "@/components/BackgroundBeams"

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

            <div className="hidden lg:flex text-accent w-[60%] h-full bg-amber-600 p-10 bg-auth relative ">
                <div className="bg-black/30 w-full h-full absolute top-0 left-0" />
                <h2 className="text-2xl font-bold">
                    Connect with every application
                </h2>
            </div>
        </section>
    )
}