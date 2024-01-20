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
  redLight: '#FFEBD9'
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
// .content {
//   max-width: 1024px;
//   width: 100%;
//   margin: 0 auto;
//   padding-top: 5rem;
//   padding-bottom: 7.5rem;
//  }

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.8;
  position: absolute;
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
    color: ${colors.white};
    margin-bottom: 16px;
  }

  p.finish__order {
    line-height: 22px;
    font-size: 14px;
    color: ${colors.white};
    display: block;
  }
`
export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 8px;
    display: block;
    color: ${colors.white};
  }

  input {
    background-color: ${colors.white};
    border: none;
    height: 32px;
    padding: 0 8px;
    width: 100%;

    &:focus {
      outline: none;
    }

    &.error {
      border: 1px solid red;
    }
  }
`
export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: 24px;
  margin-top: ${(props) => props.marginTop || '0'};
  align-items: flex-end;
`
