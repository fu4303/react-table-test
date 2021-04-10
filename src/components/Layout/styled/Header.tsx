import styled from 'styled-components';

const Header = styled.header`
  background-color: ${(props) => props.theme.colors.bg.darker};
  display: flex;
  align-items: center;
  width: ${(props) => props.theme.spacing.baseSpace * 8 + props.theme.spacing.wrapWidth}px;
  margin: 0 auto;
`;

export default Header;
