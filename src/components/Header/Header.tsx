import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";

import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { login, logout } from "../../redux/User/userSlice";

export const Header: React.FC = () => {
  const { user } = useSelector(
    (rootReducer: RootReducer) => rootReducer.userReducer
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

  return (
    <S.Header>
      <S.Container>
        <S.Title>Shopping</S.Title>
        <S.ButtonsContainer>
          <S.AuthButton isLogged={isLogged} onClick={handleUserAuth}>
            {isLogged ? "Logout" : "Login"}
            {isLogged ? <FiLogOut /> : <FiLogIn />}
          </S.AuthButton>

          <S.CartButton>
            <FiShoppingCart />
          </S.CartButton>
        </S.ButtonsContainer>
      </S.Container>
    </S.Header>
  );
};
