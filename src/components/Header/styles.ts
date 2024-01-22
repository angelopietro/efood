import styled from 'styled-components'
import background from '../../assets/images/bg_header.png'
import { breakpoints, colors } from '../../styles'
import { Link } from 'react-router-dom'

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
    width: 100%;
    max-width: 1024px;
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
      width: 55%;

      @media (max-width: ${breakpoints.desktop}) {
        width: 75%;
      }

      @media (max-width: ${breakpoints.tablet}) {
        width: 90%;
        font-size: 24px;
      }
    }
  }
`
export const CartButton = styled.span`
  cursor: pointer;
  color: ${colors.red};
  font-size: 18px;
  font-weight: 600;
  @media (max-width: ${breakpoints.desktop}) {
    padding: 0 10px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
    padding: 0 10px;
  }
`
export const RestaurantLink = styled(Link)`
  color: ${colors.red};
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  @media (max-width: ${breakpoints.desktop}) {
    padding: 0 10px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
    padding: 0 10px;
  }
`
