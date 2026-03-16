import React from 'react'
import Link from 'next/link'

function Footer() {
    return (
        <section className='w-full h-100 p-15 bg-black'>
            <div className="w-full h-full max-w-380 mx-auto border-t border-green/4 p-10 flex ">
                <div className="w-[60%] text-accent space-y-2 flex-1">
                    <h1 className='text-[sora] text-2xl font-semibold'>CodeMentor AI</h1>
                    <p className='text-accent max-w-sm'>Secure, fast, and seamless crypto trading. Cryptix makes digital assets effortless.</p>
                </div>

                <div className="text-accent w-[40%] flex">
                    <div className="w-full">
                        <h1 className='font-[sora] mb-3 text-lg'>Navigation</h1>
                        <div className="flex flex-col gap-2 w-fit">
                            <Link href="/">Why CodeMentor</Link>
                            <Link href="/">Features</Link>
                            <Link href="/">How it works</Link>
                            <Link href="/">Why CodeMentor</Link>
                        </div>
                    </div>
                    <div className=" w-full ">
                        <h1 className='font-[sora] mb-3 text-lg'>Social Links</h1>
                        <div className="flex flex-col gap-2 w-fit">
                            <Link href="/">Instagram</Link>
                            <Link href="/">LinkedIn</Link>
                            <Link href="/">YouTube</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer