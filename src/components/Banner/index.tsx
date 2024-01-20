import bannerImage from '../../assets/images/capa.jpeg'
import { Container } from './styles'

export type PropsBanner = {
  image: string
}

const Banner = () => {
  return (
    <>
      <Container image={bannerImage}>
        <div className="container">
          <h2>Italiana</h2>
          <h3>La Dolce Vita Trattoria</h3>
        </div>
      </Container>
    </>
  )
}

export default Banner
