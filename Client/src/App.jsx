import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayOut from "./Layout/Layout";
import Home from "./Pages/home/Home";
import About from "./Pages/about/About";
import Profile from "./Pages/profile/Profile";
import SignIn from "./Pages/signIn/SignIn";
import SignUp from "./Pages/signup/SignUp";
import PrivateRouter from "./components/PrivateRouter/PrivateRouter";

function App() {
  return (
    <div>
      <BrowserRouter>
        <LayOut>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route element={<PrivateRouter />}>
              <Route path="/Profile" element={<Profile />} />
            </Route>
            <Route path="/Sign-in" element={<SignIn />} />
            <Route path="/Sign-up" element={<SignUp />} />
          </Routes>
        </LayOut>
      </BrowserRouter>
    </div>
  );
}

export default App;
