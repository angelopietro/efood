import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Cart from '../../components/Cart'
import Modal from '../../components/Modal'
import { useGetRestaurantByIdQuery } from '../../services/api'
import { CardContainer, CardImage, Container } from './styles'
import Loader from '../../components/Loader'

type MenuParams = {
  id: string
}

const Restaurante = () => {
  const { id } = useParams() as MenuParams
  const { data: detail } = useGetRestaurantByIdQuery(id)
  const [showModal, setShowModal] = useState(false)
  const [selectedFood, setSelectedFood] = useState<ProductMenu | null>(null)

  if (!detail) {
    return <Loader color="#E66767" />
  }

  const getDescription = (text: string) => {
    if (text.length > 195) {
      return text.slice(0, 192) + '...'
    }
    return text
  }

  return (
    <>
      <Banner picture={detail.capa} type={detail.tipo} title={detail.titulo} />
      <Container>
        {detail.cardapio.map((item: ProductMenu) => (
          <Card key={item.id}>
            <CardContainer>
              <CardImage image={item.foto} />
              <h2>{item?.nome}</h2>

              <p>{getDescription(item.descricao)}</p>

              <Button
                type="button"
                title="Ver mais sobre este item"
                variant="secondary"
                onClick={() => {
                  setSelectedFood(item)
                  setShowModal(true)
                }}
              >
                <>Ver mais sobre este item</>
              </Button>
              <Modal
                isVisible={showModal}
                menu={selectedFood}
                onClose={() => {
                  setSelectedFood(null)
                  setShowModal(false)
                }}
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
