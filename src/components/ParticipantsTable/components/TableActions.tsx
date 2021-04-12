import styled from 'styled-components';
import Button from '../../Button';
import { ITableActions } from '../../../constants/types';
import { ReactComponent as EditIcon } from '../../../constants/icons/Edit.svg';
import { ReactComponent as TrashIcon } from '../../../constants/icons/Trash.svg';

const RowActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

  button {
    border-radius: 50%;
    height: 48px;
    width: 48px;
    padding: 0;
    background-color: transparent;
    border: 0;
    display: flex;
    justify-content: center;

    &:first-child {
      margin-right: ${(props) => props.theme.spacing.baseSpace * 2}px;
    }

    svg {
      fill: ${(props) => props.theme.colors.text.light};
    }
  }
`;

const EditActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

  button:first-child {
    margin-right: ${(props) => props.theme.spacing.baseSpace}px;
  }
`;

const TableActions = ({ row, dispatch, state }: ITableActions) => {
  const { status } = state;
  if (status === 'edit') {
    return (
      <EditActions>
        <Button type="button" variant="secondary" onClick={() => dispatch({ type: 'cancel' })}>
          Cancel
        </Button>
        <Button
          type="button"
          variant="primary"
          onClick={() => dispatch({ type: 'update', data: { id: row?.original.id } })}
        >
          Save
        </Button>
      </EditActions>
    );
  }

  return (
    <RowActions>
      <Button
        type="button"
        aria-label="edit row"
        onClick={() => dispatch({ type: 'editRow', data: { id: Number(row.id) } })}
      >
        <EditIcon width={24} height={24} />
      </Button>
      <Button
        type="button"
        aria-label="delete row"
        onClick={() => dispatch({ type: 'delete', data: { id: row.original.id } })}
      >
        <TrashIcon width={24} height={24} />
      </Button>
    </RowActions>
  );
};

export default TableActions;
