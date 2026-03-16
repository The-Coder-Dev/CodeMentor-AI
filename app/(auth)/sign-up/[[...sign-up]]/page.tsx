import { ClerkProvider, SignUp } from '@clerk/nextjs'
import { dark } from '@clerk/ui/themes'

function SignUpPage() {
  return (
    <section className='w-fit  flex items-center justify-center '>
      <ClerkProvider appearance={{
        theme: dark,
      }}>
        <SignUp />
      </ClerkProvider>
    </section>
  )
}

export default SignUpPage