
import  NavItems  from './components/NavItems';
import './App.css';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
 

  return (
    <>
    <NavItems/>
    <div className='min-vh-100'>
    <Outlet/>

    </div>
    <Footer/>
    </>
  );
}

export default App
