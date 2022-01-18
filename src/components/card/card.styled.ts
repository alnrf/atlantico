import styled from "styled-components";

type colorProp = {
  color: string;
};

const handleColorType = (color: string) => {
  switch (color) {
    case "Recovered":
      return "#7FFF7F";
    case "Confirmed":
      return "#7F7FFF";
    case "Deaths":
      return "#FF7F7F";
    case "Active":
      return "#f1c40f";
      default:
      return "#FFFFFF";
  }
};
export const Card = styled.div<colorProp>`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  position: relative;
  align-items: center;
  border-radius: 6px;
  width: 200px;
  height: 100px;
  border: 1px solid ${({ color }) => handleColorType(color)};
  margin: 0 16px;

  @media screen and (max-width: 1030px) {
    margin: 4px 0;
  }
`;

export const Title = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 19px;
  color: #000000;
  text-align: center;
  margin: 8px 0;
`;

export const Value = styled.span`
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 27px;
  color: #000000;
  margin: 8px 0;
`;

export const ColorBar = styled.div<colorProp>`
  display: flex;
  flex-direction: row;
  height: 16px;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: ${({ color }) => handleColorType(color)};
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border: 1px solid ${({ color }) => handleColorType(color)};
`;
