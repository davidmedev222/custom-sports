import {
  ArrowRightIcon,
  CartIcon,
  DesktopLinkNavbar,
  DesktopNavbar,
  LinkButton,
  LogoIcon,
  MobileNavbar
} from '@/components'
import { Routes } from '@/utils'
import Link from 'next/link'

function Header() {
  return (
    <header className='row-start-2 sm:row-start-1 sm:flex sm:items-center sm:justify-between sm:gap-x-8 sm:px-8 sm:py-4'>
      <Link className='hidden sm:block' href={Routes.Home}>
        <LogoIcon className='h-8 w-8 fill-black' />
      </Link>
      <DesktopNavbar />
      <MobileNavbar />
      <div className='hidden sm:ml-auto sm:flex sm:items-center sm:gap-x-8'>
        <DesktopLinkNavbar href={Routes.Cart}>
          <CartIcon />
        </DesktopLinkNavbar>
        <LinkButton
          href={Routes.Profile}
          iconLeft={<ArrowRightIcon className='rounded-full bg-white fill-black p-1.5' />}
        >
          Create Account
        </LinkButton>
      </div>
    </header>
  )
}

export default Header
