import './App.css'
import { Routes, Route } from "react-router-dom"
import { Navbar } from './Components/Navbar'
import { Home } from './Components/Home'
import { Login } from './Components/Login'
import { Logout } from './Components/Logout'
import { Orders } from './Components/Orders'
import { NewOrder } from './Components/NewOrder'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}> 
          
          </Route>

          <Route path="login" element={<Login/>}>
              
          </Route>

          <Route path="logout" element={<Logout/>}>
              
          </Route>

          <Route path="orders" element={<Orders/>}>
              
          </Route>

          <Route path="new_order" element={<NewOrder/>}>
              
          </Route>
      </Routes>
    </div>
  )
}

export default App