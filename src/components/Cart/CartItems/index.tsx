import trashIcon from '../../..//assets/images/ico_lixeira.svg'
import { Cardapio } from '../../../pages/Home'
import { formatPrice, getTotalPrice } from '../../../utils'
import Button from '../../Button'
import { CartItem, CartTotalPrice, CartContainer } from './styles'

interface CartSteps {
  cartItems: Cardapio[]
  proximoPasso: () => void
  removeItem: (id: number) => void
  closeCart: () => void
}

const CartItems = ({
  cartItems,
  removeItem,
  proximoPasso,
  closeCart
}: CartSteps) => {
  const displayCartItems = cartItems.length !== 0

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
            type="button"
            variant="secondary"
            title="Continuar com a entrega"
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
