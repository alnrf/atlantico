import styled from "styled-components";
import { Icon } from "@chakra-ui/react";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  align-items: center;
  padding: 32px 0;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const CardWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 1030px) {
    flex-direction: column;
  }
`;

export const CardWrapResult = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 1030px) {
    flex-direction: column;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  margin: 16px 8px;
  padding: 16px;
  width: 50%;

  @media screen and (max-width: 1366px) {
    width: 90%;
  }
`;

export const BoxCountry = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  margin: 16px 8px;
  padding: 16px;
  width: 50%;
  @media screen and (max-width: 1366px) {
    width: 90%;
  }
`;

export const MainTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 35px;
  color: #000000;
  margin: 0 0 24px 0;
`;

export const Spinner = styled.div`
  margin-bottom: 18px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-flow: column;
`;

export const Error = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  color: red;
  margin: 0 0 16px 0;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  @media screen and (max-width: 1030px) {
    width: 80%;
  }
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin: 8px 0;
  @media screen and (max-width: 1030px) {
    flex-direction: column;
  }
`;

export const SearchByDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const SearchByInterval = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  text-align: left;
  border-color: #f5f5f5;
  input {
    border: 1px solid "#d3d1ce";
    width: 100%;
    border-radius: 6px;
    align-content: left;
    &[type^="date"] {
      padding: 8px;
      color: "#d3d1ce";
    }
  }
`;

export const RowWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 1030px) {
    padding: 8px 0;
  }
`;

export const WrapCountry = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 1030px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const WrapByDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 1030px) {
    flex-direction: column;
  }
`;

export const ColWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 24px;
  width: 100%;
  @media screen and (max-width: 1030px) {
    align-items: start;
  }
`;
export const RowWrapCountry = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
  width: 100%;

`;

export const Label = styled.span`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 19px;
  color: #000000;
  margin: 0 0 16px 0;
`;

export const Text = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 19px;
  color: #000000;
`;

export const Alert = styled.span`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  color: red;
`;

export const IconSearch = styled(Icon)`
  margin: 0 0 0 8px;
  font-size: 24px;
`;

export const ByDayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ByIntervalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const CountryInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 24px 0;

`;

export const FlagContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: auto;
`;

export const CountryName = styled.span`
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 35px;
  color: #000000;
  
`;

export const UpdateTitle = styled.span`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 37px;
  color: #000000;
  
`;
export const Updatevalue = styled.span`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  color: red;
  margin: 0 0 0 8px;

  @media screen and (max-width: 1030px) {
    margin: 0;
  }
`;

export const SearchButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 42px;
  padding: 8px;
  border-radius: 6px;
  background-color: #95a5a6;
  margin: 0 0 0 16px;
  &:hover {
    background-color: #7f8c8d;
  }
`;

export const SearchButtonTxt = styled.span`
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 23px;
  color: #2c3e50;
`;

export const RowCards = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 280px;
  overflow-x: scroll;
`;
