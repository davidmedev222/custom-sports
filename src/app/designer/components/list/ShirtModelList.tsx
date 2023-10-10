import { ShirtModels } from '@/models'
import clsx from 'clsx'
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

interface Props {
  heading: string
  onChangeModel: (model: ShirtModels) => void
}

function ShirtModelList({ heading, onChangeModel }: Props) {
  const classes = {
    item: clsx('cursor-pointer rounded-xl p-3 shadow-xl hover:outline hover:outline-violet-500'),
    model: clsx('opacity-100')
  }

  return (
    <ul className='grid grid-cols-3 gap-2'>
      <li className='col-span-3 font-medium'>{heading}</li>
      <li onClick={() => onChangeModel('one')} className={classes.item}>
        <ShirtModelOne className={classes.model} />
      </li>
      <li onClick={() => onChangeModel('two')} className={classes.item}>
        <ShirtModelTwo className={classes.model} />
      </li>
      <li onClick={() => onChangeModel('three')} className={classes.item}>
        <ShirtModelThree className={classes.model} />
      </li>
      <li onClick={() => onChangeModel('four')} className={classes.item}>
        <ShirtModelFour className={classes.model} />
      </li>
      <li onClick={() => onChangeModel('five')} className={classes.item}>
        <ShirtModelFive className={classes.model} />
      </li>
      <li onClick={() => onChangeModel('six')} className={classes.item}>
        <ShirtModelSix className={classes.model} />
      </li>
      <li onClick={() => onChangeModel('seven')} className={classes.item}>
        <ShirtModelSeven className={classes.model} />
      </li>
      <li onClick={() => onChangeModel('eight')} className={classes.item}>
        <ShirtModelEight className={classes.model} />
      </li>
    </ul>
  )
}

export default ShirtModelList
