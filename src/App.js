import './App.css';
import Navbar  from './components/Navbar';
import Home from './pages/Home';
// import Contact from './pages/Contact'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Authentication from './pages/Authentication';
import MenuPage from './pages/MenuPage';
import BrandShow from './Brands/BrandShow';
import Contact from './pages/Contact';



function App() {

 
  return (
    <div className='App'>
      <Router>
          <Navbar/>
          <Routes>
            
              <Route path='/' exact element={<Home  authorized={true} />}></Route>
              <Route path='/product/:brand' exact element={<BrandShow />}></Route>
              <Route path='/Contact'  element={<Contact/>}></Route>
              <Route path='/Login' exact element={<Authentication/>}></Route>
              <Route path='/MenuItems/:name' exact element={<MenuPage/>}></Route>
            
            
          </Routes>
          <Footer/>
     </Router>
      
    </div>
  );
}

export default App;
