import imagemEstrela from '../../assets/images/ico_estrela.svg'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Loader from '../../components/Loader'
import Tag from '../../components/Tag'
import { useGetRestaurantsQuery } from '../../services/api'
import {
  CardContainer,
  CardContainerImage,
  CardContentHeader,
  CardContentRestaurant,
  CardImage,
  CardTagContainer,
  Container,
  Rating,
  RatingIcon,
  Title
} from './styles'

const Home = () => {
  const { data: restaurantes } = useGetRestaurantsQuery()

  if (!restaurantes) {
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
      <Container>
        {restaurantes.map((item) => (
          <Card key={item.id}>
            <CardContainer>
              <CardContainerImage>
                <CardImage image={item.capa} />
                <CardTagContainer>
                  {item.destacado && <Tag>Destaque da semana</Tag>}
                  <Tag transform="capitalize">{item.tipo}</Tag>
                </CardTagContainer>
              </CardContainerImage>

              <CardContentRestaurant>
                <CardContentHeader>
                  <Title>{item.titulo}</Title>
                  <Rating>
                    <Title>{item.avaliacao}</Title>
                    <RatingIcon
                      src={imagemEstrela}
                      alt={`Avaliação ${item.avaliacao}`}
                    />
                  </Rating>
                </CardContentHeader>

                <p>{getDescription(item.descricao)}</p>

                <Button
                  type="link"
                  variant="primary"
                  to={'/restaurante/' + item.id}
                  title="Saiba mais"
                >
                  <>Saiba mais</>
                </Button>
              </CardContentRestaurant>
            </CardContainer>
          </Card>
        ))}
      </Container>
    </>
  )
}

export default Home
