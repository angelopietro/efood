import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
  margin-top: 56px;
  margin-bottom: 120px;

  @media (max-width: ${breakpoints.desktop}) {
    padding-left: 16px;
    padding-right: 16px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    padding-left: 16px;
    padding-right: 16px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding-left: 16px;
    padding-right: 16px;
  }
`
export const CardContainer = styled.div`
  background-color: ${colors.red};
  height: 100%;
  text-align: left;
  color: ${colors.redLight};
  padding: 7px;

  h2 {
    font-size: 16px;
    margin-top: 7px;
  }

  p {
    margin: 10px 0;
    font-size: 14px;
    line-height: 22px;
    color: colors.redLight;
  }
`
export const CardImage = styled.div<PropsCard>`
  width: 100%;
  height: 167px;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
`
