import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'

interface Props extends LinkProps {
  children: React.ReactNode
  className?: string
  variant?: 'primary'
  iconLeft?: JSX.Element
}

function ButtonLink({ children, className, variant, iconLeft, ...rest }: Props) {
  const classes = clsx(
    'rounded-full shadow-2xl transition duration-300',
    variant === 'primary' && 'bg-violet-500 px-5 py-2 text-white hover:scale-105 hover:bg-violet-700',
    iconLeft && 'flex items-center gap-x-4',
    className
  )

  return (
    <Link className={classes} {...rest}>
      {iconLeft && iconLeft}
      {children}
    </Link>
  )
}

export default ButtonLink
