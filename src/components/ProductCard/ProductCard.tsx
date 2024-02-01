import { Product } from "../ProductList/ProductList";

import * as S from "./styles";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <S.Card>
      <S.Img src={product.image} />
      <S.Title>{product.title}</S.Title>
      <S.InfoContainer>
        <S.Rating>{product.rating.rate}</S.Rating>
        <S.Price>$ {product.price}</S.Price>
      </S.InfoContainer>
      <S.Button>Adicionar ao carrinho</S.Button>
    </S.Card>
  );
};
