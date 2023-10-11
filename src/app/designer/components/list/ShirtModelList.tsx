'use client'
import { ShirtModels } from '@/models'
import { useDesignerStore, useStore } from '@/store'
import {
  ShirtModelEight,
  ShirtModelFive,
  ShirtModelFour,
  ShirtModelOne,
  ShirtModelSeven,
  ShirtModelSix,
  ShirtModelThree,
  ShirtModelTwo
} from '../index'

interface Models {
  name: ShirtModels
  component: JSX.Element
}

interface Props {
  heading: string
}

function ShirtModelList({ heading }: Props) {
  const shirtModel = useStore(useDesignerStore, (state) => state.designer)?.shirtModel
  const changeShirtModel = useDesignerStore((state) => state.changeShirtModel)

  const models: Models[] = [
    { name: 'one', component: <ShirtModelOne isPreview shirtModel={shirtModel} /> },
    { name: 'two', component: <ShirtModelTwo isPreview shirtModel={shirtModel} /> },
    { name: 'three', component: <ShirtModelThree isPreview shirtModel={shirtModel} /> },
    { name: 'four', component: <ShirtModelFour isPreview shirtModel={shirtModel} /> },
    { name: 'five', component: <ShirtModelFive isPreview shirtModel={shirtModel} /> },
    { name: 'six', component: <ShirtModelSix isPreview shirtModel={shirtModel} /> },
    { name: 'seven', component: <ShirtModelSeven isPreview shirtModel={shirtModel} /> },
    { name: 'eight', component: <ShirtModelEight isPreview shirtModel={shirtModel} /> }
  ]

  return (
    <ul className='grid grid-cols-3 gap-2'>
      <li className='col-span-3 font-medium'>{heading}</li>
      {models.map((model) => (
        <li key={model.name} onClick={() => changeShirtModel(model.name)}>
          {model.component}
        </li>
      ))}
    </ul>
  )
}

export default ShirtModelList
