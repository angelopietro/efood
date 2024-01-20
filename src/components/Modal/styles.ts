import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

type ModalContainerProps = {
  isOpen: boolean
}

export const ModalContainer = styled.div<ModalContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.isOpen === true ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
`

export const ModalContent = styled.div`
  background-color: ${colors.red};
  width: 64rem;
  height: 21.5rem;
  padding: 2rem;
  display: flex;
  position: relative;
  z-index: 1;

  img {
    width: 17.5rem;
    height: 17.5rem;
    object-fit: cover;
  }
`
export const ContainerImage = styled.div`
  max-width: 280px;
  img {
    width: 280px;
    height: 280px;
  }
`

export const ModalClose = styled.button`
  border: none;
  background: transparent;
  top: 0.5rem;
  right: 0.5rem;
  position: absolute;
  cursor: pointer;
  width: 48px;
  height: 48px;

  img {
    width: 1rem;
    height: 1rem;
  }
`

export const ModalBody = styled.div`
  color: #fff;
  margin-left: 1.4rem;
  display: grid;

  h3 {
    font-size: 1.125rem;
    font-weight: 900;
  }

  p {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.375rem;
    padding-bottom: 1rem;
  }

  ${ButtonContainer} {
    width: 14.625rem;
    padding: 0;
  }
`
