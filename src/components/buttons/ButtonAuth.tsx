'use client'
import { Routes } from '@/utils'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { ArrowRightIcon, ButtonLink, Spinner } from '../index'

function ButtonAuth() {
  const { data: session, status } = useSession()
  const user = session?.user

  if (status === 'loading') return <Spinner />

  if (user) {
    return (
      <ButtonLink href={Routes.Profile} variant='user'>
        <Image
          className='rounded-full'
          src={user.image ?? '/assets/avatar.webp'}
          width={40}
          height={40}
          alt='User profile image'
        />
      </ButtonLink>
    )
  }

  return (
    <ButtonLink
      variant='primary'
      href={Routes.ModalAuth}
      iconLeft={<ArrowRightIcon className='rounded-full bg-white fill-black p-1.5' />}
    >
      Create Account
    </ButtonLink>
  )
}

export default ButtonAuth
