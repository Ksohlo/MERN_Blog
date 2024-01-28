import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Project from "./pages/Project"
import SignUp from "./pages/SignUp"
import Nav from "./components/Nav"
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'


function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={ <Dashboard /> } />
        <Route path="/home" element={ <Home /> }   />
        <Route path="/about" element={ <About /> } />
        <Route path="/project" element={ <Project /> } />
        <Route path="/signup" element={ <SignUp /> } />
        <Route path="/signin" element={ <Signin/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
