import styled from 'styled-components'
import background from '../../assets/images/bg_header.svg'
import { colors } from '../../styles'

export const Logo = styled.img`
  cursor: pointer;
`
interface ContainerProps {
  isHomePage: boolean
}

export const Container = styled.header<ContainerProps>`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  height: ${(props) => (props.isHomePage ? '381px' : '200px')};
  width: 100%;
  display: flex;
  align-items: center;

  .container {
    width: 1024px;
    margin: auto;
    display: flex;
    flex-direction: ${(props) => (props.isHomePage ? 'column' : 'row')};
    align-items: center;
    justify-content: ${(props) =>
      props.isHomePage ? 'center' : 'space-between'};
    h2 {
      font-size: 36px;
      font-weight: 900;
      color: ${colors.red};
      text-align: center;
      margin: 136px 0 0 0;
      max-width: 550px;
    }
    .carrinho,
    .lista__restaurantes {
      color: ${colors.red};
      font-size: 18px;
      font-weight: 600;
    }
  }
`
