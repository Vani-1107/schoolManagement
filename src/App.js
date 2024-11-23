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
import Unit from './pages/Unit';
import PurchaseList from './pages/Purchase';
import Sales from './pages/Sales';
import Issues from './pages/Issue';
import Admission from './pages/Admission';
import OnlineAdmission from './pages/OnlineAdmission';
import MultiAdmission from './pages/MultiAdmission';
import MultiImport from './pages/MultiImport';
import AdCategory from './pages/AdmissionCategory';
import StudentList from './pages/StudentList';
import StudentDeactivate from './pages/StudentDeactivate';

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
        <Route path='/unit' element={<Unit/>}/>
        <Route path='/purchase' element={<PurchaseList/>}/>
        <Route path='/sales' element={<Sales/>}/>
        <Route path='/issues' element={<Issues/>}/>
        <Route path='/admission' element={<Admission/>}/>
        <Route path='/onlineadmission' element={<OnlineAdmission/>}/>
        <Route path='/multiadmission' element={<MultiAdmission/>}/>
        <Route path='/multiimport' element={<MultiImport/>}/>
        <Route path='/adcategory' element={<AdCategory/>}/>
        <Route path='/studentlist' element={<StudentList/>}/>
        <Route path='/studentdeactivate' element={<StudentDeactivate/>}/>
      </Routes>
    </div> 
  );
}

export default App;