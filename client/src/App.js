import Navbar from './components/Navbar'
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
