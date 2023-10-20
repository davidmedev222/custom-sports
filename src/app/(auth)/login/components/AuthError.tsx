'use client'
import { InfoIcon } from '@/components'
import { useSearchParams } from 'next/navigation'
import { ERROR_CODES, ErrorCodes } from '../utils'

function AuthError() {
  const searchParams = useSearchParams()
  const existError = searchParams.get('error') !== null
  const error = searchParams.get('error') as ErrorCodes

  return (
    existError && (
      <div className='grid grid-cols-[auto_1fr] items-center justify-center gap-x-4 rounded-2xl bg-red-500 p-4 text-white shadow-2xl'>
        <InfoIcon className='fill-current' />
        <p>{ERROR_CODES[error] ?? ERROR_CODES.Default}</p>
      </div>
    )
  )
}

export default AuthError
