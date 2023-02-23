import Home from './components/Home';
import React, { useState } from 'react';
import NavBar from './components/Navbar';
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Resturant from './components/Resturant';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {

const [token, setToken] = useState();

if(!token) {
    return <Login setToken={setToken} />
  }



return (
<div className='App'>
    {<Router>
        <NavBar></NavBar>
        <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route exact path="/home" element={<Home/>}></Route>
        <Route exact path="/resturant" element={<Resturant></Resturant>}> </Route>
        <Route exact path="/login" element={<Login/>}> </Route>
        <Route exact path="/signup" element={<Signup></Signup>}> </Route>

        </Routes>
        <Footer></Footer>
    </Router> 
    }
</div>
   
    
);

}

export default App;
