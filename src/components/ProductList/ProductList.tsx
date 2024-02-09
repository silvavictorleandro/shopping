import React, { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import * as S from "./styles";

export interface Product {
  id: number;
  image: string;
  title: string;
  rating: { rate: number; count: number };
  price: number;
  description: string;
  category: string;
}

export const ProductList: React.FC = () => {
  const [produtos, setProdutos] = useState<any[]>([]);

  const getProdutos = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProdutos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <S.Main>
      <S.Container>
        {produtos.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </S.Container>
    </S.Main>
  );
};
