import styled, { createGlobalStyle } from 'styled-components'

type InputGroupProps = {
  maxWidth?: string
}

type RowProps = {
  marginTop?: string
}

export const colors = {
  body: '#FFF8F2',
  white: '#FFF',
  red: '#E66767',
  redLight: '#FFEBD9',
  error: '#FF9B9B'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '426px'
}

export const GlobalCss = createGlobalStyle`

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
 }

 body {
  background-color: ${colors.body};
  font-family: 'Roboto', sans-serif;

 }

 main {
  max-width: 1024px;
  width: 100%;
  margin: 80px auto 120px;
 }
`
export const ButtonAction = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: absolute;

  &:focus {
    outline: none;
    border: none;
  }
`
export const FormContainer = styled.div`
  h2 {
    font-size: 16px;
    color: ${colors.redLight};
    margin-bottom: 16px;
  }

  p.finish__order {
    line-height: 22px;
    font-size: 14px;
    color: ${colors.redLight};
    display: block;
  }
`
export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 8px;
    display: block;
    color: ${colors.redLight};
  }

  input {
    background-color: ${colors.redLight};
    border: none;
    height: 32px;
    padding: 0 8px;
    width: 100%;

    &:focus {
      outline: none;
    }

    &.has-error {
      background-color: ${colors.error};
    }
  }

  small {
    color: #900000;
    font-size: 12px;
  }
`
export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: 24px;
  margin-top: ${(props) => props.marginTop || '0'};
  align-items: flex-start;
`
