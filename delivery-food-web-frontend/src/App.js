import Home from './components/Home';
import NavBar from './components/Navbar';
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Resturant from './components/Resturant';
import Footer from './components/Footer';
import Login from './components/login';
import Signup from './components/signup';

function App() {


return (
<div className='App'>
    {<Router>
        <NavBar></NavBar>
        <Routes>
        <Route exact path="/" element={<Home/>}></Route>
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
