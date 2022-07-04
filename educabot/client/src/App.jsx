import './App.scss';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { Home, Login, User } from './components/index'

function checkSession(){ 
  if(localStorage.getItem('auth') !== 'true' ) return false
  return true
}

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={ checkSession() ? <Home/> : <Navigate to='/login' /> } />
          <Route path='/login' element={ checkSession() ? <Navigate to='/' /> : <Login/> } />
          <Route path='/account' element={ checkSession() ? <User/> : <Navigate to='/login' /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
