import { useDispatch } from 'react-redux'
import { checkoutSteps, close, resetOrder } from '../../../store/reducers/cart'
import { FormContainer, Row } from '../../../styles'
import Button from '../../Button'
import { useEffect } from 'react'

interface Order {
  orderId: string
}

const FinishOrder = ({ orderId }: Order) => {
  const dispatch = useDispatch()

  const finishOrder = () => {
    dispatch(close())
    dispatch(checkoutSteps({ step: 'Cart' }))
  }

  useEffect(() => {
    if (orderId) {
      dispatch(resetOrder())
    }
  }, [orderId, dispatch])
  return (
    <FormContainer>
      <h2>Pedido realizado - {orderId}</h2>
      <p className="finish__order">
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
      </p>
      <br />
      <p className="finish__order">
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.
      </p>
      <br />
      <p className="finish__order">
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </p>
      <br />
      <p className="finish__order">
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </p>
      <Row marginTop="24px">
        <Button
          type="button"
          variant="secondary"
          title="Concluir"
          onClick={finishOrder}
        >
          <>Concluir</>
        </Button>
      </Row>
    </FormContainer>
  )
}

export default FinishOrder
