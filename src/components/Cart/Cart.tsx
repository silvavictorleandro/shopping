import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { TiDelete } from "react-icons/ti";
import * as S from "./styles";
import { removeProduct } from "../../redux/Cart/cartSlice";

interface CartProps {
  showCart: boolean;
}

export const Cart: React.FC<CartProps> = ({ showCart }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );

  const dispatch = useDispatch();

  return (
    <S.Container showCart={showCart}>
      <S.Title>Carrinho</S.Title>
      <S.ProductListContainer>
        {cart.map((product) => (
          <S.ProductContainer>
            <TiDelete
              onClick={() => {
                dispatch(removeProduct(product));
              }}
            />
            <S.ProductItemImage src={product.image} />
            <S.ProductItemTitle key={product.id}>
              {product.title}
            </S.ProductItemTitle>
            <S.ProductItemPrice>
              $ {product.price.toFixed(2)}
            </S.ProductItemPrice>
          </S.ProductContainer>
        ))}
      </S.ProductListContainer>
    </S.Container>
  );
};
