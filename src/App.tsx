import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Header } from "./components/Header/Header";
import { ProductList } from "./components/ProductList/ProductList";

import { GlobalStyles } from "./styles/GlobalStyles";

export default function App() {
  return (
    <Provider store={store}>
      <Header />
      <ProductList />
      <GlobalStyles />
    </Provider>
  );
}
