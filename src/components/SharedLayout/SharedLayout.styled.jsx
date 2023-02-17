import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const NavLinkStyled = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  &:hover,
  &:focus,
  &.active {
    color: yellow;
  }
`;
