import { ArrowRightIcon, LinkButton, ShippingIcon, SupportIcon, VerifiedIcon } from '@/components'
import { Routes } from '@/utils'

function CallToAction() {
  return (
    <section className='grid place-items-start gap-y-4'>
      <span className='font-medium uppercase'>+33k sales made</span>
      <h1 className='text-5xl font-medium text-violet-500'>Custom Sports</h1>
      <p>T-shirts are 100% sublimated, with customized designs as shown in the images.</p>
      <LinkButton
        href={Routes.Designer}
        iconLeft={<ArrowRightIcon className='rounded-full bg-white fill-black p-1.5' />}
      >
        Create Design
      </LinkButton>
      <ul className='grid gap-y-2 text-xs'>
        <li className='grid grid-cols-[auto_1fr] items-center gap-x-2'>
          <VerifiedIcon /> Shop with confidence from home.
        </li>
        <li className='grid grid-cols-[auto_1fr] items-center gap-x-2'>
          <ShippingIcon /> Fast and safe shipping to your door.
        </li>
        <li className='grid grid-cols-[auto_1fr] items-center gap-x-2'>
          <SupportIcon /> Dedicated customer service to solve your doubts.
        </li>
      </ul>
    </section>
  )
}

export default CallToAction
