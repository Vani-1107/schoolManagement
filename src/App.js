import React from 'react';
import {Routes, Route} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Navbar from "./component/Navbar";
import Sidebar from "./component/SideBar";
import Product from './pages/Product';
import Category from './pages/Category';
import SubscriptionPage from './pages/Subscription';
import CustomDomain from './pages/Custom';
import Store from './pages/Store';
import Supplier from './pages/Supplier';
import TwoFactorAuthPage from './pages/TwoFactor';
import TwoFASetting from './pages/TwoFASettings';

function App() {
  return (
    <div>
       <Navbar />
       <Sidebar />
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path="/product-list" element={<Product />} />
        <Route path="/category" element={<Category />} />
        <Route path="/subscription" element={<SubscriptionPage/>}/>
        <Route path="/custom" element={<CustomDomain/>}/>
        <Route path='/store' element={<Store/>}/>
        <Route path='/supplier' element={<Supplier/>}/>
        <Route path='/twofactor' element={<TwoFactorAuthPage/>}/>
        <Route path='/twofactorsettings' element={<TwoFASetting/>}/>
      </Routes>
    </div>
  );
}

export default App;