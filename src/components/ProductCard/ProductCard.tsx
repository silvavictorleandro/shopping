import { useDispatch, useSelector } from "react-redux";
import { Product } from "../ProductList/ProductList";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { RootReducer } from "../../redux/root-reducer";
import {
  addProduct,
  removeProduct,
  toggleCartVisibility,
} from "../../redux/Cart/cartSlice";
import * as S from "./styles";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { cart, showCart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );

  const isProductOnCart =
    cart.find((productOnCart) => productOnCart.id === product.id) !== undefined;

  const dispatch = useDispatch();

  function handleCartButton() {
    if (cart.length == 0 && showCart == false) {
      dispatch(toggleCartVisibility({}));
    }
    if (!isProductOnCart) {
      dispatch(addProduct(product));
    } else {
      dispatch(removeProduct(product));
    }
  }

  return (
    <S.Card>
      <S.Img src={product.image} alt={product.description} />
      <S.Title>{product.title}</S.Title>
      <S.InfoContainer>
        <S.Rating>
          {Array.from({ length: 5 }).map((_, index) =>
            index < Math.round(product.rating.rate) ? (
              <AiFillStar key={index} />
            ) : (
              <AiOutlineStar key={index} />
            )
          )}
          {` (${product.rating.rate})`}
        </S.Rating>
        <S.Price>$ {product.price.toFixed(2)}</S.Price>
      </S.InfoContainer>
      <S.Button onClick={handleCartButton} isProductOnCart={isProductOnCart}>
        {!isProductOnCart ? "Adicionar ao carrinho" : "Remover do carrinho"}
      </S.Button>
    </S.Card>
  );
};
