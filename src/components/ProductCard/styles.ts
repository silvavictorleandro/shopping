import styled from "styled-components";

interface ButtonProps {
  isProductOnCart: boolean;
}

export const Card = styled.article`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 1.2rem;
  width: 300px;

  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  object-fit: contain;
  height: 400px;
  width: 250px;
`;

export const Title = styled.h2`
  font-size: 1rem;
  font-weight: 400;
`;

export const InfoContainer = styled.div`
  margin: 0.5rem;
  width: 100%;

  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const Rating = styled.span`
  font-size: 0.7rem;

  svg {
    font-size: 0.7rem;
  }
`;

export const Price = styled.strong``;

export const Button = styled.button<ButtonProps>`
  background-color: #bc7c9c;
  opacity: ${(props) => (props.isProductOnCart ? "0.5" : "none")};
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 0.8rem;
  height: 40px;
  padding: 0 1.5rem;
  width: 100%;
`;
