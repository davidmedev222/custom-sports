import { ColorList, NumberModelList, ShirtModelList } from './index'

function DesignOptions() {
  return (
    <div className='grid gap-y-8 p-2 lg:max-h-[72.5vh] lg:overflow-y-auto lg:px-4'>
      <ShirtModelList heading='Shirt Model' />
      <ColorList heading='Shirt Base Color' listKey='shirtBaseColor' />
      <ColorList heading='Shirt Model Color' listKey='shirtModelColor' />
      <NumberModelList heading='Number Model' />
      <ColorList heading='Number Base Color' listKey='numberBaseColor' />
    </div>
  )
}

export default DesignOptions
