import styled from 'styled-components'
import { colors } from '../../styles'

export const Logo = styled.img`
  cursor: pointer;
`

export const Container = styled.footer`
  background-color: ${colors.redLight};
  height: 298px;
  width: 100%;
  display: flex;
  align-items: center;

  .container {
    width: 1024px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${colors.red};
    text-align: center;

    p {
      max-width: 480px;
      font-size: 10px;
      line-height: 15px;
    }
  }

  nav {
    width: 88px;
    display: flex;
    justify-content: space-between;
    margin-top: 33px;
    margin-bottom: 80px;
  }
`

export const SocialMedia = styled.a`
  img {
    width: 24px;
    height: 24px;
  }
`
