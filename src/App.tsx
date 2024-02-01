import { Header } from "./components/Header/Header";
import { ProductCard } from "./components/ProductCard/ProductCard";
import { ProductList } from "./components/ProductList/ProductList";

import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <Header />

      <ProductList />

      <GlobalStyles />
    </>
  );
}

export default App;
