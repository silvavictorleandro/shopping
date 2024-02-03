import * as S from "./styles";

interface CartProps {
  showCart: boolean;
}

export const Cart: React.FC<CartProps> = ({ showCart }) => {
  return (
    <S.Container showCart={showCart}>
      <S.Title>Carrinho</S.Title>
      <S.ProductContainer>
        <S.ProductItem>Mens Casual</S.ProductItem>
      </S.ProductContainer>
    </S.Container>
  );
};
