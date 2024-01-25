import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";

import * as S from "./styles";

export default function Header() {
  return (
    <S.Header>
      <S.Container>
        <S.Title>Shopping</S.Title>
        <S.ContainerButtons>
          <S.LoginButton>
            Login
            <FiLogIn />
          </S.LoginButton>
          <S.CartButton>
            <FiShoppingCart />
          </S.CartButton>
        </S.ContainerButtons>
      </S.Container>
    </S.Header>
  );
}
