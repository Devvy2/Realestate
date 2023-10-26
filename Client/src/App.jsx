import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from "./Pages/About"
import Profile from "./Pages/Profile"
import SignIn from './Pages/SignIn'
import SignOut from './Pages/SignOut'
import LayOut from './Layout/Layout'

function App() {

  return (
    <div>
      <BrowserRouter>
      <LayOut>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Sign-in" element={<SignIn />} />
          <Route path="/Sign-out" element={<SignOut />} />
        </Routes>
        </LayOut>
      </BrowserRouter>
    </div>
  )
}

export default App
