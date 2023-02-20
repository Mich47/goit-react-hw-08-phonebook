import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
