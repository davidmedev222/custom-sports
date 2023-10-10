import { Designer } from '@/models'
import clsx from 'clsx'
import {
  NumberModelFive,
  NumberModelFour,
  NumberModelOne,
  NumberModelSix,
  NumberModelThree,
  NumberModelTwo,
  ShirtModelBase,
  ShirtModelEight,
  ShirtModelFive,
  ShirtModelFour,
  ShirtModelOne,
  ShirtModelSeven,
  ShirtModelSix,
  ShirtModelThree,
  ShirtModelTwo
} from './index'

interface Props {
  design: Designer
}

function DesignPreview({ design }: Props) {
  const { shirtModel, shirtBaseColor, shirtModelColor, numberModel, numberBaseColor } = design

  const classes = {
    model: clsx('col-start-1 row-start-1')
  }

  return (
    <div className='grid'>
      <ShirtModelBase shirtBaseColor={shirtBaseColor} className={classes.model} />
      <ShirtModelOne className={classes.model} shirtModel={shirtModel} shirtModelColor={shirtModelColor} />
      <ShirtModelTwo className={classes.model} shirtModel={shirtModel} shirtModelColor={shirtModelColor} />
      <ShirtModelThree className={classes.model} shirtModel={shirtModel} shirtModelColor={shirtModelColor} />
      <ShirtModelFour className={classes.model} shirtModel={shirtModel} shirtModelColor={shirtModelColor} />
      <ShirtModelFive className={classes.model} shirtModel={shirtModel} shirtModelColor={shirtModelColor} />
      <ShirtModelSix className={classes.model} shirtModel={shirtModel} shirtModelColor={shirtModelColor} />
      <ShirtModelSeven className={classes.model} shirtModel={shirtModel} shirtModelColor={shirtModelColor} />
      <ShirtModelEight className={classes.model} shirtModel={shirtModel} shirtModelColor={shirtModelColor} />
      <NumberModelOne className={classes.model} numberModel={numberModel} numberBaseColor={numberBaseColor} />
      <NumberModelTwo className={classes.model} numberModel={numberModel} numberBaseColor={numberBaseColor} />
      <NumberModelThree className={classes.model} numberModel={numberModel} numberBaseColor={numberBaseColor} />
      <NumberModelFour className={classes.model} numberModel={numberModel} numberBaseColor={numberBaseColor} />
      <NumberModelFive className={classes.model} numberModel={numberModel} numberBaseColor={numberBaseColor} />
      <NumberModelSix className={classes.model} numberModel={numberModel} numberBaseColor={numberBaseColor} />
    </div>
  )
}

export default DesignPreview
