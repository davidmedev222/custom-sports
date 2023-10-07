'use client'
import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

interface Props extends LinkProps {
  children: React.ReactNode
}

function DesktopLinkNavbar({ children, ...rest }: Props) {
  const pathname = usePathname()
  const classes = {
    link: clsx(
      'text-base transition-colors duration-300 hover:text-violet-500',
      pathname === rest.href && 'text-violet-500'
    )
  }

  return (
    <Link className={classes.link} {...rest}>
      {children}
    </Link>
  )
}

export default DesktopLinkNavbar
