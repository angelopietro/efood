import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Cart from '../../components/Cart'
import Modal from '../../components/Modal'
import { useGetRestaurantByIdQuery } from '../../services/api'
import { Cardapio } from '../Home'
import { CardContainer, CardImage, Container } from './styles'

const Restaurante = () => {
  const { id } = useParams()
  const { data: detail, isLoading } = useGetRestaurantByIdQuery(id!)
  const [showModal, setShowModal] = useState(false)
  const [selectedFood, setSelectedFood] = useState<Cardapio | null>(null)

  if (!detail) {
    return <>Carregando...</>
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 195) {
      return descricao.slice(0, 192) + '...'
    }
    return descricao
  }

  return (
    <>
      <Banner picture={detail.capa} type={detail.tipo} title={detail.titulo} />
      <Container>
        {detail.cardapio.map((item: Cardapio) => (
          <Card key={item.id}>
            <CardContainer>
              <CardImage image={item.foto} />
              <h2>{item?.nome}</h2>

              <p>{getDescricao(item.descricao)}</p>

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
                cardapio={selectedFood}
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
