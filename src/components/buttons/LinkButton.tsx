import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'

interface Props extends LinkProps {
  children: React.ReactNode
  iconLeft?: JSX.Element
}

function LinkButton({ children, iconLeft, ...rest }: Props) {
  const classes = clsx(
    'rounded-full bg-violet-500 p-2 text-white transition-colors duration-300 hover:bg-violet-700',
    iconLeft && 'flex items-center gap-x-4'
  )

  return (
    <Link className={classes} {...rest}>
      {iconLeft && iconLeft}
      {children}
    </Link>
  )
}

export default LinkButton
