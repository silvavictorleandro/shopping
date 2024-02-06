import styled from "styled-components";

interface AuthButtonProps {
  isLogged: boolean;
}
export const Header = styled.header`
  background-color: #3b3b58;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 60px;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 768px;
`;

export const Title = styled.h1`
  color: white;
  font-size: 1.8rem;
  font-weight: 500;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const AuthButton = styled.button<AuthButtonProps>`
  align-items: center;
  background-color: ${(props) => (props.isLogged ? "red" : "green")};
  border: none;
  border-radius: 5px;
  color: white;
  display: flex;
  font-weight: 500;
  gap: 0.3rem;
  height: 30px;
  padding: 0 1rem;
`;

export const CartButton = styled.button`
  align-items: center;
  background-color: #bc7c9c;
  border: none;
  border-radius: 5px;
  color: white;
  display: flex;
  gap: 0.3rem;
  font-weight: 500;
  height: 30px;
  padding: 0 1rem;
`;
