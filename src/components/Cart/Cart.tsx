import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { TiDelete } from "react-icons/ti";
import * as S from "./styles";
import { removeProduct } from "../../redux/Cart/cartSlice";

export const Cart: React.FC = () => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );

  const { showCart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );

  const dispatch = useDispatch();

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

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
      <S.TotalPrice totalPrice={totalPrice}>
        {totalPrice != 0
          ? `Total: $ ${totalPrice.toFixed(2)}`
          : "Seu carrinho está vazio!"}
      </S.TotalPrice>
    </S.Container>
  );
};
