'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useRef } from 'react'
import { CloseIcon } from '../index'

interface Props {
  children: React.ReactNode
}

function Modal({ children }: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const dialogRef = useRef<HTMLDialogElement | null>(null)
  const showModal = searchParams.get('sw')

  useEffect(() => {
    showModal === 't' && dialogRef.current?.showModal()
    showModal !== 't' && dialogRef.current?.close()
  }, [showModal])

  return (
    <dialog ref={dialogRef} className='rounded-2xl bg-white p-4 shadow-2xl backdrop:bg-black/30 sm:p-8'>
      <div className='grid'>
        <button className='ml-auto' onClick={() => router.back()}>
          <CloseIcon className='h-6 w-6 fill-black' />
        </button>
        {children}
      </div>
    </dialog>
  )
}

export default Modal
