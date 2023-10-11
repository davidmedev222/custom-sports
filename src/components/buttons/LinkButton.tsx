import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'

interface Props extends LinkProps {
  children: React.ReactNode
  className?: string
  iconLeft?: JSX.Element
}

function LinkButton({ children, className, iconLeft, ...rest }: Props) {
  const classes = clsx(
    'rounded-full bg-violet-500 p-2 text-white transition-colors duration-300 hover:bg-violet-700',
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

export default LinkButton
