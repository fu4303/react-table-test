import * as React from 'react';
import { Column, Row } from 'react-table';
import { ParticipantTableState, ParticipantTableAction, Participant, IEditableCell } from '../../../constants/types';
import EditableCell from '../components/EditableCell';
import TableActions from '../components/TableActions';

export function getColumns(state: ParticipantTableState, dispatch: React.Dispatch<ParticipantTableAction>) {
  const columns: Column<Participant>[] = [
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
  ];

  return columns;
}

export function participantsTableReducer(state: ParticipantTableState, action: ParticipantTableAction) {
  switch (action.type) {
    case 'getData': {
      return {
        ...state,
        participants: action.data,
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
    case 'create': {
      const { name, email, phone, id } = action.data;
      const participants: Participant[] = [
        ...state.participants,
        {
          id,
          name,
          email,
          phone,
        },
      ];
      return { ...state, participants };
    }
    default: {
      return state;
    }
  }
}
