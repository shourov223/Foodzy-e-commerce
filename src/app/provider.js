"use client";

import { Provider } from "react-redux";
import { store } from "../store/store";
import ProductProvider from "@/context/productContext";

export function Providers({ children }) {
  return (
    <Provider store={store}>
      <ProductProvider>{children}</ProductProvider>
    </Provider>
  );
}
