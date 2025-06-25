import './App.css'
import { Button } from './components/ui/button'
import Users from './Users'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
