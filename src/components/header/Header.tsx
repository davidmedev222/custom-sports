import { ButtonAuth, CartIcon, DesktopLinkNavbar, DesktopNavbar, LogoIcon, MobileNavbar } from '@/components'
import { Routes } from '@/utils'
import Link from 'next/link'

function Header() {
  return (
    <header className='fixed inset-x-0 bottom-0 z-10 mx-auto h-fit w-full max-w-screen-xl bg-white sm:top-0 sm:flex sm:items-center sm:justify-between sm:gap-x-8 sm:px-8 sm:py-4'>
      <Link className='hidden sm:block' href={Routes.Home}>
        <LogoIcon className='h-8 w-8 fill-black' />
      </Link>
      <MobileNavbar />
      <DesktopNavbar />
      <div className='hidden sm:ml-auto sm:flex sm:items-center sm:gap-x-8'>
        <DesktopLinkNavbar href={Routes.Cart}>
          <CartIcon />
        </DesktopLinkNavbar>
        <ButtonAuth />
      </div>
    </header>
  )
}

export default Header
