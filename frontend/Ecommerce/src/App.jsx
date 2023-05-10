
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Home from './pages/Home';
import ProductList from './pages/ProductList'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home></Home>}>
      
    </Route>
   <Route path="/product/:id" element={<Product> </Product>}></Route>
   <Route path="/login" element={<Login/>}></Route>
   <Route path="/register" element={<Register/>}></Route>
   <Route path="/cart" element={<Cart> </Cart>}></Route>

    <Route path="/products/:category" element={<ProductList></ProductList>}/>
   </Routes>
   </BrowserRouter> 
  );
};

export default App;
