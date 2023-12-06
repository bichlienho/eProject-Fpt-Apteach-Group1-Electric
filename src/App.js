import React, { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./Pages/Category";
import Brand from "./Pages/Brand";
import Header from "./Component/Header";
import Menu from "./Component/Menu";
import Footer from "./Component/Footer";
import Detail from "./Pages/Detail";
import Cart from "./Pages/Cart";
import Contact from './Pages/Contact';
import Termsofservice from './Pages/temsofservice';
import Privacy from './Pages/Privacy';
import Login from "./Pages/Login";
function App() {
  //add cart
  const [cartItems, setCartItems] = useState([]);
  const handleAdd = (product) => {
    const ProductExits = cartItems.find((item) => item.id === product.id);
    if (ProductExits) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExits, quantity: ProductExits.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    alert("Add cart Success");
  };

  const deleteCart = (GFGCourse) => {
    const updatedCart = cartItems.filter((item) => item.id !== GFGCourse.id);
    setCartItems(updatedCart);
    alert("Delete cart success!");
  };

  return (
    <div>
      <BrowserRouter>
        <Header number={cartItems.length} />
        <Menu />

        <Routes>
          <Route path="/" element={<Home handleAdd={handleAdd} />} />
          <Route
            path="/category"
            element={<Category handleAdd={handleAdd} />}
          />
          <Route
            path="/category/:id"
            element={<Category handleAdd={handleAdd} />}
          />
          <Route
            path="/product/:id"
            element={<Brand handleAdd={handleAdd} />}
          />
          <Route path="/detail/:id" element={<Detail />} />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} deleteCart={deleteCart} />}
          />
          <Route path='/contact' element={<Contact />} />
          <Route path='/term' element={<Termsofservice />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
