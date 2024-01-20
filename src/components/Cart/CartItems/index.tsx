import Button from '../../Button'
import { CartItem, CartTotalPrice } from './styles'
import trashIcon from '../../..//assets/images/ico_lixeira.svg'
import { useState } from 'react'

interface CartSteps {
  proximoPasso: () => void
}

const CartItems = ({ proximoPasso }: CartSteps) => {
  const [viewsCartForms, setViewsCartForms] = useState(true)
  const Delivery = () => {
    setViewsCartForms(false)
  }

  return (
    <>
      <ul>
        <CartItem>
          <img
            className="item__image"
            src="https://placehold.co/80"
            alt="Pizza Marguerita"
          />
          <div className="item__content">
            <h3>Pizza Marguerita</h3>
            <span>R$ 69,90</span>
            <img className="trash" src={trashIcon} alt="Retirar do carrinho" />
          </div>
        </CartItem>
        <CartItem>
          <img
            className="item__image"
            src="https://placehold.co/80"
            alt="Pizza Marguerita"
          />
          <div className="item__content">
            <h3>Pizza Marguerita</h3>
            <span>R$ 69,90</span>
            <img className="trash" src={trashIcon} alt="Retirar do carrinho" />
          </div>
        </CartItem>
      </ul>
      <CartTotalPrice>
        <span>Valor Total</span>
        <span>R$ 139,80</span>
      </CartTotalPrice>

      <Button
        type="button"
        variant="secondary"
        title="Continuar com a entrega"
        onClick={proximoPasso}
      >
        Continuar com a entrega
      </Button>
    </>
  )
}

export default CartItems
