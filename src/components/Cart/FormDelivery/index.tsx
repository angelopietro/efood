import { useFormik } from 'formik'
import Button from '../../Button'
import { FormContainer, InputGroup, Row } from '../../../styles'

interface CartSteps {
  proximoPasso: () => void
  passoAnterior: () => void
}

const FormDelivery = ({ proximoPasso, passoAnterior }: CartSteps) => {
  const form = useFormik({
    initialValues: {
      nome: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: ''
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2))
    }
  })

  return (
    <FormContainer>
      <h2>Entrega</h2>
      <form onSubmit={form.handleSubmit}>
        <Row>
          <InputGroup>
            <label htmlFor="nome">Quem irá receber</label>
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
            <label htmlFor="endereco">Endereço</label>
            <input
              id="endereco"
              type="text"
              name="endereco"
              value={form.values.endereco}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </InputGroup>
        </Row>
        <Row marginTop="10px">
          <InputGroup>
            <label htmlFor="cidade">Cidade</label>
            <input
              id="cidade"
              type="text"
              name="cidade"
              value={form.values.cidade}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </InputGroup>
        </Row>
        <Row marginTop="10px">
          <InputGroup>
            <label htmlFor="cep">CEP</label>
            <input
              id="cep"
              type="text"
              name="cep"
              value={form.values.cep}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="numero">Número</label>
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
            <label htmlFor="complemento">Complemento (opcional)</label>
            <input
              id="complemento"
              type="text"
              name="complemento"
              value={form.values.complemento}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </InputGroup>
        </Row>
        <Row marginTop="24px">
          <Button
            type="button"
            variant="secondary"
            title="Continuar com o pagamento"
            onClick={proximoPasso}
          >
            Continuar com o pagamento
          </Button>
        </Row>
        <Row marginTop="8px">
          <Button
            type="button"
            variant="secondary"
            title="Voltar para o carrinho"
            onClick={passoAnterior}
          >
            Voltar para o carrinho
          </Button>
        </Row>
      </form>
    </FormContainer>
  )
}

export default FormDelivery
