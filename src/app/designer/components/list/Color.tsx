import { Colors } from '@/models'
import clsx from 'clsx'
import { MouseEventHandler } from 'react'

interface Props {
  align?: 'center'
  color: Colors
  onClick?: MouseEventHandler<HTMLLIElement>
}

function Color({ align, color, onClick }: Props) {
  const classes = clsx(
    'h-8 w-8 cursor-pointer rounded-full shadow-xl shadow-black/30',
    color === 'yellow' && 'bg-yellow-500',
    color === 'red' && 'bg-red-500',
    color === 'blue' && 'bg-blue-500',
    color === 'green' && 'bg-green-500',
    color === 'orange' && 'bg-orange-500',
    color === 'violet' && 'bg-violet-500',
    color === 'gray' && 'bg-gray-500',
    color === 'black' && 'bg-black',
    color === 'white' && 'bg-white',
    color === 'cyan' && 'bg-cyan-500',
    color === 'pink' && 'bg-pink-500',
    color === 'lime' && 'bg-lime-500',
    align === 'center' && 'mx-auto'
  )

  return <li onClick={onClick} className={classes} />
}

export default Color
