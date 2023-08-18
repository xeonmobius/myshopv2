import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Homescreen from "./screens/Homescreen";
import Productscreen from "./screens/Productscreen";
import CartScreen from "./screens/Cartscreen";
import Loginscreen from "./screens/Loginscreen";
import Registerscreen from "./screens/Registerscreen";
import Shippingscreen from "./screens/Shippingscreen";
import PrivateRoute from "./components/PrivateRoute";
import Paymentscreen from "./screens/Paymentscreen";
import PlaceOrderscreen from "./screens/PlaceOrderscreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Homescreen />} />
      <Route path="product/:id" element={<Productscreen />} />
      <Route path="cart" element={<CartScreen />} />
      <Route path="login" element={<Loginscreen />} />
      <Route path="register" element={<Registerscreen />} />
      <Route path="" element={<PrivateRoute />}>
        <Route path="shipping" element={<Shippingscreen />} />
        <Route path="payment" element={<Paymentscreen />} />
        <Route path="placeorder" element={<PlaceOrderscreen />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
