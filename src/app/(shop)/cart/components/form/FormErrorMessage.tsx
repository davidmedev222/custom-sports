import { InfoIcon } from '@/components'
import clsx from 'clsx'

interface Props {
  children: React.ReactNode
  className?: string
}

function FormErrorMessage({ children, className }: Props) {
  const classes = clsx('my-2 flex items-center gap-x-2 text-sm text-red-500', className)

  return (
    <p className={classes}>
      <InfoIcon className='h-3.5 w-3.5 fill-current' /> {children}
    </p>
  )
}

export default FormErrorMessage
