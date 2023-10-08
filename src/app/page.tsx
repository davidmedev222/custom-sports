import { CallToAction } from '@/components'
import Image from 'next/image'

function HomePage() {
  return (
    <main className='grid min-h-screen items-center gap-8 px-4 py-[82px] sm:grid-cols-2 sm:px-8'>
      <CallToAction />
      <Image
        src='/assets/shirt.webp'
        className='col-start-1 row-start-2 justify-self-center sm:col-start-2 sm:row-start-1 lg:-translate-x-20 lg:-translate-y-10'
        width={345}
        height={446}
        priority
        alt='Image with customized violet and black design'
      />
      <Image
        src='/assets/shirt2.webp'
        className='col-start-1 row-start-2 justify-self-center sm:col-start-2 sm:row-start-1 lg:translate-x-20 lg:translate-y-10'
        width={345}
        height={446}
        priority
        alt='Image with customized violet and black design'
      />
    </main>
  )
}

export default HomePage
