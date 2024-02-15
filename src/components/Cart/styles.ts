import styled from "styled-components";

interface ShowCartProps {
  showCart: boolean;
}

interface TotalPriceProps {
  totalPrice: number;
}

export const Container = styled.aside<ShowCartProps>`
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);
  display: ${(props) => (props.showCart ? "block" : "none")};
  height: 100vh;
  overflow-y: auto;
  padding: 2rem 2rem;
  position: sticky;
  right: 0;
  top: 0;
  width: 250px;

  @media (max-width: 550px) {
    align-items: center;
    display: ${(props) => (props.showCart ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
  }
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
    margin-left: 80px;
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

export const TotalPrice = styled.strong<TotalPriceProps>`
  font-weight: ${(props) => (props.totalPrice != 0 ? "700" : "500")};
  font-size: 1.2rem;
`;
