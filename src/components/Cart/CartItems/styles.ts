import styled from 'styled-components'
import { colors } from '../../../styles'

export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.redLight};
  padding: 8px;
  position: relative;
  &:not(:last-child) {
    margin-bottom: 16px;
  }

  .item__image {
    height: 80px;
    width: 80px;
    margin-right: 8px;
  }

  .item__content {
    width: 100%;
    h3 {
      color: ${colors.red};
      font-weight: bold;
      font-size: 18px;
      margin-bottom: 16px;
    }

    span {
      display: block;
      color: ${colors.red};
      font-size: 14px;
      margin-bottom: 16px;
    }

    .trash {
      height: 16px;
      width: 16px;
      float: right;
      cursor: pointer;
    }
  }
`

export const CartTotalPrice = styled.div`
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-itens: center;
  justify-content: space-between;
  color: ${colors.redLight};
  padding: 40px 0 16px 0;
  span {
    display: block;
  }
`
