import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import Phone from './Components/Phone/Phone';
import Verification from './Components/Verification/Verification';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<Login />} path='/'/>
          <Route element={<Phone />} path='/phone'/>
          <Route element={<Verification />} path='/verify'/>
          <Route element={<LoggedIn />} path='/loggedin'/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function LoggedIn() {
  return (
    <div>Logged in</div>
  )
}

export default App;
