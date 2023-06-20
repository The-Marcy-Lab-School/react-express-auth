import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import UserContextProvider from "./contexts/CurrentUserContextProvider.jsx";
import ProductContextProvider from "./contexts/ProductProvider.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <ProductContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductContextProvider>
  </UserContextProvider>
);
