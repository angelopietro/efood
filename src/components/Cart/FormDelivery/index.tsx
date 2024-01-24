import { useFormik } from 'formik'
import InputMask from 'react-input-mask'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { RootReducer } from '../../../store'
import { addAddress, checkoutSteps } from '../../../store/reducers/cart'
import { FormContainer, InputGroup, Row } from '../../../styles'
import Button from '../../Button'

const FormDelivery = () => {
  const { userAddress } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const { receiver, address } = userAddress.delivery
  const form = useFormik({
    initialValues: {
      userName: receiver,
      userAddress: address.description,
      userCity: address.city,
      userZipCode: address.zipCode,
      userAddressNumber: address.number || '',
      userComplement: address.complement
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      userAddress: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      userCity: Yup.string()
        .min(3, 'O nome da cidade precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      userZipCode: Yup.string()
        .min(10)
        .max(10)
        .required('O campo é obrigatório'),
      userAddressNumber: Yup.string()
        .min(1)
        .max(5)
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      dispatch(
        addAddress({
          delivery: {
            receiver: values.userName,
            address: {
              description: values.userAddress,
              city: values.userCity,
              zipCode: values.userZipCode,
              number: Number(values.userAddressNumber),
              complement: values.userComplement
            }
          }
        })
      )
      nextStep()
    }
  })

  const checkInputHasError = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    if (hasError) return { error: hasError, errorMessage: message }
    return null
  }

  const nextStep = () => {
    dispatch(checkoutSteps({ step: 'Payment' }))
  }

  const previousStep = () => {
    dispatch(checkoutSteps({ step: 'Cart' }))
  }

  return (
    <FormContainer>
      <h2>Entrega</h2>
      <form onSubmit={form.handleSubmit}>
        <Row>
          <InputGroup>
            <label htmlFor="userName">Quem irá receber</label>
            <input
              className={checkInputHasError('userName') ? 'has-error' : ''}
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
            <label htmlFor="userAddress">Endereço</label>
            <input
              className={checkInputHasError('userAddress') ? 'has-error' : ''}
              id="userAddress"
              type="text"
              name="userAddress"
              value={form.values.userAddress}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {
                checkInputHasError('userAddress', form.errors.userAddress)
                  ?.errorMessage
              }
            </small>
          </InputGroup>
        </Row>
        <Row marginTop="10px">
          <InputGroup>
            <label htmlFor="userCity">Cidade</label>
            <input
              className={checkInputHasError('userCity') ? 'has-error' : ''}
              id="userCity"
              type="text"
              name="userCity"
              value={form.values.userCity}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {
                checkInputHasError('userCity', form.errors.userCity)
                  ?.errorMessage
              }
            </small>
          </InputGroup>
        </Row>
        <Row marginTop="10px">
          <InputGroup>
            <label htmlFor="userZipCode">Cep</label>
            <InputMask
              className={checkInputHasError('userZipCode') ? 'has-error' : ''}
              id="userZipCode"
              type="text"
              name="userZipCode"
              value={form.values.userZipCode}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              mask="99.999-999"
            />
            <small>
              {
                checkInputHasError('userZipCode', form.errors.userZipCode)
                  ?.errorMessage
              }
            </small>
          </InputGroup>
          <InputGroup>
            <label htmlFor="userAddressNumber">Número</label>
            <input
              className={
                checkInputHasError(
                  'userAddressNumber',
                  form.errors.userAddressNumber
                )
                  ? 'has-error'
                  : ''
              }
              id="userAddressNumber"
              type="text"
              name="userAddressNumber"
              value={form.values.userAddressNumber}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {
                checkInputHasError(
                  'userAddressNumber',
                  form.errors.userAddressNumber
                )?.errorMessage
              }
            </small>
          </InputGroup>
        </Row>
        <Row marginTop="10px">
          <InputGroup>
            <label htmlFor="userComplement">Complemento (opcional)</label>
            <input
              id="userComplement"
              type="text"
              name="userComplement"
              value={form.values.userComplement}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </InputGroup>
        </Row>
        <Row marginTop="24px">
          <Button
            type="submit"
            variant="secondary"
            title="Continuar com o pagamento"
          >
            <>Continuar com o pagamento</>
          </Button>
        </Row>
        <Row marginTop="8px">
          <Button
            type="button"
            variant="secondary"
            title="Voltar para o carrinho"
            onClick={previousStep}
          >
            <>Voltar para o carrinho</>
          </Button>
        </Row>
      </form>
    </FormContainer>
  )
}

export default FormDelivery
