import { useState } from 'react'
import * as S from '../../styles'
import { CartContainer, Sidebar } from './styles'
import CartItems from './CartItems'
import FormDelivery from './FormDelivery'
import FormPayment from './FormPayment'
import FinishOrder from './FinishOrder'

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)

  const nextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const previousStep = () => {
    setCurrentStep(currentStep - 1)
  }

  const closeCart = () => {
    setIsOpen(false)
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <CartItems proximoPasso={nextStep} />
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
      <S.Overlay />
      <Sidebar>{renderStep()}</Sidebar>
    </CartContainer>
  )
}

export default Cart
