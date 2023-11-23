import { FormCheckout, OrderSummaryCard } from './components'

function CartPage() {
  return (
    <main className='p-main mx-auto grid max-w-screen-xl gap-12 md:grid-cols-2'>
      <h1 className='text-4xl font-semibold'>Checkout</h1>
      <FormCheckout />
      <OrderSummaryCard />
    </main>
  )
}

export default CartPage
