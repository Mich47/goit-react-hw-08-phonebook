import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyled = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export const NavLinkStyled = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  &:hover,
  &:focus,
  &.active {
    @media (min-width: 900px) {
      color: yellow;
    }
  }
`;
