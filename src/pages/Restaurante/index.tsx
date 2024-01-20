import { useState } from 'react'
import Banner from '../../components/Banner'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Modal from '../../components/Modal'
import { CardContainer, CardImage, Container } from './styles'
import Cart from '../../components/Cart'

const Restaurante = () => {
  const cardapio = [
    {
      id: 1,
      titulo: 'Pizza Marguerita',
      descricao:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
      id: 2,
      titulo: 'Pizza Quadro Queijos',
      descricao:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
      id: 3,
      titulo: 'Pizza Palmito',
      descricao:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
      id: 4,
      titulo: 'Pizza Manjericão 2',
      descricao:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    }
  ]

  const [openModal, setOpenModal] = useState({
    isVisible: false,
    item: {}
  })

  function addToCart(item: Food) {
    setOpenModal({
      isVisible: false,
      item: {}
    })

    console.log(item)
  }

  return (
    <>
      <Banner />
      <Container>
        {cardapio.map((item) => (
          <Card key={item.id}>
            <CardContainer>
              <CardImage image="https://placehold.co/304x167" />
              <h2>{item?.titulo}</h2>

              <p>{item.descricao}</p>

              <Button
                type="button"
                title="Ver mais sobre este item"
                variant="secondary"
                onClick={() => setOpenModal({ isVisible: true, item: item })}
              >
                Ver mais sobre este item
              </Button>
              <Modal
                isVisible={openModal.isVisible}
                item={openModal.item}
                closeModal={() =>
                  setOpenModal({
                    isVisible: false,
                    item: {}
                  })
                }
                addToCart={() => addToCart(openModal.item)}
              />
            </CardContainer>
          </Card>
        ))}
      </Container>

      <Cart />
    </>
  )
}

export default Restaurante
