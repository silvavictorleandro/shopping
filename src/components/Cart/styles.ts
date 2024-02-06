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
  top: 0;
  transition: 0.5s;
  width: 250px;
`;

export const Title = styled.h2``;

export const ProductListContainer = styled.ul`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

export const ProductContainer = styled.div`
  align-items: center;
  border-bottom: solid 1px #d3d3d3;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  width: 180px;

  svg {
    cursor: pointer;
    position: absolute;
    right: 60px;
  }
`;

export const ProductItemImage = styled.img`
  height: auto;
  width: 50px;
`;

export const ProductItemTitle = styled.li`
  font-size: 0.9rem;
  list-style-type: none;
`;

export const ProductItemPrice = styled.strong`
  font-weight: 700;
`;
