import styled from 'styled-components'
import { colors } from '../../styles'

export const CardContainer = styled.div<Omit<Food, 'item '>>`
  background-color: ${(props) =>
    props.type === 'restaurant' ? colors.white : colors.red};
  width: ${(props) => (props.type === 'restaurant' ? '472px' : '320px')};
  height: ${(props) => (props.type === 'restaurant' ? '398px' : '338px')};
  text-align: left;
  color: ${(props) =>
    props.type === 'restaurant' ? colors.red : colors.redLight};
`
