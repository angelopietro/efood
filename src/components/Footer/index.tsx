import { Container, Logo, SocialMedia } from './styles'
import { Link } from 'react-router-dom'
import logoEfood from '../../assets/images/logo.svg'
import instagramIcon from '../../assets/images/ico_instagram-round.svg'
import facebookIcon from '../..//assets/images/ico_facebook-round.svg'
import twitterIcon from '../../assets/images/ico_twitter.svg'
const Footer = () => {
  return (
    <>
      <Container>
        <div className="container">
          <Link to="/" title="Página inicial">
            <Logo
              src={logoEfood}
              alt="Efood - Viva experiências gastronômicas no conforto da sua casa"
            />
          </Link>
          <nav>
            <SocialMedia href="#">
              <img src={instagramIcon} alt="instagram" />
            </SocialMedia>
            <SocialMedia href="#">
              <img src={facebookIcon} alt="facebook" />
            </SocialMedia>
            <SocialMedia href="#">
              <img src={twitterIcon} alt="Twitter" />
            </SocialMedia>
          </nav>
          <p>
            A efood é uma plataforma para divulgação de estabelecimentos, a
            responsabilidade pela entrega, qualidade dos produtos é toda do
            estabelecimento contratado.
          </p>
        </div>
      </Container>
    </>
  )
}

export default Footer
