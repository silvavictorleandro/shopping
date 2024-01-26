import ImgCard from "../../img/imgTest.jpg";

import * as S from "./styles";

export default function ProductCard() {
  return (
    <S.Card>
      <S.Img src={ImgCard} />
      <S.Title>Mens Casual Premium Slim Fit T-Shirts</S.Title>
      <S.InfoContainer>
        <S.Rating>4.1</S.Rating>
        <S.Price>$ 22.30</S.Price>
      </S.InfoContainer>
      <S.Button>Adicionar ao carrinho</S.Button>
    </S.Card>
  );
}
