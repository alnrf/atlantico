import moment from "moment";
import React from "react";
import * as S from "./countryCard.styled";

interface DataProps {
  data: any;
}

function CountryCard({ data }: DataProps) {
  return (
    <>
      {data.map((item: any) => (
        <S.Card>
          <S.Txt>{`Date: ${moment(item?.Date).format("DD/MM/YYYY")}`}</S.Txt>
          <S.Txt>{`Confirmed: ${
            item?.Confirmed ? item?.Confirmed : "-"
          }`}</S.Txt>
          <S.Txt>{`Recovered: ${
            item?.Recovered ? item?.Recovered : "-"
          }`}</S.Txt>
          <S.Txt>{`Deaths: ${item?.Deaths ? item?.Deaths : "-"}`}</S.Txt>
          <S.Txt>{`Active: ${item?.Active ? item?.Active : "-"}`}</S.Txt>
        </S.Card>
      ))}
    </>
  );
}

export default CountryCard;
