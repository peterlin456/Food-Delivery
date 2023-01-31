import axios from 'axios';
import { useState } from 'react';
import Home from './components/Home';
import NavBar from './components/Navbar';
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Resturant from './components/Resturant';
import Footer from './components/Footer';
function App() {


return (
<div className='App'>
    {<Router>
        <NavBar></NavBar>
        <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/resturant" element={<Resturant></Resturant>}> </Route>
        </Routes>
        <Footer></Footer>
    </Router> 
    }
</div>
   
    
);

}

export default App;
