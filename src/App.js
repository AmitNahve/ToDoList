import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AddNewPage from './Pages/AddNewPage';
import NavBar from './Navigation/NavBar';


function App() {
 return (
  <div>
    <NavBar/>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/AddNew" element={<AddNewPage />}></Route>
    </Routes>
  </div>

 )
}

export default App;
