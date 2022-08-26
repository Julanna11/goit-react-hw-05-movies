import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const SiteNav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
`;

export const Link = styled(NavLink)`
  color: white;
  display: inline-block;
  margin-left: 15px;
  text-decoration: none;
  cursor: pointer;
  font-weight: 800;
  font-size: 20px;
  &.active {
    color: rgb(105, 28, 237);
  }
`;
