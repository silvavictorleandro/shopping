import styled from "styled-components";

interface ShowCartProps {
  showCart: boolean;
}

export const Container = styled.aside<ShowCartProps>`
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);
  height: 100vh;
  padding: 2rem 2rem;
  position: fixed;
  right: ${(props) => (props.showCart ? "0" : "-265px")};
  transition: 0.5s;
  width: 250px;
`;

export const Title = styled.h2``;
