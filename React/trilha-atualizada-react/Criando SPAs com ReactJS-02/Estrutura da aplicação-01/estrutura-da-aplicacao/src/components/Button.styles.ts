import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'red',
  secondary: 'green',
  danger: 'skyblue',
  success: 'orange',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  cursor: pointer;
  color: ${(props) => props.theme.white};
  border: 0;
  margin-left: 8px;
  border-radius: 4px;

  /* ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `
  }} */

  background: ${(props) => props.theme['green-500']};
`
