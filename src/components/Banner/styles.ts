import styled from 'styled-components'
import { PropsBanner } from '.'
import { breakpoints, colors } from '../../styles'

export const Logo = styled.img`
  cursor: pointer;
`

export const Container = styled.div<PropsBanner>`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 280px;
  position: relative;

  h2,
  h3 {
    color: ${colors.white};
    font-size: 32px;
  }

  h2 {
    font-weight: 400;
  }

  h3 {
    position: absolute;
    bottom: 32px;
    font-weight: bold;
  }

  .container {
    width: 100%;
    max-width: 1024px;
    margin: auto;

    @media (max-width: ${breakpoints.tablet}) {
      grid-template-columns: 1fr;
      padding-left: 16px;
      padding-right: 16px;
    }
  }
`
