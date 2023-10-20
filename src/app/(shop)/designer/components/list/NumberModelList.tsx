'use client'
import { NumberModels } from '@/models'
import { useDesignerStore, useStore } from '@/store'
import {
  NumberModelFive,
  NumberModelFour,
  NumberModelOne,
  NumberModelSix,
  NumberModelThree,
  NumberModelTwo
} from '../index'

interface Models {
  name: NumberModels
  component: JSX.Element
}

interface Props {
  heading: string
}

function NumbeModelList({ heading }: Props) {
  const numberModel = useStore(useDesignerStore, (state) => state.designer)?.numberModel
  const changeNumberModel = useDesignerStore((state) => state.changeNumberModel)

  const models: Models[] = [
    { name: 'one', component: <NumberModelOne isPreview numberModel={numberModel} /> },
    { name: 'two', component: <NumberModelTwo isPreview numberModel={numberModel} /> },
    { name: 'three', component: <NumberModelThree isPreview numberModel={numberModel} /> },
    { name: 'four', component: <NumberModelFour isPreview numberModel={numberModel} /> },
    { name: 'five', component: <NumberModelFive isPreview numberModel={numberModel} /> },
    { name: 'six', component: <NumberModelSix isPreview numberModel={numberModel} /> }
  ]

  return (
    <ul className='grid grid-cols-3 gap-2'>
      <li className='col-span-3 font-medium'>{heading}</li>
      {models.map((model) => (
        <li key={model.name} onClick={() => changeNumberModel(model.name)}>
          {model.component}
        </li>
      ))}
    </ul>
  )
}

export default NumbeModelList
