import clsx from 'clsx'

interface Props {
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'github' | 'google'
  iconLeft?: JSX.Element
}

function ButtonLink({ children, className, variant, iconLeft }: Props) {
  const classes = clsx(
    'rounded-full shadow-2xl transition duration-300',
    iconLeft && 'flex flex-wrap items-center justify-center gap-x-4',
    variant === 'primary' && 'bg-violet-500 px-5 py-2 text-white hover:bg-violet-700',
    variant === 'github' && 'bg-black p-4 text-white hover:scale-105 hover:bg-black/70',
    variant === 'google' && 'bg-white p-4 text-black hover:scale-105 hover:bg-white/70',
    className
  )

  return (
    <button className={classes}>
      {iconLeft && iconLeft}
      {children}
    </button>
  )
}

export default ButtonLink
