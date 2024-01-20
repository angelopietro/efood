import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../../components/Tag/styles'

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 120px;
`
export const CardContainer = styled.div`
  background-color: ${colors.white};
  width: 472px;
  height: 398px;
  text-align: left;
  color: ${colors.red};
`
export const CardContainerImage = styled.div`
  position: relative;

  ${TagContainer} {
    margin-left: 8px;
  }
`
export const CardTagContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const CardImage = styled.div<PropsCard>`
  width: 100%;
  height: 217px;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
`
export const CardContentRestaurant = styled.div`
  border-width: 0 1px 1px 1px;
  border-style: solid;
  border-color: ${colors.red};
  padding: 10px;
  height: 181px;
  p {
    margin: 16px 0;
    font-size: 14px;
    line-height: 22px;
    color: ${colors.red};
  }
`
export const Title = styled.h2`
  font-size: 16px;
`
export const CardContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Rating = styled.span`
  display: flex;
  align-items: center;
`
export const RatingIcon = styled.img`
  width: 21px;
  height: 21px;
  margin-left: 10px;
`
