import { useFormik } from 'formik'
import Button from '../../Button'
import { FormContainer, InputGroup, Row } from '../../../styles'

interface CartSteps {
  proximoPasso: () => void
  passoAnterior: () => void
}

const FormPayment = ({ proximoPasso, passoAnterior }: CartSteps) => {
  const form = useFormik({
    initialValues: {
      nome: '',
      numero: '',
      cvv: '',
      mes: '',
      ano: ''
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2))
    }
  })

  return (
    <FormContainer>
      <h2>Pagamento - Valor a pagar R$ 190,90</h2>
      <form onSubmit={form.handleSubmit}>
        <Row>
          <InputGroup>
            <label htmlFor="nome">Nome no cartão</label>
            <input
              id="nome"
              type="text"
              name="nome"
              value={form.values.nome}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </InputGroup>
        </Row>
        <Row marginTop="10px">
          <InputGroup>
            <label htmlFor="numero">Número do cartão</label>
            <input
              id="numero"
              type="text"
              name="numero"
              value={form.values.numero}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </InputGroup>
        </Row>
        <Row marginTop="10px">
          <InputGroup>
            <label htmlFor="cvv">CVV</label>
            <input
              id="cvv"
              type="text"
              name="cvv"
              value={form.values.cvv}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </InputGroup>
        </Row>
        <Row marginTop="10px">
          <InputGroup>
            <label htmlFor="mes">Mês de vencimento</label>
            <input
              id="mes"
              type="text"
              name="mes"
              value={form.values.mes}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="ano">Ano de vencimento</label>
            <input
              id="ano"
              type="text"
              name="ano"
              value={form.values.ano}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </InputGroup>
        </Row>
        <Row marginTop="24px">
          <Button
            type="button"
            variant="secondary"
            title="Finalizar pagamento"
            onClick={proximoPasso}
          >
            Finalizar pagamento
          </Button>
        </Row>
        <Row marginTop="8px">
          <Button
            type="button"
            variant="secondary"
            title="Voltar para a edição de endereço"
            onClick={passoAnterior}
          >
            Voltar para a edição de endereço
          </Button>
        </Row>
      </form>
    </FormContainer>
  )
}

export default FormPayment
