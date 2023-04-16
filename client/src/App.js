import Navbar from './components/Navbar'
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Profile from './pages/Profile';
import ProtectedRoute from './pages/ProtectedRoute';
import Basket from './pages/Basket';
import Error404 from './pages/Error404';
import ProtectedAdmin from './pages/Admin/ProtectedAdmin';
import AdminHome from './pages/Admin/Home';
import Orders from './pages/Admin/Orders';
import AdminProducts from './pages/Admin/Products';
import AdminProductDetail from './pages/Admin/ProductDetail';
import NewProduct from './pages/Admin/Products/new';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div id="content">
          <Routes>
            <Route path="/" exact Component={Products} />
            <Route path="/product/:product_id" Component={ProductDetail} />
            <Route path="/signin" Component={Signin} />
            <Route path="/signup" Component={Signup} />
            <Route path="/basket" Component={Basket} />
            <Route element={<ProtectedRoute />}>
						  <Route path="/profile" element={<Profile />} />
					  </Route>
            <Route element={<ProtectedAdmin />}>
              <Route index path="/admin" element={<AdminHome />} />
						  <Route path="/admin/orders" element={<Orders/>} />
						  <Route path="/admin/products" element={<AdminProducts />} />
              <Route
							path="/admin/products/:product_id"
							element={<AdminProductDetail />}
						  />
              <Route path="/admin/products/new" element={<NewProduct />} />
					  </Route>
            <Route path="*" Component={Error404} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
