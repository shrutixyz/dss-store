import './index.css'
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Products from './components/Products';
import ProductDetail from './components/ProductDetail'
import Cart from './components/Cart';
import Customize from './components/Customize';
import AddProduct from './components/admin/AddProduct';
import ErrorPage from './components/ErrorPage'
import ViewProduct from './components/admin/ViewProduct'

function App() {
  return (
   
  
    <div className="App">

      
        <Router>
        <Switch>
          <Route exact path="/">
              <Home/>
          </Route>
          <Route exact path="/products">
              <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/customize">
            <Customize />
          </Route>
          <Route path="/admin/add-product">
            <AddProduct />
          </Route>
          <Route path="/admin/view-product">
            <ViewProduct />
          </Route>
          <Route path="error">
            <ErrorPage />
          </Route>

      </Switch>
          
        </Router>
     
      
     
        
    
    </div>
  );
}

export default App;
