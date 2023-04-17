import ItemListContainer from "./components/itemListContainer/itemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ProductDetail from "./components/productDetail/productDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/404/404";
const App = () => {
  return(
    <div className = 'App'>
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/item/:itemId" element={<ProductDetail/>}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App