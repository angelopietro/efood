import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
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
  width: 100%;
  max-width: 1024px;
  padding: 2rem;
  display: flex;
  position: relative;
  z-index: 1;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 90%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 90%;
    flex-direction: column;
  }
`
export const ModalContentImage = styled.img`
  width: 100%;
  max-width: 280px;
  object-fit: cover;
  object-position: center;
  @media (max-width: ${breakpoints.tablet}) {
    margin: auto;
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
`

export const ModalBody = styled.div`
  color: #fff;
  margin-left: 20px;
  display: grid;
  font-size: 14px;

  h3 {
    font-size: 18px;
    font-weight: 700;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    padding-bottom: 1rem;
  }

  ${ButtonContainer} {
    width: 218px;
    height: 24px;
    margin-top: 20px;
    padding: 0;

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    text-align: center;
    margin-left: 0;
    margin-top: 20px;
  }
`
