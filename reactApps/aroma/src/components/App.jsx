/** @format */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../pages/Layout';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Blog from '../pages/Blog'
import BlogDetail from '../pages/BlogDetail'
import Shop from '../pages/Shop'
import ProductDetail from '../pages/ProductDetail'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup/>} />
          <Route path='blog' element={<Blog/>} />
          <Route path='blog/detail' element={<BlogDetail/>} />
          <Route path='shop' element={<Shop/>} />
          <Route path='product/detail' element={<ProductDetail/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
