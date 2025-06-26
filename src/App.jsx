import './App.css'
import { Button } from './components/ui/button'
import CreateUser from './crud/CreateUser'
import EditUser from './crud/EditUser'
import Navbar from './Navbar'
import Users from './Users'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/create' element={<CreateUser />} />
        <Route path='/edit/:id' element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
