import { useDispatch } from 'react-redux'
import closeIcon from '../../assets/images/ico_close.svg'
import { add, open } from '../../store/reducers/cart'
import { formatPrice } from '../../utils'
import Button from '../Button'
import {
  ModalBody,
  ModalClose,
  ModalContainer,
  ModalContent,
  ModalContentImage,
  Overlay
} from './styles'

interface ModalState {
  isVisible: boolean
  menu: ProductMenu | null
  onClose: () => void
}

const Modal = ({ isVisible, menu, onClose }: ModalState) => {
  const dispatch = useDispatch()

  if (!menu) return null

  const addToCart = () => {
    dispatch(add(menu))
    dispatch(open())
    onClose()
  }

  const servePorcao = `Serve: ${menu.porcao !== '1 pessoa' ? 'de ' : ''} ${menu.porcao}`

  return (
    <ModalContainer isOpen={isVisible} key={menu.id}>
      <ModalContent>
        <ModalClose onClick={() => onClose()}>
          <img src={closeIcon} alt="Fechar modal" />
        </ModalClose>
        <ModalContentImage src={menu.foto} alt={menu.nome} />
        <ModalBody>
          <h3>{menu.nome}</h3>
          <p>{menu.descricao} </p>
          <span>{servePorcao}</span>
          <Button
            title="Adicionar ao carrinho"
            type="button"
            variant="secondary"
            onClick={() => addToCart()}
          >
            <>Adicionar ao carrinho - {formatPrice(menu.preco)}</>
          </Button>
        </ModalBody>
      </ModalContent>
      <Overlay onClick={() => onClose()} />
    </ModalContainer>
  )
}

export default Modal
