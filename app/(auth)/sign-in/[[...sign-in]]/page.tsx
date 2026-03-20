
import { ClerkProvider, SignIn } from '@clerk/nextjs'


function SignInPage() {
  return (
    <section className='w-fit  flex items-center justify-center '>

      <SignIn fallbackRedirectUrl={"/dashboard"} />

    </section>
  )
}

export default SignInPage