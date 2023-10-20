'use client'
import { Routes } from '@/utils'
import { signIn } from 'next-auth/react'
import { Button, GithubIcon, GoogleIcon } from '../index'

interface Props {
  className?: string
}

function SignInForm({ className }: Props) {
  const classes = `grid max-w-sm gap-y-3 text-center ${className ?? ''}`

  return (
    <div className={classes}>
      <p className='my-4 text-3xl font-semibold sm:text-4xl'>Custom Sports</p>
      <p className='text-xl font-medium sm:text-2xl'>Welcome to Custom Sports!</p>
      <p>Choose how you want to continue to create an account.</p>
      <div className='my-4 grid gap-y-4'>
        <Button
          onClick={async () => await signIn('google', { callbackUrl: Routes.Profile })}
          variant='google'
          iconLeft={<GoogleIcon size={24} />}
        >
          Continue with Google
        </Button>
        <Button
          onClick={async () => await signIn('github', { callbackUrl: Routes.Profile })}
          variant='github'
          iconLeft={<GithubIcon size={24} />}
        >
          Continue with Github
        </Button>
      </div>
      <p className='text-xs'>
        By clicking the button, you agree to the Terms of Use and Privacy Policy and also confirm that you are 18 years
        of age or older.
      </p>
    </div>
  )
}

export default SignInForm
