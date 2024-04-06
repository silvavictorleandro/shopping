import styled from "styled-components";

interface ShowCartProps {
  showCart: boolean;
}

export const Main = styled.main`
  margin: 0 auto;
  padding-top: 3.75rem;
`;

export const Container = styled.div<ShowCartProps>`
  align-content: flex-start;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 3rem auto;
  max-width: 900px;

  @media (max-width: 1165px) {
    max-width: 550px;
  }

  @media (max-width: 930px) {
    max-width: 300px;
  }

  @media (max-width: 550px) {
    display: ${(props) => (props.showCart ? "none" : "")};
  }
`;
