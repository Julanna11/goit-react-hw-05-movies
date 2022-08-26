import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  padding-bottom: 10px;
`;

export const Box = styled.div`
  padding-left: 15px;
`;

export const AditionalContainer = styled.div`
  border-top: 1.5px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1.5px solid rgba(0, 0, 0, 0.2);
`;

export const ButtonBack = styled(Link)`
  display: flex;
  align-items: center;
  width: 120px;
  padding: 3px 10px;
  margin: 5px 5px;
  background-color: #fafbfc;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0,
    rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  box-sizing: border-box;
  color: #24292e;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-decoration: none;
`;

export const Span = styled.span`
  margin-left: 10px;
`;

export const CastLink = styled(Link)`
  color: black;
  padding: 7px 15px;
  text-align: center;
  outline: none;
  /* text-decoration: none; */
  display: inline-block;
`;
