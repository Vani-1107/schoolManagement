import React from 'react';
import {Routes, Route} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Navbar from "./component/Navbar";
import Sidebar from "./component/SideBar";
import Product from './pages/Product';

function App() {
  return (
    <div>
       <Navbar />
       <Sidebar />
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path="/product-list" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;