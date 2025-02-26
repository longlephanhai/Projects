import { Outlet } from 'react-router'
import './App.css'
import Footer from './layout/Footer'
import Header from './layout/Header'

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  )
}

export default App
