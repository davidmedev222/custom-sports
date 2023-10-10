'use client'
import { ArrowRightIcon, LinkButton } from '@/components'
import { Colors, Designer, DesignerColorKeys, NumberModels, ShirtModels } from '@/models'
import { Routes } from '@/utils'
import { useState } from 'react'
import { ColorList, DesignPreview, NumberModelList, ShirtModelList } from './components'

function DesignerPage() {
  const [designerOptions, setDesignerOptions] = useState<Designer>({
    shirtModel: 'one',
    shirtBaseColor: 'violet',
    shirtModelColor: 'white',
    numberModel: 'one',
    numberBaseColor: 'black'
  })

  const onChangeColor = (color: Colors, key: DesignerColorKeys) => {
    setDesignerOptions((state) => ({ ...state, [key]: color }))
  }

  const onChangeShirtModel = (model: ShirtModels) => {
    setDesignerOptions((state) => ({ ...state, shirtModel: model }))
  }

  const onChangeNumberModel = (model: NumberModels) => {
    setDesignerOptions((state) => ({ ...state, numberModel: model }))
  }

  return (
    <main className='p-main mx-auto grid min-h-screen max-w-screen-xl items-center gap-8 xmd:grid-cols-[2fr_1fr]'>
      <DesignPreview design={designerOptions} />
      <div className='grid gap-y-8 p-2 xmd:max-h-[72.5vh] xmd:overflow-y-auto xmd:px-4'>
        <ShirtModelList heading='Shirt Model' onChangeModel={onChangeShirtModel} />
        <ColorList heading='Shirt Base Color' listKey='shirtBaseColor' onChangeColor={onChangeColor} />
        <ColorList heading='Shirt Model Color' listKey='shirtModelColor' onChangeColor={onChangeColor} />
        <NumberModelList heading='Number Model' onChangeModel={onChangeNumberModel} />
        <ColorList heading='Number Base Color' listKey='numberBaseColor' onChangeColor={onChangeColor} />
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
