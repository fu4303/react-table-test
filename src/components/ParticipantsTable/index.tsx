import * as React from 'react';
import styled from 'styled-components';
import { Table } from './components';
import { ParticipantTableState } from '../../constants/types';
import fakeData from '../../utils/fakeData';
import { participantsTableReducer, getColumns } from './utils';

const initialState: ParticipantTableState = {
  participants: [],
  status: 'idle',
  currentRowId: undefined,
  name: '',
  email: '',
  phone: '',
};

const Title = styled.h1`
  color: ${(props) => props.theme.colors.text.medium};
  font-weight: 600;
  font-size: 24px;
  line-height: 2.4;
  margin: ${(props) => props.theme.spacing.baseSpace * 2.5}px 0;
`;

const ParticipantsTable = () => {
  const reducer = React.useCallback(participantsTableReducer, []);
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const columns = React.useMemo(() => getColumns(state, dispatch), [
    state.status,
    state.currentRowId,
    state.participants,
  ]);

  React.useEffect(() => {
    const data = fakeData();
    dispatch({ type: 'getData', data });
  }, []);

  return (
    <main>
      <Title>List of participants</Title>
      <Table data={state.participants} columns={columns} dispatch={dispatch} />
    </main>
  );
};

export default ParticipantsTable;
