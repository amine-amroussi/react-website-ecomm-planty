import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProductProvider } from "./context/product_context";
import { UserProvider } from "./context/user_context";
import { AlertProvider } from "./context/alert_context";
import { CartProvider } from "./context/cart_context";
import { OrderProvider } from "./context/order_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AlertProvider>
    <UserProvider>
      <ProductProvider>
        <CartProvider>
          <OrderProvider>
            <App />
          </OrderProvider>
        </CartProvider>
      </ProductProvider>
    </UserProvider>
  </AlertProvider>
);
