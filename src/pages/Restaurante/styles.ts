import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
  margin-top: 56px;
  margin-bottom: 120px;
`

export const CardContainer = styled.div`
  background-color: ${colors.red};
  width: 320px;
  height: 338px;
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
