import React from 'react'
import Card from '../Card'

function Features() {
    return (
        <section className=" bg-radial-[at_50%_0%] from-green/20 to-dark to-60% w-full min-h-screen ">
            <div className="mx-auto max-w-380 flex items-start justify-center flex-col gap-10 w-full h-full pt-60 relative">
                <div className="flex flex-col items-start space-y-4 mt-80 pb-30">
                    <h1 className='text-6xl text-accent font-[sora] font-bold '>The Ultimate AI Learning Toolkit</h1>
                    <p className='text-accent '>Unlock your full coding potential with specialized features designed to streamline every step of your developement workflow.</p>

                    <div className="mt-10">
                        <Card />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features