'use client'
import { useDesignerStore, useStore } from '@/store'

function OrderSummaryCard() {
  const designer = useStore(useDesignerStore, (state) => state.designer)

  return (
    <div className='space-y-12 bg-violet-500 p-8 md:col-start-2 md:row-start-1 md:row-end-3'>
      <h2 className='text-4xl font-semibold text-white'>Order Summary</h2>
      <p className='text-2xl text-gray-200'>
        You pay, <span className='text-4xl font-medium text-white'>$30</span> c/u
      </p>
      <ul className='grid list-inside list-decimal gap-y-2 text-xl capitalize text-gray-200'>
        <li>
          Shirt Model : <span className='font-medium text-white'>{designer?.shirtModel}</span>
        </li>
        <li>
          Shirt Base Color : <span className='font-medium text-white'>{designer?.shirtBaseColor}</span>
        </li>
        <li>
          Shirt Model Color : <span className='font-medium text-white'>{designer?.shirtModelColor}</span>
        </li>
        <li>
          Number Model : <span className='font-medium text-white'>{designer?.numberModel}</span>
        </li>
        <li>
          Number Base Color : <span className='font-medium text-white'>{designer?.numberBaseColor}</span>
        </li>
      </ul>
    </div>
  )
}

export default OrderSummaryCard
