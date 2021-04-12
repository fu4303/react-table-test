import { Row, CellValue } from 'react-table';

export type Participant = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export interface ITableActions {
  row: Row<Participant>;
  dispatch: React.Dispatch<ParticipantTableAction>;
  state: ParticipantTableState;
}

export type ParticipantTableState = {
  participants: Participant[];
  status: string;
  currentRowId?: number;
  name?: string;
  email?: string;
  phone?: string;
};

export type ParticipantTableAction = {
  type: string;
  data?: any;
};

export interface IEditableCell {
  row?: Row<Participant>;
  value: CellValue;
  state: ParticipantTableState;
  dispatch: React.Dispatch<ParticipantTableAction>;
  field: string;
}
