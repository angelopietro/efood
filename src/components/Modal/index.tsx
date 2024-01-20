import * as S from '../../styles'
import closeIcon from '../../assets/images/ico_close.svg'
import Button from '../Button'
import {
  ContainerImage,
  ModalBody,
  ModalClose,
  ModalContainer,
  ModalContent
} from './styles'

interface ModalState {
  titulo?: string
  closeModal?: () => void
  isVisible: boolean
  item: Food
  addToCart: () => void
}

const Modal = ({ item, isVisible, closeModal, addToCart }: ModalState) => {
  return (
    <ModalContainer isOpen={isVisible}>
      <ModalContent>
        <ModalClose>
          <img src={closeIcon} alt="Fechar modal" onClick={closeModal} />
        </ModalClose>
        <ContainerImage>
          <img src="https://placehold.co/280" alt="Pizza Marguerita" />
        </ContainerImage>
        <ModalBody>
          <h3>{item?.titulo}</h3>
          <p>
            A pizza Margherita é uma pizza clássica da culinária italiana,
            reconhecida por sua simplicidade e sabor inigualável. Ela é feita
            com uma base de massa fina e crocante, coberta com molho de tomate
            fresco, queijo mussarela de alta qualidade, manjericão fresco e
            azeite de oliva extra-virgem. A combinação de sabores é perfeita,
            com o molho de tomate suculento e ligeiramente ácido, o queijo
            derretido e cremoso e as folhas de manjericão frescas, que adicionam
            um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que
            agrada a todos os paladares e é uma ótima opção para qualquer
            ocasião.
          </p>
          <span>Serve: de 2 a 3 pessoas</span>
          <Button
            title="Adicionar ao carrinho"
            type="button"
            variant="secondary"
            onClick={addToCart}
          >
            Adicionar ao carrinho - R$ 60,90
          </Button>
        </ModalBody>
      </ModalContent>
      <S.Overlay onClick={closeModal} />
    </ModalContainer>
  )
}

export default Modal
