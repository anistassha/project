import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Glavnaya from './Pages/Glavnaya'; 
import Marshrut from './Pages/Marshrut'; 
import Cart from './Pages/Cart'; 
import LoginSignup from './Pages/LoginSignup';
import Contacts from './Pages/Contacts';
import Zakaz from './Pages/Zakaz';
import Footer from './Components/Footer/Footer';
import History from './Components/History/History';
import CartRoutes from './Components/CartRoutes/CartRoutes';
  
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Glavnaya/>}/>
        <Route path='/marshrut' element={<Marshrut/>}>
          <Route path=':marshrutDate' element={<Marshrut/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/zakaz' element={<Zakaz/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/cartRoutes' element={<CartRoutes/>}/>
        <Route path='/history' element={<History/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;