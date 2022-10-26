import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicExample from "../components/NavBar/NavBar";
import App from "../screens/Home/App";
import ItemDetails from "../components/Home/ItemDetail/ItemDetails";

function Router() {
  return (
    <BrowserRouter>
      <BasicExample />
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/categoria/:categoria" element={<App />}></Route>
        <Route path="/ItemDetail/:idProducto" element={<ItemDetails />}></Route>
        <Route path="/categoria/:categoria/ItemDetail/:idProducto" element={<ItemDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
