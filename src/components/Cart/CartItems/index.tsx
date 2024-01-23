import { useDispatch } from 'react-redux'
import trashIcon from '../../..//assets/images/ico_lixeira.svg'
import { checkoutSteps } from '../../../store/reducers/cart'
import { formatPrice, getTotalPrice } from '../../../utils'
import Button from '../../Button'
import { CartContainer, CartItem, CartTotalPrice } from './styles'

interface CartSteps {
  cartItems: ProductMenu[]
  removeItem: (id: number) => void
  closeCart: () => void
}

const CartItems = ({ cartItems, removeItem, closeCart }: CartSteps) => {
  const displayCartItems = cartItems.length !== 0
  const dispatch = useDispatch()

  const nextStep = () => {
    dispatch(checkoutSteps({ step: 'Delivery' }))
  }

  return (
    <>
      {displayCartItems ? (
        <CartContainer>
          <ul>
            {cartItems.map((item) => (
              <CartItem key={item.id}>
                <img className="item__image" src={item.foto} alt={item.nome} />
                <div className="item__content">
                  <h3>{item.nome}</h3>
                  <span>{formatPrice(item.preco)}</span>
                  <img
                    className="trash"
                    src={trashIcon}
                    alt="Retirar do carrinho"
                    onClick={() => removeItem(item.id)}
                  />
                </div>
              </CartItem>
            ))}
          </ul>
          <CartTotalPrice>
            <span>Valor Total</span>
            <span>{formatPrice(getTotalPrice(cartItems))}</span>
          </CartTotalPrice>

          <Button
            type="submit"
            variant="secondary"
            title="Continuar com a entrega"
            onClick={nextStep}
          >
            <>Continuar com a entrega</>
          </Button>
        </CartContainer>
      ) : (
        <>
          <p className="empty-text">
            O carrinho está vazio, adicione pelo menos um item para continuar
            com o pedido!
          </p>
          <Button
            type="button"
            variant="secondary"
            title="Continuar comprando"
            onClick={closeCart}
          >
            <>Continuar comprando</>
          </Button>
        </>
      )}
    </>
  )
}

export default CartItems
