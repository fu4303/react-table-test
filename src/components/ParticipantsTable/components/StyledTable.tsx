import styled from 'styled-components';

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

      &:first-child {
        border-bottom: ${(props) => props.theme.spacing.baseSpace}px solid ${(props) => props.theme.colors.bg.medium};
        height: 72px;

        th {
          padding: 0 ${(props) => props.theme.spacing.baseSpace * 2}px;
        }

        div {
          display: flex;
          justify-content: flex-end;
        }
      }
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

export default StyledTable;
