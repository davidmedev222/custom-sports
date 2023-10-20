'use client'
import { Button } from '@/components'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

function ProfilePage() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <div>Authenticating...</div>
  }

  return (
    <main>
      <h1>Profile page</h1>
      <p>{session?.user?.name}</p>
      <p>{session?.user?.email}</p>
      <p>{session?.user?.id}</p>
      <Image src={session?.user?.image ?? '/assets/avatar.webp'} width={100} height={100} alt='User profile' />
      <Button onClick={async () => await signOut()} variant='primary'>
        Cerrar Sesion
      </Button>
    </main>
  )
}

export default ProfilePage
