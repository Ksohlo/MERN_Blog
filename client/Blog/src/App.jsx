import About from "./pages/About"
import { BrowserRouter, Routes, Route} from react-router-dom
import Home from "./pages/Home"
import Project from "./pages/Project"
import SignUp from "./pages/SignUp"
import Signin from "./pages/signin"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={Home} path={'/'} />
        <Route element={About} path={'/about'} />
        <Route element={Project} path={'/project'} />
        <Route element={SignUp} path={'/signUp'} />
        <Route element={Signin} path={'/signin'} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
