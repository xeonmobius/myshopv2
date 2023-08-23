import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
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
import Orderscreen from "./screens/Orderscreen";
import Profilescreen from "./screens/Profilescreen";
import AdminRoute from "./components/AdminRoute";
import OrderListscreen from "./screens/admin/OrderListscreen";
import ProductListscreen from "./screens/admin/ProductListscreen";
import ProductEditscreen from "./screens/admin/ProductEditscreen";
import UserListscreen from "./screens/admin/UserListscreen";
import UserEditscreen from "./screens/admin/UserEditscreen";

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
        <Route path="order/:id" element={<Orderscreen />} />
        <Route path="profile" element={<Profilescreen />} />
      </Route>
      <Route path="" element={<AdminRoute />}>
        <Route path="/admin/orderlist" element={<OrderListscreen />} />
        <Route path="/admin/productlist" element={<ProductListscreen />} />
        <Route path="/admin/product/:id/edit" element={<ProductEditscreen />} />
        <Route path="/admin/userlist" element={<UserListscreen />} />
        <Route path="/admin/user/:id/edit" element={<UserEditscreen />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
        <RouterProvider router={router} />
      </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
