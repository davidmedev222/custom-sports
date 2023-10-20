'use client'
import { DesignerColorKeys } from '@/models'
import { useDesignerStore, useStore } from '@/store'
import { colors } from '../../utils'
import Color from './Color'

interface Props {
  heading: string
  listKey: DesignerColorKeys
}

function ColorList({ heading, listKey }: Props) {
  const colorModel = useStore(useDesignerStore, (state) => state.designer)?.[listKey]
  const changeColorModel = useDesignerStore((state) => state.changeColorModel)

  return (
    <ul className='grid grid-cols-6 gap-2'>
      <li className='col-span-6 font-medium'>{heading}</li>
      {colors.map((color) => (
        <Color
          key={color}
          onClick={() => changeColorModel(color, listKey)}
          color={color}
          align='center'
          isSelected={colorModel === color}
        />
      ))}
    </ul>
  )
}

export default ColorList
