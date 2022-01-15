import React from "react";
import Card from "../../components/card/Card";
import * as S from "./home.styled";

function Home() {
  return (
    <>
      <S.Main>
        <S.Container>
          <S.Box>
            <Card value={2} title="Casos Confirmados" type="Confirmed"></Card>
          </S.Box>
          <S.Box>Selecione um País</S.Box>
        </S.Container>
      </S.Main>
    </>
  );
}

export default Home;
