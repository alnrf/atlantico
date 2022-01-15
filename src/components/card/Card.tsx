import React from "react";
import * as S from "./card.styled";

interface Props {
  value: number;
  title: string;
  type: string;
}

function Card({ value, title, type }: Props) {
  return (
    <>
      <S.Card color={type}>
        <S.Value>{value}</S.Value>
        <S.Title>{title}</S.Title>
      </S.Card>
    </>
  );
}

export default Card;
