import { BounceLoader } from 'react-spinners'

import { Container } from './styles'

interface Props {
  color: string
}
const Loader = ({ color }: Props) => (
  <Container>
    <BounceLoader color={color} />
  </Container>
)

export default Loader
