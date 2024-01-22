import closeIcon from '../../assets/images/ico_close.svg'
import { Cardapio } from '../../pages/Home'
import * as S from '../../styles'
import { formatPrice } from '../../utils'
import Button from '../Button'
import {
  ModalBody,
  ModalClose,
  ModalContainer,
  ModalContent,
  ModalContentImage
} from './styles'

interface ModalState {
  isVisible: boolean
  cardapio: Cardapio | null
  onClose: () => void
}

const Modal = ({ isVisible, cardapio, onClose }: ModalState) => {
  if (!cardapio) return null

  const servePorcao = `Serve: ${cardapio.porcao !== '1 pessoa' ? 'de ' : ''} ${cardapio.porcao}`

  return (
    <ModalContainer isOpen={isVisible} key={cardapio.id}>
      <ModalContent>
        <ModalClose onClick={() => onClose()}>
          <img src={closeIcon} alt="Fechar modal" />
        </ModalClose>
        <ModalContentImage src={cardapio.foto} alt={cardapio.nome} />
        <ModalBody>
          <h3>{cardapio.nome}</h3>
          <p>{cardapio.descricao} </p>
          <span>{servePorcao}</span>
          <Button
            title="Adicionar ao carrinho"
            type="button"
            variant="secondary"
            onClick={() => onClose()}
          >
            <>Adicionar ao carrinho - {formatPrice(cardapio.preco)}</>
          </Button>
        </ModalBody>
      </ModalContent>
      <S.Overlay onClick={() => onClose()} />
    </ModalContainer>
  )
}

export default Modal
