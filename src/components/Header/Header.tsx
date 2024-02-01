import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";

import * as S from "./styles";

export const Header: React.FC = () => {
  return (
    <S.Header>
      <S.Container>
        <S.Title>Shopping</S.Title>
        <S.ButtonsContainer>
          <S.LoginButton>
            Login
            <FiLogIn />
          </S.LoginButton>
          <S.CartButton>
            <FiShoppingCart />
          </S.CartButton>
        </S.ButtonsContainer>
      </S.Container>
    </S.Header>
  );
};
