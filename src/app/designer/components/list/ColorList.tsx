import { Colors, DesignerColorKeys } from '@/models'
import Color from './Color'

interface Props {
  heading: string
  listKey: DesignerColorKeys
  onChangeColor: (color: Colors, key: DesignerColorKeys) => void
}

function ColorList({ heading, listKey, onChangeColor }: Props) {
  return (
    <ul className='grid grid-cols-6 gap-2'>
      <li className='col-span-6 font-medium'>{heading}</li>
      <Color onClick={() => onChangeColor('yellow', listKey)} color='yellow' align='center' />
      <Color onClick={() => onChangeColor('red', listKey)} color='red' align='center' />
      <Color onClick={() => onChangeColor('blue', listKey)} color='blue' align='center' />
      <Color onClick={() => onChangeColor('green', listKey)} color='green' align='center' />
      <Color onClick={() => onChangeColor('orange', listKey)} color='orange' align='center' />
      <Color onClick={() => onChangeColor('violet', listKey)} color='violet' align='center' />
      <Color onClick={() => onChangeColor('gray', listKey)} color='gray' align='center' />
      <Color onClick={() => onChangeColor('black', listKey)} color='black' align='center' />
      <Color onClick={() => onChangeColor('white', listKey)} color='white' align='center' />
      <Color onClick={() => onChangeColor('cyan', listKey)} color='cyan' align='center' />
      <Color onClick={() => onChangeColor('pink', listKey)} color='pink' align='center' />
      <Color onClick={() => onChangeColor('lime', listKey)} color='lime' align='center' />
    </ul>
  )
}

export default ColorList
