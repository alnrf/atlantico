import styled from "styled-components";

type colorProp = {
 color: string
}

const handleColorType = (color: string) => {
    switch (color) {
      case "Recovered":
        return "#7FFF7F";
      case "Confirmed":
        return "#7F7FFF";
        case "Death":
        return "#FF7F7F";
     
    }
  };
export const Card = styled.div<colorProp>`
display: flex;
flex-direction: column;
background-color: #FFF;
position: relative;
align-items: center;
border-radius: 6px;
width: 200px;
border: 1px solid #f1f1f1;


`

export const Title = styled.span`
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 19px;
color: #000000;
text-align: center;
`;

export const Value = styled.span`
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 27px;
color: #000000;
`;

export const ColorBar = styled.div<colorProp>`
display: flex;
flex-direction: row;
height: 16px;
width: 100%;
position: absolute;
bottom: 0;
`;