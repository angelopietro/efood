import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  border: none;
  color: ${(props) =>
    props.variant === 'primary' ? colors.redLight : colors.red};
  ${colors.white};
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.red : colors.redLight};
  width: ${(props) => (props.variant === 'primary' ? '' : '100%')};
  font-weight: bold;
  padding: 5px 8px;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  border: none;
  color: ${colors.redLight};
  background-color: ${colors.red};
  font-weight: bold;
  padding: 5px 8px;
  text-decoration: none;
`
