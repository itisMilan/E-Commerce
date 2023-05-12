
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Home from './pages/Home';
import ProductList from './pages/ProductList'
import {
  BrowserRouter,
  Routes,
  Route,Redirect
} from "react-router-dom";
// import { Redirect } from 'react-router';

const App = () => {
  const user = true;
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home></Home>}>
      
    </Route>
    <Route path="/products/:category" element={<ProductList></ProductList>}/>
   <Route path="/product/:id" element={<Product> </Product>}></Route>
   <Route path="/login" element={<Login/>}>
    {/* {user ? <Redirect to="/"/>:<Login/>} */}
   </Route>
   <Route path="/register" element={<Register/>}></Route>
   <Route path="/cart" element={<Cart> </Cart>}></Route>

   </Routes>
   </BrowserRouter> 
  );
};

export default App;
