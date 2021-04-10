import * as React from 'react';
import StyledInput, { IStyledInput } from './styled/StyledInput';

const Input = React.forwardRef<HTMLInputElement, IStyledInput>((props, ref) => <StyledInput ref={ref} {...props} />);

export default Input;
