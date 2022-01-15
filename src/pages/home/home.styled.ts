import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 24px;
  width: 100%;
  height: 100px;
  justify-content: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: rgba(255,255,255,0.5);
  border-radius: 10px;
  margin: 0 8px;
  padding: 16px;
`;
