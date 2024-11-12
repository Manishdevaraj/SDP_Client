import { Route, Routes } from "react-router-dom"
import LandingPage from "./Pages/LandingPage"
import VolLogin from "./Components/Login"
import OrgSignup from "./Components/Signup"
import VolSignup from "./Components/Volunteers/Signup"
import OrgLogin from "./Components/Organisation/OrgLogin"
import TestPage from "./Pages/TestPage"
import Layout from "./Components/Layout"
import AuthPage from "./Pages/AuthPage"
import { UseContextProvoider } from "./Services/DbContext"
import ProtectedRoute from "./Components/ProtectedRoute"
import PageNotFound from "./Pages/PageNotFound"




function App() {

  return (
    <>
    <UseContextProvoider>
          
                <Routes>
                  <Route path="/" element={<ProtectedRoute/>} />
                  <Route path="/auth" element={<AuthPage />} />
                  <Route path="/test" element={<TestPage/>}/>
                  <Route path="/*"  element={<PageNotFound/>}/>
                </Routes>
     
    </UseContextProvoider>
    </>
  )
}

export default App