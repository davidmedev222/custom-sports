import { ArrowRightIcon, LinkButton } from '@/components'
import { Routes } from '@/utils'
import {
  NumberModelFive,
  NumberModelFour,
  NumberModelOne,
  NumberModelSix,
  NumberModelThree,
  NumberModelTwo,
  ShirtModelBase,
  ShirtModelEight,
  ShirtModelFive,
  ShirtModelFour,
  ShirtModelOne,
  ShirtModelSeven,
  ShirtModelSix,
  ShirtModelThree,
  ShirtModelTwo
} from './components'

function DesignerPage() {
  return (
    <main className='p-main mx-auto grid min-h-screen max-w-screen-xl items-center gap-8 xmd:grid-cols-[2fr_1fr]'>
      <div className='grid'>
        <ShirtModelBase className='col-start-1 row-start-1 fill-green-200' />
        <ShirtModelOne className='col-start-1 row-start-1' />
        <ShirtModelTwo className='col-start-1 row-start-1' />
        <ShirtModelThree className='col-start-1 row-start-1' />
        <ShirtModelFour className='col-start-1 row-start-1' />
        <ShirtModelFive className='col-start-1 row-start-1' />
        <ShirtModelSix className='col-start-1 row-start-1' />
        <ShirtModelSeven className='col-start-1 row-start-1' />
        <ShirtModelEight className='col-start-1 row-start-1' />
        <NumberModelOne className='col-start-1 row-start-1' />
        <NumberModelTwo className='col-start-1 row-start-1' />
        <NumberModelThree className='col-start-1 row-start-1' />
        <NumberModelFour className='col-start-1 row-start-1' />
        <NumberModelFive className='col-start-1 row-start-1' />
        <NumberModelSix className='col-start-1 row-start-1' />
      </div>
      <div className='grid gap-y-8 overflow-y-auto px-2 xmd:max-h-[72.5vh] xmd:px-4'>
        <ul className='grid grid-cols-3 gap-2'>
          <li className='col-span-3 font-medium'>Shirt Model</li>
          <li className='rounded-xl p-3 shadow-xl hover:outline hover:outline-violet-500'>
            <ShirtModelOne className='' />
          </li>
          <li className='rounded-xl p-3 shadow-xl hover:outline hover:outline-violet-500'>
            <ShirtModelTwo className='' />
          </li>
          <li className='rounded-xl p-3 shadow-xl hover:outline hover:outline-violet-500'>
            <ShirtModelThree className='' />
          </li>
          <li className='rounded-xl p-3 shadow-xl hover:outline hover:outline-violet-500'>
            <ShirtModelFour className='' />
          </li>
          <li className='rounded-xl p-3 shadow-xl hover:outline hover:outline-violet-500'>
            <ShirtModelFive className='' />
          </li>
          <li className='rounded-xl p-3 shadow-xl hover:outline hover:outline-violet-500'>
            <ShirtModelSix className='' />
          </li>
          <li className='rounded-xl p-3 shadow-xl hover:outline hover:outline-violet-500'>
            <ShirtModelSeven className='' />
          </li>
          <li className='rounded-xl p-3 shadow-xl hover:outline hover:outline-violet-500'>
            <ShirtModelEight className='' />
          </li>
          <li className='rounded-xl p-3 shadow-xl hover:outline hover:outline-violet-500'>
            <ShirtModelBase className='fill-black' />
          </li>
        </ul>
        <ul className='grid grid-cols-6 gap-2'>
          <li className='col-span-6 font-medium'>Shirt Base Color</li>
          <li className='h-8 w-8 justify-self-center rounded-full bg-violet-500' />
          <li className='h-8 w-8 justify-self-center rounded-full bg-violet-500' />
          <li className='h-8 w-8 justify-self-center rounded-full bg-violet-500' />
          <li className='h-8 w-8 justify-self-center rounded-full bg-violet-500' />
          <li className='h-8 w-8 justify-self-center rounded-full bg-violet-500' />
          <li className='h-8 w-8 justify-self-center rounded-full bg-violet-500' />
          <li className='h-8 w-8 justify-self-center rounded-full bg-violet-500' />
          <li className='h-8 w-8 justify-self-center rounded-full bg-violet-500' />
          <li className='h-8 w-8 justify-self-center rounded-full bg-violet-500' />
          <li className='h-8 w-8 justify-self-center rounded-full bg-violet-500' />
          <li className='h-8 w-8 justify-self-center rounded-full bg-violet-500' />
          <li className='h-8 w-8 justify-self-center rounded-full bg-violet-500' />
        </ul>
        <ul className='grid grid-cols-6 gap-2'>
          <li className='col-span-6 font-medium'>Shirt Model Color</li>
          <li className='h-8 w-8 justify-self-center rounded-full bg-violet-500' />
          <li className='h-8 w-8 justify-self-center rounded-full bg-violet-500' />
          <li className='h-8 w-8 justify-self-center rounded-full bg-violet-500' />
          <li className='h-8 w-8 justify-self-center rounded-full bg-violet-500' />
          <li className='h-8 w-8 justify-self-center rounded-full bg-violet-500' />
          <li className='h-8 w-8 justify-self-center rounded-full bg-violet-500' />
          <li className='h-8 w-8 justify-self-center rounded-full bg-violet-500' />
          <li className='h-8 w-8 justify-self-center rounded-full bg-violet-500' />
          <li className='h-8 w-8 justify-self-center rounded-full bg-violet-500' />
          <li className='h-8 w-8 justify-self-center rounded-full bg-violet-500' />
          <li className='h-8 w-8 justify-self-center rounded-full bg-violet-500' />
          <li className='h-8 w-8 justify-self-center rounded-full bg-violet-500' />
        </ul>
        <ul className='grid grid-cols-3 gap-2'>
          <li className='col-span-3 font-medium'>Number Model</li>
          <li className='rounded-xl shadow-xl hover:outline hover:outline-violet-500'>
            <NumberModelOne className='' />
          </li>
          <li className='rounded-xl shadow-xl hover:outline hover:outline-violet-500'>
            <NumberModelTwo className='' />
          </li>
          <li className='rounded-xl shadow-xl hover:outline hover:outline-violet-500'>
            <NumberModelThree className='' />
          </li>
          <li className='rounded-xl shadow-xl hover:outline hover:outline-violet-500'>
            <NumberModelFour className='' />
          </li>
          <li className='rounded-xl shadow-xl hover:outline hover:outline-violet-500'>
            <NumberModelFive className='' />
          </li>
          <li className='rounded-xl shadow-xl hover:outline hover:outline-violet-500'>
            <NumberModelSix className='' />
          </li>
        </ul>
        <ul className='grid grid-cols-6 gap-2'>
          <li className='col-span-6 font-medium'>Number Base Color</li>
          <li className='h-8 w-8 justify-self-center rounded-full bg-violet-500' />
          <li className='h-8 w-8 justify-self-center rounded-full bg-violet-500' />
          <li className='h-8 w-8 justify-self-center rounded-full bg-violet-500' />
          <li className='h-8 w-8 justify-self-center rounded-full bg-violet-500' />
          <li className='h-8 w-8 justify-self-center rounded-full bg-violet-500' />
          <li className='h-8 w-8 justify-self-center rounded-full bg-violet-500' />
          <li className='h-8 w-8 justify-self-center rounded-full bg-violet-500' />
          <li className='h-8 w-8 justify-self-center rounded-full bg-violet-500' />
          <li className='h-8 w-8 justify-self-center rounded-full bg-violet-500' />
          <li className='h-8 w-8 justify-self-center rounded-full bg-violet-500' />
          <li className='h-8 w-8 justify-self-center rounded-full bg-violet-500' />
          <li className='h-8 w-8 justify-self-center rounded-full bg-violet-500' />
        </ul>
      </div>
      <LinkButton
        className='mx-auto xmd:col-span-2'
        href={Routes.Cart}
        iconLeft={<ArrowRightIcon className='rounded-full bg-white fill-black p-1.5' />}
      >
        Add to Cart
      </LinkButton>
    </main>
  )
}

export default DesignerPage
