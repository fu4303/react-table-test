import React, { AriaAttributes } from 'react';
import StyledButton, { IStyledButton } from './styled/StyledButton';

const Button: React.FunctionComponent<IStyledButton & React.RefAttributes<HTMLButtonElement>> = React.forwardRef<
  HTMLButtonElement,
  IStyledButton
>((props, ref) => <StyledButton ref={ref} {...props} />);

export default Button as React.FunctionComponent<
  IStyledButton & React.RefAttributes<HTMLButtonElement> & AriaAttributes & React.ComponentProps<'button'>
>;
