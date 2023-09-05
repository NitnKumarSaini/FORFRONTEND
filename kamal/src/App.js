import { Route,  Routes } from 'react-router-dom';
import './App.css';
import Signup from './LocalStoragesingup/localprectic/Signup';
import Login from './LocalStoragesingup/localprectic/Login';
import Allpots from './LocalStoragesingup/localprectic/Allpots';
import Props from './Props';
// import Signup from './LocalStoragesingup/Signup';
// import Login from './LocalStoragesingup/Login';
// import Allpost from './LocalStoragesingup/Allpost';




// import Navbar2 from './components/Newfile/Navbar2';
// import Product from './components/Newfile/Product';
// import COMPONENT1 from './firstproject/Component_1';
// import Footer from './firstproject/Footer';
// import Cartpage from './firstproject/Cartpage';
function App() {
  return (
    <>

{/* justprecticeLocal:-------- */}
{/* <Routes>
<Route path='/' element={<Signup/>}></Route>
<Route path='/Login' element={<Login/>}></Route>
<Route path='/Allpost' element={<Allpots/>}></Route>

</Routes> */}


<Props  name="prince" age={21} />




{/* <Navbar2/>
    <COMPONENT1/>
    < Product/>
  <Footer/> */}
     


     {/* for  localstorage pages_-------------- */}
        <Routes>
        {/* <Route exect path='/' element={ <Signup/>}></Route> 
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/allpost' element={<Allpost/>}></Route> */}

      {/* <Route exect path='/' element={<App/>}></Route> */}
      {/* <Route path='/cartt' element={<Cartpage/>}/> */}
    </Routes>
    

    
 
    </>
  );
}

export default App;
