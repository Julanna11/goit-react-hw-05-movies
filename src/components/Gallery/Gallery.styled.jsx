import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieGallery = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 0;
  padding: 20px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const MovieGalleryItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 10px;
`;

export const LinkMovie = styled(Link)`
  text-decoration: none;
  padding: 5px;
  font-size: 15px;
  font-weight: 700;
  color: black;
`;
