import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../../Input';
import { IEditableCell } from '../../../constants/types';

const ClickableText = styled.button`
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
  color: ${(props) => props.theme.colors.text.dark};
`;

const EditableCell = ({ row, value, state, dispatch, field }: IEditableCell) => {
  const [text, setText] = useState(value);

  const handleClick = () => {
    dispatch({
      type: 'editRow',
      data: {
        id: Number(row?.id),
        name: row?.original.name,
        email: row?.original.email,
        phone: row?.original.phone,
      },
    });
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
    dispatch({
      type: 'handleChange',
      data: {
        field,
        value: e.currentTarget.value,
      },
    });
  };

  if (state.status === 'edit' && state.currentRowId === Number(row?.id)) {
    return <Input value={text} onChange={handleChange} fullWidth />;
  }

  return <ClickableText onClick={handleClick}>{String(value)}</ClickableText>;
};

export default EditableCell;
