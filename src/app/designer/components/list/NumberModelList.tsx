import { NumberModels } from '@/models'
import clsx from 'clsx'
import {
  NumberModelFive,
  NumberModelFour,
  NumberModelOne,
  NumberModelSix,
  NumberModelThree,
  NumberModelTwo
} from '../index'

interface Props {
  heading: string
  onChangeModel: (model: NumberModels) => void
}

function ModelList({ heading, onChangeModel }: Props) {
  const classes = {
    item: clsx('cursor-pointer rounded-xl p-3 shadow-xl hover:outline hover:outline-violet-500'),
    model: clsx('opacity-100')
  }

  return (
    <ul className='grid grid-cols-3 gap-2'>
      <li className='col-span-3 font-medium'>{heading}</li>
      <li className={classes.item} onClick={() => onChangeModel('one')}>
        <NumberModelOne className={classes.model} />
      </li>
      <li className={classes.item} onClick={() => onChangeModel('two')}>
        <NumberModelTwo className={classes.model} />
      </li>
      <li className={classes.item} onClick={() => onChangeModel('three')}>
        <NumberModelThree className={classes.model} />
      </li>
      <li className={classes.item} onClick={() => onChangeModel('four')}>
        <NumberModelFour className={classes.model} />
      </li>
      <li className={classes.item} onClick={() => onChangeModel('five')}>
        <NumberModelFive className={classes.model} />
      </li>
      <li className={classes.item} onClick={() => onChangeModel('six')}>
        <NumberModelSix className={classes.model} />
      </li>
    </ul>
  )
}

export default ModelList
