import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";

import Dashin from "./components/Dashin";
import Login from "./screen/Login/Login";

import Ambass from "./screen/Pages/Ambass/Ambass";
import Oerder from "./screen/Pages/Order/Oerder";
import Dorders from "./screen/Pages/Dorder/Dorders";
import Seller from "./screen/Pages/Seller/Seller";
import Breand from "./screen/Pages/Brand/Breand";
import Business from "./screen/Pages/Business/Business";
import Internship from "./screen/Pages/Internship/Intership";
import Paricipant from "./screen/Pages/Participant/Participant";
import Arrival from "./screen/Pages/Arrival/Arrival";
import Settings from "./screen/Pages/Settingss/Settings";
import Product from "./screen/Pages/Prduct/Product";
import Dashboard from "./screen/Pages/Dashboard/Dashbord";
import Category from "./screen/Pages/Category/Category";
import Transactions from "./screen/Pages/Transactions";
import ProductCategory from "./screen/Pages/ProductCategory/ProductCategory";
import Stores from "./screen/Pages/Stores/Stores";
import ChangePassword from "./screen/Pages/ChangePassword/ChangePassword";
import SellerRequests from "./screen/Pages/Seller/SellerRequests";
import EStock from "./screen/Pages/E_Stock/EStock";
import ERacks from "./screen/Pages/E-Racks/ERacks";
import Services from "./screen/Pages/Servicesx/Services";
import CreateStore from "./screen/Pages/CreateStore/CreateStore";
import AddSellerDetails from "./screen/Pages/Seller/AddSellerDetails";
import Packages from "./screen/Pages/Packages/Packages";
import MainStockRacks from "./screen/Pages/MainStock/MainStockRacks";
import ViewProduct from "./screen/Pages/ViewProduct/ViewProduct";
function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<Dashin />}>
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/product" element={<Product />} />

            <Route path="/transactions" element={<Transactions />} />

            <Route path="/ambass" element={<Ambass />} />
            <Route path="/order" element={<Oerder />} />

            <Route path="/demand/order" element={<Dorders />} />

            <Route path="/sellers" element={<Seller />} />
            <Route path="/sellers/:sellerId" element={<Seller />} />
            <Route path="/seller_requests" element={<SellerRequests />} />
            <Route path="/seller_details/:id" element={<AddSellerDetails />} />
            <Route path="/seller_details/:id/:serId" element={<AddSellerDetails />} />
            <Route path="/mainStockracks/:id" element={<MainStockRacks />} />
           
            <Route path="/brands" element={<Breand />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/stores" element={<Stores />} />
            <Route path="/create_store/:id" element={<CreateStore />} />

            <Route  path="/services/:id" element={<Services />} />
            <Route  path="/viewProduct/:id" element={<ViewProduct />} />


            <Route  path="/e_stock/:id" element={<EStock />} />
            {/* <Route  path="/e_stock/:id/:stockId" element={<EStock />} /> */}
           
            <Route  path="/e_racks/:id" element={<ERacks />} />

            <Route path="/business/opportunities" element={<Business />} />
            <Route path="/internship" element={<Internship />} />

            <Route path="/category" element={<Category />} />
            <Route path="/product_category" element={<ProductCategory />} />

            <Route path="/participant" element={<Paricipant />} />

            <Route path="//new/arrival" element={<Arrival />} />

            <Route path="/settings" element={<Settings />} />
            <Route path="/change_password" element={<ChangePassword />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
