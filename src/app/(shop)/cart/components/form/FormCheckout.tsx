'use client'
import { ArrowRightIcon, Button } from '@/components'
import { yupResolver } from '@hookform/resolvers/yup'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { object, string } from 'yup'
import FormErrorMessage from './FormErrorMessage'

const FormCheckoutSchema = object({
  firstName: string().required('Please enter your first name.').min(3, 'Please enter at least 3 characters.').trim(),
  lastName: string().required('Please enter your last name.').min(3, 'Please enter at least 3 characters.').trim(),
  email: string()
    .required('Please enter your email')
    .min(9, 'Please enter at least 9 characters')
    .email('Please enter a valid email')
    .trim(),
  address: string().required('Please enter your address').min(3, 'Please enter at least 3 characters').trim(),
  zipCode: string().required('Please enter your zip code').trim(),
  city: string().required('Please enter your city').min(3, 'Please enter at least 3 characters').trim(),
  state: string().required('Please enter your state').min(3, 'Please enter at least 3 characters').trim(),
  comments: string().required('Please enter your comments').min(20, 'Please enter at least 20 characters').trim(),
  payment: string().required('Please select a payment method').trim()
})

function FormCheckout() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm({ resolver: yupResolver(FormCheckoutSchema) })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
    console.log('generate order')
    reset()
  })

  return (
    <form onSubmit={onSubmit} className='grid gap-y-6'>
      <div className='grid gap-x-12 gap-y-6 xsm:grid-cols-2'>
        <label>
          First Name
          <input type='text' {...register('firstName')} aria-invalid={errors.firstName ? 'true' : 'false'} />
          {errors.firstName?.message && <FormErrorMessage>{errors.firstName.message}</FormErrorMessage>}
        </label>
        <label>
          Last Name
          <input type='text' {...register('lastName')} aria-invalid={errors.lastName ? 'true' : 'false'} />
          {errors.lastName?.message && <FormErrorMessage>{errors.lastName.message}</FormErrorMessage>}
        </label>
      </div>
      <label>
        Email
        <input type='email' {...register('email')} aria-invalid={errors.email ? 'true' : 'false'} />
        {errors.email?.message && <FormErrorMessage>{errors.email.message}</FormErrorMessage>}
      </label>
      <div className='grid gap-x-12 gap-y-6 xsm:grid-cols-2'>
        <label>
          Address
          <input type='text' {...register('address')} aria-invalid={errors.address ? 'true' : 'false'} />
          {errors.address?.message && <FormErrorMessage>{errors.address.message}</FormErrorMessage>}
        </label>
        <label>
          Zip Code
          <input type='text' {...register('zipCode')} aria-invalid={errors.zipCode ? 'true' : 'false'} />
          {errors.zipCode?.message && <FormErrorMessage>{errors.zipCode.message}</FormErrorMessage>}
        </label>
      </div>
      <div className='grid gap-x-12 gap-y-6 xsm:grid-cols-2'>
        <label>
          City
          <input type='text' {...register('city')} aria-invalid={errors.city ? 'true' : 'false'} />
          {errors.city?.message && <FormErrorMessage>{errors.city.message}</FormErrorMessage>}
        </label>
        <label>
          State / Province
          <input type='text' {...register('state')} aria-invalid={errors.state ? 'true' : 'false'} />
          {errors.state?.message && <FormErrorMessage>{errors.state.message}</FormErrorMessage>}
        </label>
      </div>
      <label>
        Comments on the t-shirts
        <textarea cols={30} rows={5} {...register('comments')} aria-invalid={errors.comments ? 'true' : 'false'} />
        {errors.comments?.message && <FormErrorMessage>{errors.comments.message}</FormErrorMessage>}
      </label>
      <fieldset className='grid gap-4 lg:grid-cols-3'>
        <legend className='my-6'>Payment Method</legend>
        <label
          className='relative flex items-center justify-center rounded-2xl border border-gray-300 p-8 data-[select=true]:border-violet-500'
          data-select={watch('payment') === 'paypal'}
        >
          <Image className='w-auto' src='/assets/paypal.webp' width={80} height={80} alt='Logo Paypal' />
          <input
            className='absolute right-2 top-2 text-violet-500 opacity-0 checked:opacity-100 focus:ring-violet-500'
            type='radio'
            {...register('payment')}
            value='paypal'
          />
        </label>
        <label
          className='relative flex items-center justify-center rounded-2xl border border-gray-300 p-8 data-[select=true]:border-violet-500'
          data-select={watch('payment') === 'stripe'}
        >
          <Image className='w-auto' src='/assets/stripe.webp' width={80} height={80} alt='Logo Stripe' />
          <input
            className='absolute right-2 top-2 text-violet-500 opacity-0 checked:opacity-100 focus:ring-violet-500'
            type='radio'
            {...register('payment')}
            value='stripe'
          />
        </label>
        <label
          className='relative flex items-center justify-center rounded-2xl border  border-gray-300 p-8 data-[select=true]:border-violet-500'
          data-select={watch('payment') === 'mercadopago'}
        >
          <Image className='w-auto' src='/assets/mercadopago.webp' width={80} height={80} alt='Logo Mercado Pago' />
          <input
            className='absolute right-2 top-2 text-violet-500 opacity-0 checked:opacity-100 focus:ring-violet-500'
            type='radio'
            {...register('payment')}
            value='mercadopago'
          />
        </label>
        {errors.payment?.message && (
          <FormErrorMessage className='lg:col-span-4'>{errors.payment.message}</FormErrorMessage>
        )}
      </fieldset>
      <Button
        className='mx-auto mt-12'
        variant='primary'
        iconLeft={<ArrowRightIcon className='rounded-full bg-white fill-black p-1.5' />}
      >
        Generate Order
      </Button>
    </form>
  )
}

export default FormCheckout
