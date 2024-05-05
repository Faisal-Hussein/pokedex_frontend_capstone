import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Container from 'react-bootstrap/Container'
import Landing from "./components/Landing"
import Header from "./components/Header"
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Pokedex from './pages/Pokedex'



export default function App() {
  return (
    <Container fluid className='app'>
      <Header />
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/register' element={<RegisterPage />}/>
        <Route path='/pokedex' element={<Pokedex />}/>
      </Routes>
      {/* <LoginForm /> */}
      {/* <RegisterForm /> */}
      {/* <NavBar /> */}
    </Container>
  )
}