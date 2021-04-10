import { InputHTMLAttributes } from 'react';
import styled, { ThemeProps, DefaultTheme } from 'styled-components';

export interface IStyledInput extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
}

const StyledInput = styled.input<IStyledInput & ThemeProps<DefaultTheme>>`
  font-size: 16px;
  font-weight: 500;
  height: 40px;
  border-radius: 0;
  border-style: solid;
  border-width: 1px;
  border-color: #f1f1f1;
  padding: 0 ${(props) => props.theme.spacing.baseSpace * 2}px;
  color: ${(props) => props.theme.colors.text.dark};
  background-color: ${(props) => props.theme.colors.bg.light};
  width: ${(props) => (props.fullWidth ? '100%' : '')};

  &::placeholder {
    color: ${(props) => props.theme.colors.text.light};
  }

  &:focus {
    box-shadow: 0 0 0 2px white, 0 0 0 4px ${(props) => props.theme.colors.primary};
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
`;

export default StyledInput;
