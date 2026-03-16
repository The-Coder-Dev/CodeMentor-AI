import React from 'react'
import { ClerkProvider, SignIn } from '@clerk/nextjs'
import { dark } from '@clerk/ui/themes'

function SignInPage() {
  return (
    <section className='w-fit  flex items-center justify-center '>
      <ClerkProvider appearance={{
     theme: dark,
   }}>
        <SignIn />
        </ClerkProvider>
    </section>
  )
}

export default SignInPage