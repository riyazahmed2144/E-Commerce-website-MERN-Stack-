
import './App.css';
import Navbar from './components/navbar/navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Shop from './pages/shop';
import Shopcategory from './pages/shopcategory';
import Product from './pages/product';
import Loginsignup from './pages/loginsignup';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Shop/>}/>
        <Route path='/mens' element = {<Shopcategory category='mens'/>}/>
        <Route path='/womens' element = {<Shopcategory category='womens'/>}/>
        <Route path='/kids' element = {<Shopcategory category='kids'/>}/>
        <Route path='/product' element = {<Product/>}>
        <Route path=':productid' element ={<Product/>}/>
        </Route>
        <Route path='/login' element ={<Loginsignup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
