import * as React from 'react';
import { useTable, useSortBy, UseTableOptions } from 'react-table';
import * as z from 'zod';
import faker from 'faker';
import { ReactComponent as DownwardIcon } from '../../../constants/icons/Downward.svg';
import { ReactComponent as UpwardIcon } from '../../../constants/icons/Upward.svg';
import { Participant, ITable } from '../../../constants/types';
import Input from '../../Input';
import Button from '../../Button';
import StyledTable from './StyledTable';

const newParticipantValidator = z.object({
  name: z.string().min(5),
  email: z.string().email(),
  phone: z.string().min(5),
});

const getSortedIcon = (isSortedDesc: boolean | undefined) =>
  isSortedDesc ? <DownwardIcon width="14" /> : <UpwardIcon width="14" />;

const Table = ({ columns, data, dispatch }: ITable & UseTableOptions<Participant>) => {
  const { getTableProps, getTableBodyProps, rows, prepareRow, headerGroups } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
  );

  const [newParticipant, setNewParticipant] = React.useState({
    name: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = React.useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewParticipant({ ...newParticipant, [e.target.id]: e.target.value });

  const hasError = (field: string) => errors.some((fieldError) => fieldError === field);

  const createRecord = () => {
    try {
      const validated = newParticipantValidator.parse(newParticipant);
      dispatch({ type: 'create', data: { ...validated, id: faker.datatype.uuid() } });
      setNewParticipant({ name: '', email: '', phone: '' });
      setErrors([]);
    } catch (error) {
      setErrors(Object.keys(error.formErrors.fieldErrors));
    }
  };

  return (
    <StyledTable {...getTableProps()}>
      <thead>
        {/* TODO: Refactor this to a new component and use a form instead */}
        <tr>
          <th>
            <Input
              id="name"
              fullWidth
              value={newParticipant.name}
              placeholder="Name"
              onChange={handleChange}
              invalid={hasError('name')}
            />
          </th>
          <th>
            <Input
              id="email"
              fullWidth
              value={newParticipant.email}
              placeholder="E-mail address"
              onChange={handleChange}
              invalid={hasError('email')}
            />
          </th>
          <th>
            <Input
              id="phone"
              fullWidth
              value={newParticipant.phone}
              placeholder="Phone"
              onChange={handleChange}
              invalid={hasError('phone')}
            />
          </th>
          <th>
            <div>
              <Button onClick={createRecord}>Add new</Button>
            </div>
          </th>
        </tr>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                <div>
                  {column.render('Header')}
                  {column.isSorted ? getSortedIcon(column.isSortedDesc) : null}
                </div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

export default Table;
