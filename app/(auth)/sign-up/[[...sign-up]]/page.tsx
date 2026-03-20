import { ClerkProvider, SignUp } from '@clerk/nextjs'
import { dark } from '@clerk/ui/themes'

function SignUpPage() {
  return (
    <section className='w-fit  flex items-center justify-center '>
      
        <SignUp fallbackRedirectUrl={"/dashboard"} signInUrl='/sign-in'/>
      
    </section>
  )
}

export default SignUpPage