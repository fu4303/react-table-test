import styled from 'styled-components';

const Content = styled.div`
  padding: ${(props) => props.theme.spacing.baseSpace * 4}px 0;
  width: ${(props) => props.theme.spacing.baseSpace * 8 + props.theme.spacing.wrapWidth}px;
  margin: 0 auto;
`;

export default Content;
