import { useFormik } from 'formik'
import { useState } from 'react'
import InputMask from 'react-input-mask'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../../services/api'
import { RootReducer } from '../../../store'
import { addCard, checkoutSteps } from '../../../store/reducers/cart'
import { FormContainer, InputGroup, Row } from '../../../styles'
import { formatPrice, getTotalPrice } from '../../../utils'
import Button from '../../Button'
import Loader from '../../Loader'
import FinishOrder from '../FinishOrder'

const FormPayment = () => {
  const [showForm, setShowForm] = useState(true)
  const { items, userAddress, userCard } = useSelector(
    (state: RootReducer) => state.cart
  )
  const [purchase, { isSuccess, data, isLoading }] = usePurchaseMutation()
  const dispatch = useDispatch()
  const { card } = userCard.payment
  const form = useFormik({
    initialValues: {
      userName: card.name,
      cardNumber: card.number,
      CardCvv: '',
      cardMonth: card.expires.month,
      cardYear: card.expires.year
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(16, 'Digite o mínimo 16 caracteres')
        .required('O campo é obrigatório'),
      CardCvv: Yup.string()
        .min(3, 'Digite os 3 caracteres')
        .max(3, 'Máximo 3 caracteres')
        .required('O campo é obrigatório'),
      cardMonth: Yup.string()
        .min(2, 'Digite os 2 caracteres')
        .max(2, 'Máximo 2 caracteres')
        .required('O campo é obrigatório'),
      cardYear: Yup.string()
        .min(2, 'Digite os 2 caracteres')
        .max(2, 'Máximo 2 caracteres')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      dispatch(
        addCard({
          payment: {
            card: {
              name: values.userName,
              number: values.cardNumber,
              code: Number(values.CardCvv),
              expires: {
                month: Number(values.cardMonth),
                year: Number(values.cardYear)
              }
            }
          }
        })
      ),
        purchase({
          products: items.map((item) => ({
            id: item.id,
            price: item.preco
          })),
          delivery: userAddress.delivery,
          payment: {
            card: {
              name: values.userName,
              number: values.cardNumber,
              code: Number(values.CardCvv),
              expires: {
                month: Number(values.cardMonth),
                year: Number(values.cardYear)
              }
            }
          }
        }),
        setShowForm(false)
    }
  })

  const checkInputHasError = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    if (hasError) return { error: hasError, errorMessage: message }
    return null
  }

  const previousStep = () => {
    dispatch(checkoutSteps({ step: 'Delivery' }))
  }

  const returnOrder = () => {
    if (isLoading) {
      return <Loader color="#FFFFFF" />
    }

    if (isSuccess && data) {
      return <FinishOrder orderId={data.orderId} />
    }
  }

  return (
    <FormContainer>
      {returnOrder()}

      {showForm && (
        <>
          <h2>Pagamento - Valor a pagar {formatPrice(getTotalPrice(items))}</h2>
          <form onSubmit={form.handleSubmit}>
            <Row>
              <InputGroup>
                <label htmlFor="userName">Nome no cartão</label>
                <input
                  id="userName"
                  type="text"
                  name="userName"
                  value={form.values.userName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {
                    checkInputHasError('userName', form.errors.userName)
                      ?.errorMessage
                  }
                </small>
              </InputGroup>
            </Row>
            <Row marginTop="10px">
              <InputGroup>
                <label htmlFor="cardNumber">Número do cartão</label>
                <InputMask
                  id="cardNumber"
                  type="text"
                  name="cardNumber"
                  value={form.values.cardNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask={'9999 9999 9999 9999'}
                />
                <small>
                  {
                    checkInputHasError('cardNumber', form.errors.cardNumber)
                      ?.errorMessage
                  }
                </small>
              </InputGroup>
            </Row>
            <Row marginTop="10px">
              <InputGroup>
                <label htmlFor="CardCvv">CVV</label>
                <InputMask
                  id="CardCvv"
                  type="text"
                  name="CardCvv"
                  value={form.values.CardCvv}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask={'999'}
                />
                <small>
                  {
                    checkInputHasError('CardCvv', form.errors.CardCvv)
                      ?.errorMessage
                  }
                </small>
              </InputGroup>
            </Row>
            <Row marginTop="10px">
              <InputGroup>
                <label htmlFor="cardMonth">Mês de vencimento</label>
                <InputMask
                  id="cardMonth"
                  type="text"
                  name="cardMonth"
                  value={
                    form.values.cardMonth === 0 ? '' : form.values.cardMonth
                  }
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask={'99'}
                />
                <small>
                  {
                    checkInputHasError('cardMonth', form.errors.cardMonth)
                      ?.errorMessage
                  }
                </small>
              </InputGroup>
              <InputGroup>
                <label htmlFor="cardYear">Ano de vencimento</label>
                <InputMask
                  id="cardYear"
                  type="text"
                  name="cardYear"
                  value={form.values.cardYear === 0 ? '' : form.values.cardYear}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  mask={'99'}
                />
                <small>
                  {
                    checkInputHasError('cardYear', form.errors.cardYear)
                      ?.errorMessage
                  }
                </small>
              </InputGroup>
            </Row>
            <Row marginTop="24px">
              <Button
                type="submit"
                variant="secondary"
                title="Finalizar pagamento"
              >
                <>Finalizar pagamento</>
              </Button>
            </Row>
            <Row marginTop="8px">
              <Button
                type="button"
                variant="secondary"
                title="Voltar para a edição de endereço"
                onClick={previousStep}
              >
                <>Voltar para a edição de endereço</>
              </Button>
            </Row>
          </form>
        </>
      )}
    </FormContainer>
  )
}

export default FormPayment
