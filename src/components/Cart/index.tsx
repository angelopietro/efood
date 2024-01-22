import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import CartItems from './CartItems'
import FinishOrder from './FinishOrder'
import FormDelivery from './FormDelivery'
import FormPayment from './FormPayment'
import { CartContainer, Overlay, Sidebar } from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const [currentStep, setCurrentStep] = useState(1)

  const nextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const previousStep = () => {
    setCurrentStep(currentStep - 1)
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <CartItems
            cartItems={items}
            closeCart={closeCart}
            removeItem={removeItem}
            proximoPasso={nextStep}
          />
        )
      case 2:
        return (
          <FormDelivery proximoPasso={nextStep} passoAnterior={previousStep} />
        )
      case 3:
        return (
          <FormPayment proximoPasso={nextStep} passoAnterior={previousStep} />
        )
      case 4:
        return <FinishOrder isOpened={closeCart} />
      default:
        return null
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
