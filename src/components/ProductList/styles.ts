import styled from "styled-components";

export const Main = styled.main`
  margin: 0 auto;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin: 3rem auto;
  max-width: 900px;

  @media (max-width: 1165px) {
    max-width: 550px;
  }

  @media (max-width: 930px) {
    max-width: 300px;
  }

  @media (max-width: 550px) {
    display: none;
  }
`;
