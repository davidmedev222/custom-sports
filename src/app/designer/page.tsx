import { ArrowRightIcon, LinkButton } from '@/components'
import { Routes } from '@/utils'
import { DesignOptions, DesignPreview } from './components'

function DesignerPage() {
  return (
    <main className='p-main mx-auto grid min-h-screen max-w-screen-xl items-center gap-8 lg:grid-cols-[2fr_1fr]'>
      <DesignPreview />
      <DesignOptions />
      <LinkButton
        className='mx-auto lg:col-span-2'
        href={Routes.Cart}
        iconLeft={<ArrowRightIcon className='rounded-full bg-white fill-black p-1.5' />}
      >
        Add to Cart
      </LinkButton>
    </main>
  )
}

export default DesignerPage
