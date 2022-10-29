
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Dashboard from './Pages/Dashboard/Dashboard';
import Header from './Pages/Shared/Header/Header';
import SideBar from './Pages/SideBar/SideBar';
import Login from './Pages/User/Login/Login';
import Registration from './Pages/User/Registration/Registration';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <SideBar>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/registration" element={<Registration/>} />
          </Routes>
        </SideBar>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
