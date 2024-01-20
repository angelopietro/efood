import { Link, useLocation } from 'react-router-dom'
import { Container, Logo } from './styles'

import logoEfood from '../../assets/images/logo.svg'

const Header = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <>
      <Container isHomePage={isHome}>
        <div className="container">
          {!isHome && <span className="lista__restaurantes">restaurantes</span>}
          <Link to="/" title="Página inicial">
            <Logo
              src={logoEfood}
              alt="Efood - Viva experiências gastronômicas no conforto da sua casa"
            />
          </Link>
          {isHome ? (
            <h2>Viva experiências gastronômicas no conforto da sua casa</h2>
          ) : (
            <span className="carrinho">0 produto(s) no carrinho</span>
          )}
        </div>
      </Container>
    </>
  )
}

export default Header
