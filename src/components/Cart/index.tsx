import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import CartItems from './CartItems'
import FormDelivery from './FormDelivery'
import FormPayment from './FormPayment'
import { CartContainer, Overlay, Sidebar } from './styles'

const Cart = () => {
  const { isOpen, items, currentCheckoutStep } = useSelector(
    (state: RootReducer) => state.cart
  )

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  console.log(currentCheckoutStep)
  const renderStep = () => {
    switch (currentCheckoutStep.step) {
      case 'Delivery':
        return <FormDelivery />
      case 'Payment':
        return <FormPayment />
      default:
        return (
          <CartItems
            cartItems={items}
            closeCart={closeCart}
            removeItem={removeItem}
          />
        )
    }
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>{renderStep()}</Sidebar>
    </CartContainer>
  )
}

export default Cart
