import { Link, useLocation } from 'react-router-dom'
import { CartButton, Container, Logo, RestaurantLink } from './styles'

import logoEfood from '../../assets/images/logo.svg'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Header = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const produtosCart = `${items.length} produto${items.length > 1 ? 's' : ''} no carrinho`

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <Container isHomePage={isHome}>
        <div className="container">
          {!isHome && <RestaurantLink to="/">restaurantes</RestaurantLink>}
          <Link to="/" title="Página inicial">
            <Logo
              src={logoEfood}
              alt="Efood - Viva experiências gastronômicas no conforto da sua casa"
            />
          </Link>
          {isHome ? (
            <h2>Viva experiências gastronômicas no conforto da sua casa</h2>
          ) : (
            <CartButton className="carrinho" onClick={openCart}>
              {produtosCart}
            </CartButton>
          )}
        </div>
      </Container>
    </>
  )
}

export default Header
