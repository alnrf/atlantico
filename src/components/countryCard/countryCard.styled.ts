import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  max-width: 300px;
  background-color: #fff;
  border-radius: 6px;
  margin: 8px 8px;
  padding: 8px;
`;

export const RowWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

`;

export const Txt = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 19px;
  color: #000000;
  margin: 4px 0;
`;
