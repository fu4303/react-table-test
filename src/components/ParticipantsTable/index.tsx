import * as React from 'react';
import { Column, Row } from 'react-table';
import { EditableCell, Table, TableActions } from './components';
import { ParticipantTableState, ParticipantTableAction, IEditableCell, Participant } from '../../constants/types';

const initialState: ParticipantTableState = {
  participants: [],
  status: 'idle',
  currentRowId: undefined,
  name: '',
  email: '',
  phone: '',
};

const ParticipantsTable = () => {
  const reducer = React.useCallback((state: ParticipantTableState, action: ParticipantTableAction) => {
    switch (action.type) {
      case 'getData': {
        return {
          ...state,
          participants: [
            {
              id: 3,
              name: 'Jaakko',
              email: 'jaakko@gmail.com',
              phone: '123',
            },
            {
              id: 5,
              name: 'Juhani',
              email: 'juhani@outlook.com',
              phone: '987',
            },
          ],
        };
      }
      case 'handleChange': {
        return {
          ...state,
          [action.data.field]: action.data.value,
        };
      }
      case 'cancel': {
        return {
          ...state,
          status: 'idle',
          currentRowId: undefined,
          name: '',
          email: '',
          phone: '',
        };
      }
      case 'editRow': {
        return {
          ...state,
          status: 'edit',
          currentRowId: action?.data?.id,
          name: action?.data?.name,
          email: action?.data?.email,
          phone: action?.data?.phone,
        };
      }
      case 'update': {
        const participants = state.participants.map((participant) => {
          if (participant.id === action?.data?.id) {
            return {
              id: participant.id,
              name: state.name ?? participant.name,
              email: state.email ?? participant.email,
              phone: state.phone ?? participant.phone,
            };
          }

          return participant;
        });

        return { ...state, participants, status: 'idle' };
      }
      case 'delete': {
        const participants = state.participants.filter((participant) => participant.id !== action?.data?.id);
        return { ...state, participants };
      }
      default: {
        return state;
      }
    }
  }, []);

  const [state, dispatch] = React.useReducer(reducer, initialState);

  const columns = React.useMemo(
    () =>
      [
        {
          Header: 'Name',
          accessor: 'name',
          Cell: ({ row, value }: Partial<IEditableCell>) => (
            <EditableCell row={row} value={value} state={state} dispatch={dispatch} field="name" />
          ),
        },
        {
          Header: 'E-mail address',
          accessor: 'email',
          Cell: ({ row, value }: Partial<IEditableCell>) => (
            <EditableCell row={row} value={value} state={state} dispatch={dispatch} field="email" />
          ),
        },
        {
          Header: 'Phone',
          accessor: 'phone',
          Cell: ({ row, value }: Partial<IEditableCell>) => (
            <EditableCell row={row} value={value} state={state} dispatch={dispatch} field="phone" />
          ),
        },
        {
          Header: () => null,
          id: 'actions',
          Cell: ({ row }: { row: Row<Participant> }) => <TableActions row={row} dispatch={dispatch} state={state} />,
        },
      ] as Column<Participant>[],
    [state.status, state.currentRowId],
  );

  React.useEffect(() => {
    dispatch({ type: 'getData' });
  }, []);

  return <Table data={state.participants} columns={columns} />;
};

export default ParticipantsTable;
