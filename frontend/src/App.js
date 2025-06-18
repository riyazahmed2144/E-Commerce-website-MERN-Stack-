
import './App.css';
import Navbar from './components/navbar/navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Shop from './pages/shop';
import Shopcategory from './pages/shopcategory';
import Product from './pages/product';
import Loginsignup from './pages/loginsignup';
import Footer from './components/footer/footer';
import Mens_banner from './components/assets/male.jpg'
import Womens_banner from './components/assets/female.jpg'
import Kids_banner from './components/assets/kid.jpg'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Shop/>}/>
        <Route path='/mens' element = {<Shopcategory banner= {Mens_banner}category='mens'/>}/>
        <Route path='/womens' element = {<Shopcategory banner={Womens_banner} category='womens'/>}/>
        <Route path='/kids' element = {<Shopcategory banner={Kids_banner}category='kids'/>}/>
        <Route path='/product' element = {<Product/>}>
        <Route path=':productid' element ={<Product/>}/>
        </Route>
        <Route path='/login' element ={<Loginsignup/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
