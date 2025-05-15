
import './App.css';
import Navbar from './components/navbar/navbar';
import {BrowerRouter,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowerRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<shop/>}/>
        <Route path='/mens' element = {<shopcategory category='mens'/>}/>
        <Route path='/womens' element = {<shopcategory category='womens'/>}/>
        <Route path='/kids' element = {<shopcategory category='kids'/>}/>
        <Route path='/product' element = {<product/>}>
        <Route path=':productid' element ={<product/>}/>
        </Route>
        <Route path='/login' element ={<loginsignup/>}/>
      </Routes>
      </BrowerRouter>
    </div>
  );
}

export default App;
