
import  NavItems  from './components/NavItems';
import './App.css';
import { Outlet } from 'react-router-dom';


function App() {
 

  return (
    <>
    <NavItems/>
    <Outlet/>
    </>
  );
}

export default App
