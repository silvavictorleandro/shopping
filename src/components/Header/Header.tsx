import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";

import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { login, logout } from "../../redux/User/userSlice";
import { toggleCartVisibility } from "../../redux/Cart/cartSlice";

export const Header: React.FC = () => {
  const { user } = useSelector(
    (rootReducer: RootReducer) => rootReducer.userReducer
  );

  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );

  const isLogged = user !== null;

  const dispatch = useDispatch();

  function handleUserAuth() {
    if (user === null) {
      dispatch(
        login({
          name: "Victor Silva",
          email: "victor@email.com",
        })
      );
    } else {
      dispatch(logout({}));
    }
  }

  function handleShowCart() {
    dispatch(toggleCartVisibility({}));
  }

  return (
    <S.Header>
      <S.Container>
        <S.Title>Shopping</S.Title>
        <S.ButtonsContainer>
          <S.AuthButton isLogged={isLogged} onClick={handleUserAuth}>
            {isLogged ? "Logout" : "Login"}
            {isLogged ? <FiLogOut /> : <FiLogIn />}
          </S.AuthButton>

          <S.CartButton onClick={handleShowCart}>
            <FiShoppingCart /> {cart.length == 0 ? "" : `${cart.length}`}
          </S.CartButton>
        </S.ButtonsContainer>
      </S.Container>
    </S.Header>
  );
};
