import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Modal from '../../components/Modal'
import { CardContainer, CardImage, Container } from './styles'
import Cart from '../../components/Cart'
import { Cardapio, RestauranteDetalhe } from '../Home'
import { useParams } from 'react-router-dom'

const Restaurante = () => {
  const { id } = useParams()
  const [detail, setDetail] = useState<RestauranteDetalhe>()
  const [showModal, setShowModal] = useState(false)
  const [selectedFood, setSelectedFood] = useState<Cardapio | null>(null)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setDetail(res))
  }, [id])

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
