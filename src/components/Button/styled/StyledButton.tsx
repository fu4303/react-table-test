import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { darken } from 'polished';

export interface IStyledButton {
  variant?: 'primary' | 'secondary' | 'default';
}

const getVariantColors = (props: IStyledButton & ThemeProps<DefaultTheme>) => {
  const { variant, theme } = props;
  switch (variant) {
    case 'primary': {
      return css`
        border-color: ${theme.colors.primary};
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};

        &:hover {
          background-color: ${darken(0.05, theme.colors.primary)};
          border-color: ${darken(0.05, theme.colors.primary)};
        }
      `;
    }
    case 'secondary': {
      return css`
        border-color: ${theme.colors.border};
        background-color: ${theme.colors.bg.dark};
        color: ${theme.colors.primary};

        &:hover {
          background-color: ${darken(0.05, theme.colors.bg.dark)};
          border-color: ${darken(0.05, theme.colors.border)};
        }
      `;
    }
    default: {
      return css`
        border-color: ${theme.colors.border};
        background-color: ${theme.colors.bg.dark};
        color: ${theme.colors.text.medium};

        &:hover {
          background-color: ${darken(0.05, theme.colors.bg.dark)};
          border-color: ${darken(0.05, theme.colors.border)};
        }
      `;
    }
  }
};

const StyledButton = styled.button`
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  border-style: solid;
  border-width: 1px;
  font-weight: 500;
  padding: 0 ${(props) => props.theme.spacing.baseSpace * 2.5}px;
  transition: border 0.15s ease-in-out, background-color 0.15s ease-in-out, color 0.15s ease-in-out;

  &:active,
  &[aria-pressed='true'] {
    transition: none;
    opacity: 0.85;
  }

  &:focus {
    box-shadow: 0 0 0 2px white, 0 0 0 4px ${(props) => props.theme.colors.primary};
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  ${(props) => getVariantColors(props)};
`;

export default StyledButton;
