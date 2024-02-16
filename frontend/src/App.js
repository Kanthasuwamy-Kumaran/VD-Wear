// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Body from './components/Body'
import Register from './components/Register'
import Login from './components/Login'
import { Route,Routes} from 'react-router-dom';
// import Navbarhome from './components/Navbar'
import Avatardemo from './components/Avatardemo';
// import Shopregister from './components/Shopregister';
import CompanyRegistration from './components/company registration ';
import Userprofile from './components/Userprofile';
import Admin1 from './components/Adminpage';

import Apps from './components/admin/Apps'


function App() {
  return (
    <>
    {/* <Navbarhome/> */}
    
    <Routes>
      <Route exact path="/" Component={Body}/>
      <Route exact path='/register' Component={Register}/>
      <Route exact path='/login' Component={Login}/> 
      <Route exact path='/avatardemo' Component={Avatardemo}/>
      {/* <Route exact path='/shopregister' Component={Shopregister}/> */}
      <Route exact path='/userprofile' Component={Userprofile}/>
      <Route exact path='/admin' Component={Apps}/>
      <Route exact path='/shopregister' Component={CompanyRegistration}/>
      <Route exact path='/user' Component={Admin1}/>
     
    </Routes>

    </>
  );
}

export default App;
