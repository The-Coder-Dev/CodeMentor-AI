import React from 'react'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'

function page() {
  return (
    <main className='bg-dark w-full min-h-screen'>
        <Hero />
        <Features />
    </main>
  )
}

export default page