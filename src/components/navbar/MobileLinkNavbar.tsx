'use client'
import { CartIcon, ExploreIcon, HomeIcon, PaintIcon, PersonIcon } from '@/components'
import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

interface Props extends LinkProps {
  children: React.ReactNode
  title: string
}

function MobileLinkNavbar({ children, title, ...rest }: Props) {
  const pathname = usePathname()
  const classes = {
    link: clsx(
      'relative grid place-items-center gap-y-0.5 text-xs text-gray-400 transition-colors duration-300 hover:text-violet-500',
      pathname === rest.href && 'text-violet-500'
    ),
    designer: clsx('absolute -top-[475%] rounded-full bg-violet-500 fill-white p-2')
  }

  return (
    <Link className={classes.link} {...rest}>
      {title === 'Home' && <HomeIcon />}
      {title === 'Discover' && <ExploreIcon />}
      {title === 'Designer' && <PaintIcon className={classes.designer} size={64} />}
      {title === 'Cart' && <CartIcon />}
      {title === 'Profile' && <PersonIcon />}
      {children}
    </Link>
  )
}

export default MobileLinkNavbar
