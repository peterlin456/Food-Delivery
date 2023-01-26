import NavBar from "./Navbar";
import Iconbar from "./Iconbar";
import BackGround from "./background";
import "../styles/home.css";
import Footer from "./Footer";
function Home() {
  return (
    <html>
    <head></head>
    <body>
    <div class = 'home'>
   <NavBar></NavBar>
   {/* <Iconbar></Iconbar> */}
   <BackGround></BackGround>
   <Footer></Footer>
   </div>
   </body>
   </html>
  );
}

export default Home;
