import { SignInForm } from '@/components'
import { Routes } from '@/utils'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

async function LoginPage() {
  const session = await getServerSession()
  if (session) redirect(Routes.Profile)

  return (
    <main className='p-main grid min-h-screen'>
      <SignInForm className='m-auto' />
    </main>
  )
}

export default LoginPage
