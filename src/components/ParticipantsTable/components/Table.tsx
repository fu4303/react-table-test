import { useTable, useSortBy, UseTableOptions } from 'react-table';
import styled from 'styled-components';
import { ReactComponent as DownwardIcon } from '../../../constants/icons/Downward.svg';
import { ReactComponent as UpwardIcon } from '../../../constants/icons/Upward.svg';
import { Participant } from '../../../constants/types';

const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0;
  background-color: ${(props) => props.theme.colors.white};

  thead {
    color: ${(props) => props.theme.colors.text.medium};
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;

    tr {
      height: 48px;
    }
  }

  tbody {
    color: ${(props) => props.theme.colors.text.dark};
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;

    tr {
      height: 72px;
    }
  }

  tr {
    &:last-child {
      td {
        border-bottom: 0;
      }
    }
  }

  th,
  td {
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
    padding: 0 ${(props) => props.theme.spacing.baseSpace * 3}px;
    text-align: left;
    vertical-align: middle;
  }

  th {
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
    color: ${(props) => props.theme.colors.text.medium};
    font-weight: 500;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.colors.text.dark};
    }

    div {
      display: flex;
      align-items: center;
      svg {
        margin-left: ${(props) => props.theme.spacing.baseSpace}px;
        fill: ${(props) => props.theme.colors.text.medium};
      }
    }
  }
`;

const getSortedIcon = (isSortedDesc: boolean | undefined) =>
  isSortedDesc ? <DownwardIcon width="14" /> : <UpwardIcon width="14" />;

const Table = ({ columns, data }: UseTableOptions<Participant>) => {
  const { getTableProps, getTableBodyProps, rows, prepareRow, headerGroups } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
  );

  return (
    <StyledTable {...getTableProps()}>
      <thead>
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
